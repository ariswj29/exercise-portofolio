function About(){
    return(
        <section className="flex flex-col sm:flex-row items-stretch gap-6 sm:gap-12 mx-auto max-w-4xl">
            <div className="flex flex-1 flex-col self-center justify-between text-center sm:text-left order-2 sm:order-1">
                <h1 className="text-4xl font-bold text-secondary mb-4">About Me</h1>
                <div className="flex sm:flex-row flex-col items-center sm:items-start">
                    <div className="flex flex-col pr-4 w-[100%] sm:w-[50%] text-justify">
                        <p className="text-lg text-secondary text-justify">Hi... my name is Aris Wildan Jannatan, I am junior web developer from Bandung, Indonesia. I have a little experience and have a passion for web development. Now, I'm learning in <a className="text-primary" href='https://purwadhika.com/' target='_blank'>Purwadhika Digital School</a> to improve my skills and want to learn new things.</p>
                        <p className="text-lg text-secondary text-justify">Previously, I worked at an IT company located in Jakarta, <a className="text-primary" href='https://mardawa.id/' target='_blank'>PT. Mardawa Intiguna Persada</a> for 2 years. At <a className="text-primary" href='https://mardawa.id/' target='_blank'>PT Mardawa Intiguna Persada</a> I learned to create dynamic websites that have content management system features for several clients </p>
                    </div>
                    <div className="flex flex-col pl-4 mt-8 sm:mt-0 w-[100%] sm:w-[50%]">
                        <p className="text-lg text-secondary">Here are some technologies that I have used:</p>
                        <div className="grid grid-cols-4 gap-4 p-4 text-center">
                            <i className="fa-brands fa-html5 mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="HTML5"></i>
                            <i className="fa-brands fa-css3-alt mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="CSS3"></i>
                            <i className="fa-brands fa-php mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="PHP"></i>
                            <i className="fa-brands fa-js mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="JavaScript"></i>
                            <i className="fa-brands fa-react mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="React"></i>
                            <i className="fa-brands fa-laravel mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="Laravel"></i>
                            <i className="fa-brands fa-node-js mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="Node.js"></i>
                            <i className="fa-solid fa-database mx-1 sm:mx-6 fa-3x hover:text-tertiary" title="Database MySql & PostgreSql"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About