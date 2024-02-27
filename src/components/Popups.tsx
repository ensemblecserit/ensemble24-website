"use client";

import cn from "@/lib/cn";
import { Lightbulb, Music, PauseOctagon, StepForward } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Popups = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [first, setFirst] = useState(true);
  const songs = ["audio/nebulakal.mp3"];

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

  // setting songs
  // State variables for managing audio playback
  const [audio, setAudio] = useState<HTMLAudioElement>(); // Holds the current audio element
  const [isPlaying, setIsPlaying] = useState<boolean>(false); // Indicates whether audio is playing
  const [current, setCurrent] = useState<number>(-2); // Stores the current song index (-2 for initial state)

  // Function to handle loading and starting a new song
  const setSong = () => {
    audio?.pause(); // Pause the current audio if any
    if (isPlaying) setIsPlaying(false); // Update playing state

    // Determining the next song index
    let temp;
    if (current === -2) temp = -1; // If initial state, set to -1 for first song
    else temp = current === songs.length - 1 ? -1 : current; // If last song, loop back to -1

    let aud = new Audio(songs[temp + 1]); // Create a new Audio object for the next song
    if (current !== -2) {
      // If not initial state, Set playing state & start audio
      setIsPlaying(true);
      aud.play();
    }

    setCurrent(temp + 1); // Update the current song index
    setAudio(aud); // Set the new audio element in state
  };

  // Initial effect for playing the first song
  // If initial state, load and play the first song
  useEffect(() => {
    if (current === -2) setSong();
  }, []);

  // Effect for handling audio play/pause based on isPlaying state
  // just using the state to apply pause and play functions
  useEffect(() => {
    if (audio) {
      if (isPlaying) audio?.play();
      else audio.pause();
    }
  }, [isPlaying]);

  // Function to toggle play/pause
  const toggle = () => audio && setIsPlaying(!isPlaying);

  // Function to handle moving to the next song
  const handleNext = () => setSong();

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

      <div className="panel">
        <button className="btn" onClick={toggle} style={{ display: "none" }}>
          <Lightbulb size={size} />
        </button>
        {!isOpen && (
          <>
            <button className="btn" onClick={toggle}>
              {isPlaying ? <PauseOctagon size={size} /> : <Music size={size} />}
            </button>
            <button className="btn" onClick={handleNext}>
              <StepForward size={size} />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Popups;
