import Section from "@/components/Section";
import SavedEvents from "./SavedEvents";
import styles from "../events.module.css";
import Card from "./Card";

const Events = () => {
  return (
    <Section id="events" tag="Events">
      <div className={styles.events_section}>
        <div className={styles.categories}>
          <div className="row">
            <Card link="workshops" text="Workshops" className={styles.c1} />
            <Card
              link="competitions"
              text="Competitions"
              className={styles.c2}
            />
          </div>
          <div className="row">
            <Card link="exhibitions" text="Exhibitions" className={styles.c3} />
            <Card link="gaming" text="Gaming" className={styles.c4} />
          </div>
        </div>
        <div>
          <SavedEvents />
        </div>
      </div>
    </Section>
  );
};

export default Events;
