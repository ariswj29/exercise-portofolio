import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
    { name: 'Home', href: '' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
];

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="flex items-center justify-between w-full bg-primary p-4">
            <div>
                <Link to='/'>
                    <span className="mx-8 font-bold text-2xl text-secondary hover:text-tertiary">ariswj</span>
                </Link>
            </div>
            <nav className="hidden sm:flex w-full justify-center font-bold text-lg text-secondary">
                <ul className="flex items-center gap-8 p-0 list-none">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link className="text-inherit decoration-none hover:text-tertiary border-b-2 border-transparent hover:border-tertiary transition-all" to={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="sm:hidden flex items-center">
                <button onClick={toggleDropdown} className="text-secondary hover:text-tertiary focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-primary sm:hidden">
                    <nav className="flex flex-col items-center font-bold text-lg text-secondary">
                        <ul className="flex flex-col items-center gap-4 p-4 list-none">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className="text-inherit decoration-none hover:text-tertiary border-b-2 border-transparent hover:border-tertiary transition-all"
                                        to={item.href}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Header;
