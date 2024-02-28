import cn from "@/lib/cn";
import styles from "./footer.module.css";
import addSuffix from "@/lib/addSuffix";
import Link from "next/link";
import { Share2 } from "lucide-react";

const Footer = () => {
  let visiter = 211;
  const url = "https://ensemblecse.tech";
  const text =
    "Check out this website and join for the department fest @ CSE Dept, RIT, Kottayam!";
  const message = encodeURIComponent(`${text}: ${url}`);
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <footer className={cn(styles.footer, "provide_padding")}>
      <div className={styles.info}>
        <div className={styles.visitor}>
          <p>Btw, you are the {addSuffix(visiter)} visiter of this site.</p>
          <Link href={whatsappUrl} target="_blank">
            Give us a share! <Share2 size={16} />
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/glimpses">Gallery</Link>
        </div>
      </div>
      <div className={styles.ensemble}>
        <div className={styles.logo}>ENSEMBLE</div>
        <div className={styles.copyright}>
          <div>Copyright © 2024</div>
          <div>ENSEMBLE'24 CSE RIT</div>
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
