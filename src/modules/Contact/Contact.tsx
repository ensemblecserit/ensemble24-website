"use client";
import Section from "@/components/Section";
import styles from "./contact.module.css";
import cn from "@/lib/cn";
import emailjs from "@emailjs/browser";
import { useState, ChangeEvent } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setFormData({
        fullName: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <Section id="contact" tag="Contact" className={styles.contact}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <div className={cn("shift", styles.form_row)}>
          <label htmlFor="fullName">
            ensemble@cserit: <span className="text-blue">Enter your name</span>
            <span className="text-white">$</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={handleInputChange}
            name="fullName"
            id="fullName"
            required
          />
        </div>
        <div className={cn("shift", styles.form_row)}>
          <label htmlFor="email">
            ensemble@cserit: <span className="text-blue">Enter your email</span>
            <span className="text-white">$</span>
          </label>
          <input
            type="email"
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            required
            id="email"
          />
        </div>
        <div className={cn("shift", styles.form_row)}>
          <label htmlFor="message">
            ensemble@cserit: <span className="text-blue">Enter message</span>
          </label>
          <div className={styles.message}>
            <span className="text-white">$</span>
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              name="message"
              required
              wrap="hard"
            />
          </div>
        </div>
        <div className={cn("shift", styles.form_row)}>
          <button type="submit" disabled={loading}>
            {!loading ? "SEND MESSAGE" : "SENDING.."}
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
