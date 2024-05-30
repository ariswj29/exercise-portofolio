import imgMe from '../assets/me-removebg.png';
import imgMeMobile from '../assets/me-mobile-removebg.png';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <section className="flex flex-col sm:flex-row mt-32 items-stretch gap-6 sm:gap-12 mx-auto max-w-4xl">
            <div className="w-full sm:w-96 order-1 sm:order-2">
                <picture className="w-full h-full" id="gradient-background">
                <source srcSet={imgMeMobile} media="(max-width: 850px)" />
                <img className="w-full h-full object-cover" src={imgMe} alt="Aris Wildan Jannatan" />
                </picture>
            </div>
            <div className="flex flex-1 flex-col self-center justify-between text-center sm:text-left order-2 sm:order-1">
                <h1 className="text-secondary pb-8 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                    Hii... This is
                    <br />
                    <span className="text-primary sm:text-4xl md:text-4xl5">Aris Wildan Jannatan</span>
                </h1>
                <p className="max-w-full sm:max-w-3xl text-secondary text-justify pb-8 font-medium leading-relaxed">
                I am a junior web developer and I have a little experience in web development. Now, I'm learning in 
                <a className="text-primary" href='https://purwadhika.com/' target='_blank'> Purwadhika Digital School</a> to improve my skills.
                </p>
                <Link to={'/about'} className="md:py-2 py-1 md:px-4 px-2 w-fit bg-secondary text-white border-none rounded-lg mx-auto sm:mx-0">
                More About Me
                </Link>
            </div>
        </section>
    )
}

export default Home;