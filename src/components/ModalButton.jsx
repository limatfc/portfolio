import classes from "../styles/components/ModalButton.module.css";

export default function ModalButton({ children, link, classStyle }) {
  let applyStyle =
    classStyle === "primary" ? classes.hostingButton : classes.gitButton;

  return (
    <a
      className={`${classes.linkButton} ${applyStyle}`}
      rel="noreferrer"
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}
