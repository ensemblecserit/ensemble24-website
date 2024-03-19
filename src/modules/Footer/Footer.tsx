import cn from "@/lib/cn";
import styles from "./footer.module.css";
import addSuffix from "@/lib/addSuffix";
import Link from "next/link";
import { Share2 } from "lucide-react";
import { kv } from "@vercel/kv";
import { unstable_noStore as noStore } from "next/cache";
import { Suspense } from "react";
import { musicCredit } from "@/data/songData";

const VisitorCount = async () => {
  // Disable data caching for visitor count
  noStore();
  let visitor;
  try {
    visitor = await kv.get<number>("visitor-count");
  } catch (error) {
    console.log(error);
    // Fallback
    visitor = 212;
  }

  return <>{addSuffix(visitor)}</>;
};

const Footer = () => {
  const url = "https://ensemblecse.tech";
  const text =
    "Check out this website and join for the department fest @ CSE Dept, RIT, Kottayam!";
  const message = encodeURIComponent(`${text}: ${url}`);
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <footer className={cn(styles.footer, "provide_padding")}>
      <div className={styles.info}>
        <div className={styles.visitor}>
          <p>
            Btw, you are the
            <span className="green">
              <Suspense fallback=" XYZth ">
                {" "}
                <VisitorCount />{" "}
              </Suspense>
            </span>
            visitor of this site.
          </p>
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
          <Link href={musicCredit} className={styles.credits} target="_blank">
            Music credits
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
