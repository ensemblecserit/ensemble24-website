import Section from "@/components/Section";
import styles from "./sponsors.module.css";
import Item from "./Item";
import { alRazi, decathlon, rigLabs, wolfram } from "@/data/sponsors";

const Sponsors = () => {
  // use the sponsor_container as rows
  return (
    <Section id="sponsors" tag="Sponsors">
      <div className={styles.heading}>
        <p>Meet our</p>
        <h1>Partners</h1>
      </div>
      <div className={styles.sponsor_container}>
        <Item {...decathlon} />
        <Item {...alRazi} />
        <Item {...rigLabs} />
        <Item {...wolfram} />
      </div>
    </Section>
  );
};

export default Sponsors;
