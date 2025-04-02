import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export const NavbarLinks = [
    {
        id: 1,
        title: "Inicio",
        href: "/",
    },
    {
        id: 2,
        title: "Celulares",
        href: "/celulares",
    },
    {
        id: 3,
        title: "Sobre Nosotros",
        href: "/nosotros",
    },
];

export const socialLinks = [
    {
        id: 1,
        title: "Facebook",
        href: "https://facebook.com",
        icon: <FaFacebookF />,
    },
    {
        id: 2,
        title: "Instagram",
        href: "https://instagram.com",
        icon: <FaInstagram />,
    },
];
