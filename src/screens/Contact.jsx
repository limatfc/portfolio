import classes from "../styles/screens/Contact.module.css";

import { personalData } from "../data/contact-personal";
import { socialMediaData } from "../data/contact-social-media";

export default function Contact() {
  const personalInformation = personalData.map((item) => (
    <div key={item.label} className={classes.personalInformationWrapper}>
      <span>{item.component}</span>
      <span className={classes.labelText}>{item.label}</span>
    </div>
  ));

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
        {personalInformation}
      </section>
      <div className={classes.socialMediaWrapper}>
        <span>{socialMediaInformation}</span>
        <span className={classes.footerText}>@2022 - Thaisa Lima</span>
      </div>
    </>
  );
}
