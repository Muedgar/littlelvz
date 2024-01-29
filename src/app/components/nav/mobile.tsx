import { faBell, faFolder, faHome, faMessage, faPerson } from "@fortawesome/free-solid-svg-icons";
import { faFaceTired } from "@fortawesome/free-solid-svg-icons/faFaceTired";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons/faPeopleGroup";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LittleMobile() {
  return (
    <div className="w-full h-fit flex flex-col justify-evenly items-center mt-[100px]">
        <Link href="/asdf" className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
    <FontAwesomeIcon
      className="w-[25px] h-[25px] rounded-[50%]" 
      icon={faHome} color="#37cbdf" />
    <p className="text-white text-lg ml-2">Home</p>
</Link>

        <div className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
            <FontAwesomeIcon
                className="w-[25px] h-[25px] rounded-[50%]" 
                icon={faPeopleGroup} color="#37cbdf" />
            <p className="text-white text-lg ml-2">People</p>
        </div>


        <div className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
            <FontAwesomeIcon
                className="w-[25px] h-[25px] rounded-[50%]" 
                icon={faFolder} color="#37cbdf" />
            <p className="text-white text-lg ml-2">Files</p>
        </div>

        <div className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
            <FontAwesomeIcon
                className="w-[25px] h-[25px] rounded-[50%]" 
                icon={faMessage} color="#37cbdf" />
            <p className="text-white text-lg ml-2">Messages</p>
        </div>

        <div className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
            <FontAwesomeIcon
                className="w-[25px] h-[25px] rounded-[50%]" 
                icon={faBell} color="#37cbdf" />
            <p className="text-white text-lg ml-2">Notifications</p>
        </div>

        <div className="flex w-fit mt-5 p-2 rounded-md bg-[#444]">
            <FontAwesomeIcon
                className="w-[25px] h-[25px] rounded-[50%]" 
                icon={faUser} color="#37cbdf" />
            <p className="text-white text-lg ml-2">Profile</p>
        </div>
    </div>
  );
}
