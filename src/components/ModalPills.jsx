import classes from "../styles/components/ModalPills.module.css";

export default function ModalPills({ pillDataArray, style }) {
  console.log(pillDataArray);
  const pillsContent = pillDataArray.map((item) => (
    <span className={`${classes.pills} ${style}`} key={Math.random() * 100}>
      {item}
    </span>
  ));

  return pillsContent;
}
