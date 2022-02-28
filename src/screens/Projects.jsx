import { useState } from "react";
import { useSetScroll } from "../scripts/use-set-scroll";
import Modal from "../scripts/modal";
import ProjectCard from "../components/ProjectCard";
import classes from "../styles/screens/Projects.module.css";
import projectsData from "../data/projects.json";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [clickedItem, setClickedItem] = useState([]);

  useSetScroll(showModal);

  const cards = projectsData.map((item) => (
    <ProjectCard
      key={item.id}
      projectData={item}
      onClick={onProjectCardClick}
    />
  ));

  function onToggleModal() {
    setShowModal(!showModal);
  }

  function onProjectCardClick(id) {
    const clickedProjectCard = projectsData.find((item) => item.id === id);
    setClickedItem(clickedProjectCard);
    onToggleModal();
  }

  return (
    <section id="projects" className={classes.projectsWrapper}>
      <h2>Projects</h2>
      <p className={classes.paragraph}>
        Here are the projects I have done so far, plus a few I am going to be
        making during the Novare Intensive FrontEnd Course.
      </p>
      <div className={classes.allCardsWrapper}>{cards}</div>
      <Modal
        showModal={showModal}
        clickedItem={clickedItem}
        onToggleModal={onToggleModal}
      />
    </section>
  );
}
