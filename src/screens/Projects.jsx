import classes from "../styles/screens/Projects.module.css";
import Modal from "../components/Modal";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

  function onToggleModal() {
    setShowModal(!showModal);
  }

  return (
    <section id="projects" className={classes.projectsWrapper}>
      <h2>Projects</h2>
      <p>
        Here are the projects I have done so far, plus a few I am going to be
        making during the Novare Intensive FrontEnd Course.
      </p>
      <div className={classes.allCardsWrapper}>
        <ProjectCard onToggleModal={onToggleModal} />
      </div>
      {showModal && <Modal onToggleModal={onToggleModal} />}
    </section>
  );
}
