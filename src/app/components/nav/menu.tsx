import { faBars, faD } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LittleMenu() {
  return (
    <FontAwesomeIcon 
            className="w-[30px] h-[30px] rounded-[50%]" 
            icon={faBars} color="#37cbdf" />
  );
}
