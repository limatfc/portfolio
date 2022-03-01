import classes from "../styles/components/ModalButton.module.css";

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
