import classes from "../styles/screens/Contact.module.css";

import { personalData } from "../data/contact-personal";
import { socialMediaData } from "../data/contact-social-media";

export default function Contact() {
  // So close -1
  // The UL tag does not go here, otherwise you have 10 <ul>'s each one with just 1 <li>
  // instead of 1 <ul> with 10 <li>
  // See the refactor here and compare with your master
  const personalInformation = personalData.map((item) => (
    <li key={item.label}>
      {item.component}
      <span className={classes.labelText}>{item.label}</span>
    </li>
  ));

  // good
  const socialMediaInformation = socialMediaData.map((item) => (
    <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
      {item.component}
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
