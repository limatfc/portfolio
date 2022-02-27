import classes from "../styles/screens/Contact.module.css";

import personalInfomationDataFunction from "../data/contact-personal-information";
import socialMediaDataFunction from "../data/contact-social-media";

export default function Contact() {
  const personalInformationData = personalInfomationDataFunction();
  const socialMediaData = socialMediaDataFunction();

  const personalInformation = personalInformationData.map((item) => (
    <div key={item.label} className={classes.labelWrapper}>
      <span>{item.component}</span>
      <label className={classes.labelText}>{item.label}</label>
    </div>
  ));

  const socialMedia = socialMediaData.map((item) => (
    <a key={item.link} href={item.link} target="_blank" rel="noreferrer">
      {item.component}
    </a>
  ));

  return (
    <section className={classes.techWrapper} id="contact">
      <h2>Contact</h2>
      <p>
        Here is my contact information, in case you want to have some coffee and
        discuss any of my projects.
      </p>
      {personalInformation}
      <div className={classes.socialMediaWrapper}>
        <span>{socialMedia}</span>
        <span>@2022 - Thaisa Lima</span>
      </div>
    </section>
  );
}
