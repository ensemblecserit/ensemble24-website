"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../events.module.css";
import { Bookmark, BookmarkCheck, PencilLine } from "lucide-react";
import { PostType } from "@/data/eventTypes";
import Link from "next/link";

type Props = PostType;
const Post = (props: Props) => {
  const [saved, setSaved] = useState(false);
  const toggleSave = () =>
    setSaved((s) => {
      return !s;
    });

  const url = `/events/${props.folder}/${props.img}`;
  return (
    <div className={styles.post}>
      <Image src={url} height={350} width={350} alt="Event" draggable={false} />
      {!props.hideRegister && (
        <div className={styles.options}>
          <div className={styles.save} onClick={toggleSave}>
            {saved ? <BookmarkCheck /> : <Bookmark />}
            <span className={styles.text}>SAVE{saved ? "D" : ""}</span>
          </div>
          <Link
            href={props.link}
            className={styles.register}
            target="_blank"
            referrerPolicy="no-referrer"
          >
            <PencilLine />
            <span className={styles.text}>REGISTER</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Post;
