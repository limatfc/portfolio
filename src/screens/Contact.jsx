import {
  BsGithub,
  BsLinkedin,
  BsFillTelephoneInboundFill,
} from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact">
      <BsGithub />
      <AiFillInstagram />
      <BsLinkedin />
      <BsFillTelephoneInboundFill />
      <HiLocationMarker />
      <MdEmail />
    </section>
  );
}
