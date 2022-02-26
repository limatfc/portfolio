import projectsData from "../data/projects.json";

export default function Projects() {
  const cards = projectsData.map((item) => (
    <div key={item.id}>
      <img
        src={item.imageURL}
        alt="ilustration related to the project title."
      />
      <h3>{item.title}</h3>
    </div>
  ));

  return (
    <section id="projects">
      <h2>Projects</h2>
      <p>
        Here are the projects I have done so far, plus a few I am going to be
        making during the Novare Intensive FrontEnd Course.
      </p>
      {cards}
    </section>
  );
}
