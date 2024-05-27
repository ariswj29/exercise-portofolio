const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

function Header(){ 
    const styleUl = "flex items-center gap-[32px] p-0 list-none"
    const styleLiA = "text-inherit decoration-none hover:text-gray-600 border-b-2 border-transparent hover:border-gray-600 transition-all"

    return(
        <header className="flex fixed gap-[64px] items-center mb-[64px] w-[100%]">      
            <div>
                <button onClick={()=>window.scrollTo(0,0)}>
                    <span className="mx-8 font-bold text-[24px] text-black hover:text-gray-600">ariswj</span>
                </button>
            </div>      
            <nav className="flex w-[100%] justify-center font-bold text-[16px] text-black">
                <ul className={styleUl}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a className={styleLiA} href={item.href}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header