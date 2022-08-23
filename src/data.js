import { BiNotepad } from "react-icons/bi";
import { TbBuildingFactory2 } from "react-icons/tb";
import { HiOutlineDatabase } from "react-icons/hi";
import { MdOutlinePrivacyTip } from "react-icons/md";
let dataSidebar = [
  { id: 1, title: "Report", to: "/report", icon: <BiNotepad /> },
  { id: 2, title: "Factory", to: "/", icon: <TbBuildingFactory2 /> },
  {
    id: 3,
    title: "Integrations",
    to: "/integrations",
    icon: <HiOutlineDatabase />,
  },
  { id: 4, title: "Support", to: "/support", icon: <MdOutlinePrivacyTip /> },
];

let navbar = [
  { id: 1, title: "STATIONS" },
  { id: 2, title: "OPERATORS" },
  { id: 3, title: "WATCHERS" },
  { id: 4, title: "RESOURCES" },
  { id: 5, title: "SENOSORS" },
];
let weeks = [
  { id: 1, day: "Mon" },
  { id: 2, day: "Tue" },
  { id: 3, day: "Wed" },
  { id: 4, day: "Thu" },
  { id: 5, day: "Fri" },
  { id: 6, day: "Sat" },
  { id: 7, day: "Sun" },
];
let person = [
  {
    id: 1,
    name: "Savannah Nguyen",
    object: "STATION-1",
  },
  {
    id: 2,
    name: "Guy Hawkings",
    object: "STATION-2",
  },
  {
    id: 3,
    name: "Elenaor Pena",
    object: "STATION-3",
  },
  {
    id: 4,
    name: "Brookl Simmons",
    object: "STATION-4",
  },
  {
    id: 5,
    name: "Kathryan Murphy",
    object: "STATION-5",
  },
];
export { dataSidebar, navbar, weeks, person };
