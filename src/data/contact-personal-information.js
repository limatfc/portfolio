import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import classes from "../styles/data/ContactIcons.module.css";

export const personalInformationData = [
  {
    component: (
      <BsFillTelephoneInboundFill
        className={classes.personalInformationIcons}
      />
    ),
    label: "+46 76 080 9234",
  },
  {
    component: (
      <HiLocationMarker className={classes.personalInformationIcons} />
    ),
    label: "Upplands Vasby, Sweden",
  },
  {
    component: <MdEmail className={classes.personalInformationIcons} />,
    label: "thaisafc.lima@outlook.com",
  },
];
