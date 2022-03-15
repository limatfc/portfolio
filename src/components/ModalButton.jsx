import classes from "../styles/components/ModalButton.module.css";

// Over engineering, this component should not exist. A single typo in your label will break the CSS classes.
// Just use the example i did on the todo list of "button-primary"
export default function ModalButton({ link, label }) {
  let buttonStyle = "";
  if (label === "Visit website / app") buttonStyle = classes.hostingButton;
  if (label === "Git repository") buttonStyle = classes.gitButton;

  return (
    <a
      className={`${classes.linkButton} ${buttonStyle}`}
      rel="noreferrer"
      href={link}
      target="_blank"
    >
      {label}
    </a>
  );
}
