"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../events.module.css";
import { Bookmark, BookmarkCheck, PencilLine } from "lucide-react";
import { PostType } from "@/data/eventTypes";
import {
  addPostToLocalStorage,
  removePostFromLocalStorage,
} from "@/lib/postSave";
import { getSavedArrayFromLocalStorage } from "@/lib/postSave";

type Props = PostType;

const Post = (props: Props) => {
  const [saved, setSaved] = useState<boolean | null>(null);
  const toggleSave = () => {
    // adding the post to saved or deleting it accordingly in ls
    if (saved) removePostFromLocalStorage(props.id);
    else addPostToLocalStorage({ ...props });

    // toggling the saved state
    setSaved(!saved);
  };

  useEffect(() => {
    const saved = getSavedArrayFromLocalStorage();
    setSaved(saved.includes(props.id));
  }, []);

  const url = `/events/${props.folder}/${props.img}`;
  return (
    <div className={styles.post}>
      <Image src={url} height={350} width={350} alt="Event" draggable={false} />
      <div className={styles.options}>
        <div className={styles.save} onClick={toggleSave}>
          {saved !== null && (
            <>
              {saved ? <BookmarkCheck /> : <Bookmark />}
              <span className={styles.text}>SAVE{saved ? "D" : ""}</span>
            </>
          )}
        </div>
        {!props.hideRegister && (
          <Link
            href={props.link}
            className={styles.register}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <PencilLine />
            <span className={styles.text}>REGISTER</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Post;
