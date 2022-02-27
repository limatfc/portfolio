import classes from "../styles/components/ModalButton.module.css";

export default function ModalButton({ link, label, style }) {
  return (
    <a
      className={`${classes.linkButton} ${style}`}
      rel="noreferrer"
      href={link}
      target="_blank"
    >
      {label}
    </a>
  );
}
