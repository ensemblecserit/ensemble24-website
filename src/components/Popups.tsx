"use client";

import cn from "@/lib/cn";
import { Lightbulb, Music, PauseOctagon, StepForward } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { path } from "../data/songData";

const Popups = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const songs = [path];

  // dealing with popup
  useEffect(() => {
    if (!first) return;
    const timeout = setTimeout(() => {
      if (first) {
        setIsOpen(true);
        setFirst(false);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [first]);
  const handleYes = () => {
    toggle();
    setIsOpen(false);
  };
  const handleNo = () => {
    setIsOpen(false);
  };

  /**Adds a className to body tag on hint onClick and removes it after a set time */
  const handleHints: () => void = useCallback(() => {
    const hintCls = "hint-active";
    let hasHint = document.body.classList.contains(hintCls);
    let timeout;
    if (!hasHint) {
      document.body.classList.toggle(hintCls);
      timeout = setTimeout(() => {
        document.body.classList.toggle(hintCls);
      }, 3000);
    } else {
      clearTimeout(timeout);
    }
  }, []);

  const [audio, setAudio] = useState<HTMLAudioElement>(); // Holds the current audio element
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Indicates whether audio is playing

  useEffect(() => {
    // Function to handle loading and starting a new song
    const setSong = async () => {
      let aud = new Audio(songs[0]);
      aud.loop = true;
      setAudio(aud); // Set the new audio element in state
    };

    setSong();
  }, []);

  // Effect for handling audio play/pause based on isPlaying state
  // just using the state to apply pause and play functions
  useEffect(() => {
    const stopStart = async () => {
      if (audio) {
        if (isPlaying) await audio?.play();
        else audio.pause();
      }
    };

    stopStart();
  }, [isPlaying]);

  // Function to toggle play/pause
  const toggle = () => audio && setIsPlaying(!isPlaying);

  let size = 25;
  return (
    <>
      <div className="logo_for_mobile">
        <div>Ensemble'24 | </div>
        <Image
          src="/ensemble-white.webp"
          height={20}
          width={18}
          alt="Ensemble '24"
        />
      </div>

      <div className={cn("popup", isOpen ? "open" : "close")}>
        <div className="popup-content">
          <p>Would you like to listen to some music?</p>
          <button onClick={handleYes}>Yes</button>
          <button onClick={handleNo}>No</button>
        </div>
      </div>

      <div className="panel" style={{ display: "flex" }}>
        <button
          className="btn popup-cont popup-dir-invert"
          onClick={handleHints}
        >
          <span className="popup-element">Hints</span>
          <Lightbulb size={size} />
        </button>

        {!first && !isOpen && (
          <>
            <button
              className="btn popup-cont popup-dir-invert"
              onClick={toggle}
            >
              {isPlaying ? (
                <>
                  <span className="popup-element">Pause</span>

                  <PauseOctagon size={size} />
                </>
              ) : (
                <>
                  <span className="popup-element">Play</span>
                  <Music size={size} />
                </>
              )}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Popups;
