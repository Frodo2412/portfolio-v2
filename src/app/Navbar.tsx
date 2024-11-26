import Link from "next/link";
import HomeIcon from "@/icons/HomeIcon";
import BlogIcon from "@/icons/BlogIcon";
import ProjectsIcon from "@/icons/ProjectsIcon";
import AboutIcon from "@/icons/AboutIcon";
import ContactIcon from "@/icons/ContactIcon";

export default function Navbar() {

    return (
        <ul className="flex flex-col items-center justify-center h-screen p-5 fill-amber-950">
            <Link
                href={'/'}
                className="transition-transform transform hover:scale-110 pb-2 pt-2 hover:fill-amber-900">
                <HomeIcon/>
            </Link>
            <Link
                href={'/blog'}
                className="transition-transform transform hover:scale-110 pb-2 pt-2 hover:fill-amber-900">
                <BlogIcon/>
            </Link>
            <Link
                href={'/projects'}
                className="transition-transform transform hover:scale-110 pb-2 pt-2 hover:fill-amber-900">
                <ProjectsIcon/>
            </Link>
            <Link
                href={'/about'}
                className="transition-transform transform hover:scale-110 pb-2 pt-2 hover:fill-amber-900">
                <AboutIcon/>
            </Link>
            <Link
                href={'/contact'}
                className="transition-transform transform hover:scale-110 pb-2 pt-2 hover:fill-amber-900">
                <ContactIcon/>
            </Link>
        </ul>
    );

}