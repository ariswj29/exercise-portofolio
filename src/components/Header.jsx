import { Link } from "react-router-dom";

const navItems = [
    { name: 'Home', href: '' },
    { name: 'About', href: 'about' },
    { name: 'Experience', href: 'experience' },
    { name: 'Contact', href: 'contact' },
];

function Header(){ 
    return(
        <header className="flex gap-[64px] items-center w-[100%] bg-primary">      
            <div>
                <Link to='/'>
                    <span className="mx-8 font-bold text-[24px] text-secondary hover:text-tertiary">ariswj</span>
                </Link>
            </div>      
            <nav className="flex w-[100%] justify-center font-bold text-[16px] text-secondary">
                <ul className="flex items-center gap-[32px] p-0 list-none">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link className="text-inherit decoration-none hover:text-tertiary border-b-2 border-transparent hover:border-tertiary transition-all" to={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header