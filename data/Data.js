import { BiMessageAltDots, BiHomeAlt } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";

export const menu = [
  {
    name: "Home",
    link: "/chat",
    Icon: BiHomeAlt,
  },
  {
    name: "Messages",
    link: "/chat",
    Icon: BiMessageAltDots,
  },
  {
    name: "Contact",
    link: "/chat",
    Icon: RiContactsBook2Line,
  },
];

// Peoples
export const peoples = [
  {
    id: 1,
    imageUrl: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Laura Marano",
  },
  {
    id: 2,
    imageUrl: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Laura Marano",
  },
  {
    id: 3,
    imageUrl: "https://randomuser.me/api/portraits/women/81.jpg",
    name: "Laura Marano",
  },
];

export const messages = [
  {
    newMessage: "Hey kaise ho",
    you: true,
  },
  {
    newMessage: "Hey kaise ho",
    you: true,
  },
  {
    newMessage: "Hey kaise ho",
    you: false,
  },
];
