import { BsPersonLinesFill } from "react-icons/bs";
import { RiBillFill } from "react-icons/ri";
import { MdQueue } from "react-icons/md";

const SidebarData = [
  {
    title: "Appointment",
    path: "/Total/Appointment",
    cName: "sidebar-opt",
    icon: <MdQueue style={{ fontSize: "25px" }} />,
  },
  {
    title: "Patients",
    path: "/Total/Patients",
    cName: "sidebar-opt",
    icon: <BsPersonLinesFill style={{ fontSize: "25px" }} />,
  },
  {
    title: "Billing",
    path: "/Total/Billing",
    cName: "sidebar-opt",
    icon: <RiBillFill style={{ fontSize: "25px" }} />,
  },
];

export default SidebarData;
