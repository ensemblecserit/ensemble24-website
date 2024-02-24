import Section from "@/components/Section";
import styles from "../gallery.module.css";
import cn from "@/lib/cn";
import ClickableLink from "./ClickableLink";

const GalleryLink = () => {
  return (
    <Section id="gallery" tag="Gallery">
      <div className={styles.main}>
        <div className={styles.first_row}>
          <ClickableLink
            href="/glimpses#pre-events"
            className={styles.p1}
            caption="Explore Glimpses - Click any box!"
            text="Pre-events"
          />
          <ClickableLink
            href="/glimpses#logo-launch"
            className={styles.p2}
            text="Logo Launch"
          />
        </div>
        <div className={styles.second_row_container}>
          <div className={styles.second_row}>
            <div className={styles.second_cols}>
              <ClickableLink
                href="/glimpses#rebound"
                className={styles.p3}
                caption="Basketball competition"
                text="Rebound"
              />
              <ClickableLink
                href="/glimpses#googly"
                className={styles.p4}
                caption="County cricket competition"
                text="Googly"
              />
            </div>
            <ClickableLink
              href="/glimpses#previous-fest"
              className={cn(styles.second_cols, styles.p5)}
              text="Previous fest glimpses."
            />
          </div>
          <ClickableLink href="/glimpses" className={styles.third_row}>
            <div>&</div>
            <div> more</div>
          </ClickableLink>
        </div>
      </div>
    </Section>
  );
};

export default GalleryLink;
