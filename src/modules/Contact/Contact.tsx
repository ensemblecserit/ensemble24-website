import Section from "@/components/Section";
import styles from "./contact.module.css";
import cn from "@/lib/cn";

const Contact = () => {
  return (
    <Section id="contact" tag="Contact" className={styles.contact}>
      <form className={styles.form} autoComplete="off">
        <div className={cn("shift", styles.form_row)}>
          <label htmlFor="fullName">
            ensemble@cserit: <span className="text-blue">Enter your name</span>
            <span className="text-white">$</span>
          </label>
          <input type="text" id="fullName" />
        </div>
        <div className={cn("shift", styles.form_row)}>
          <label htmlFor="email">
            ensemble@cserit: <span className="text-blue">Enter your email</span>
            <span className="text-white">$</span>
          </label>
          <input type="text" id="email" />
        </div>
        <div className={cn("shift", styles.form_row)}>
          <label>
            ensemble@cserit: <span className="text-blue">Enter message</span>
          </label>
          <div className={styles.message}>
            <span className="text-white">$</span>
            <textarea wrap="hard" />
          </div>
        </div>
        <div className={cn("shift", styles.form_row)}>
          <label>
            ensemble@cserit: <span className="text-white">$</span>
          </label>
          <input type="text" placeholder="Type 'send' to send the message" />
        </div>
      </form>
    </Section>
  );
};

export default Contact;
