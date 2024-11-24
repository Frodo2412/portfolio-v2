import Link from "next/link";

function NavLink(props: { href: string; name: string }) {
    return (
        <Link
            href={props.href}
            className="text-blue-950 hover:text-blue-800 transition-transform transform hover:scale-110">
            {props.name}
        </Link>
    );
}

function NameCard() {
    return (
        <div className="flex items-center space-x-4">
            <Link href={"/"}>
                <h2 className="text-5xl text-gray-950">Bruno Lemus</h2>
                <p className="text-lg text-gray-900">Software Scientist</p>
            </Link>
        </div>
    );
}

export default function Header() {

    return (
        <nav className="bg-gradient-to-r bg-amber-50 shadow-md border-b-2 border-gray-950">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">
                <NameCard/>
                <ul className="flex space-x-6">
                    <NavLink href={'/projects'} name={'Projects'}/>
                    <NavLink href={'/blog'} name={'Blog'}/>
                    <NavLink href={'/about'} name={'About'}/>
                    <NavLink href={'/contact'} name={'Contact'}/>
                </ul>
            </div>
        </nav>
    );

}