import classes from "../styles/sections/Contact.module.css";

import personalData from "../data/contact-personal.json";
import socialMediaData from "../data/contact-social-media.json";

export default function Contact() {
  const personalInformation = personalData.map((item) => (
    <li key={item.label}>
      <img
        src={require(`../assets/icons/contact/${item.icon}`)}
        alt={item.alt}
      />
      <span className={classes.labelText}>{item.label}</span>
    </li>
  ));

  const socialMediaInformation = socialMediaData.map((item) => (
    <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
      <img
        src={require(`../assets/icons/contact/${item.icon}`)}
        alt={item.alt}
      />
    </a>
  ));

  return (
    <>
      <section className={classes.contactWrapper} id="contact">
        <h2>Contact</h2>
        <p className={classes.paragraph}>
          Here is my contact information, in case you want to have some coffee
          and discuss any of my projects.
        </p>
        <ul className={classes.personalInformationWrapper}>
          {personalInformation}
        </ul>
      </section>
      <footer className={classes.socialMediaWrapper}>
        <span>{socialMediaInformation}</span>
        <span className={classes.footerText}>@2022 - Thaisa Lima</span>
      </footer>
    </>
  );
}
