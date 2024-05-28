import imgMe from '../assets/me-removebg.png';

function Greeting(){
    return(
        <section className="flex mt-16 items-stretch gap-[72px] m-0-auto max-w-[80%]">
            <div className="flex flex-1 flex-col self-center justify-between">
                <h1 className="text-secondary pb-8 text-[64px] font-bold leading-[1]">Hii... This is 
                    <br /><span className="text-primary text-[54px]">Aris Wildan Jannatan</span>
                </h1>
                <p className="max-w-[80%] text-secondary pb-8 font-medium leading-[1.5]">
                    I am junior web developer and I have a little experience in web development. Now, I'm learning in <span className="text-primary">Purwadhika Digital School</span> to improve my skills.
                </p>
                <button className="py-[8px] px-[16px] w-fit bg-secondary text-white border-none rounded-[12px]">
                    More About Me
                </button>
            </div>
            <div className="w-[450px]">
                <picture className="w-[100%] h-[100%]" id="gradient-background">
                    <source srcSet="" media="(max-width: 850px)" />
                    <img className="w-[100%] h-[100%] object-cover" src={imgMe} />
                </picture>
            </div>
        </section>
    )
}

export default Greeting;