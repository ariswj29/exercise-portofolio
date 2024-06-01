function Contact(){
    return(
        <section className="flex flex-col sm:flex-row items-stretch justify-center h-screen sm:h-full mx-auto max-w-5xl">
            <div className="flex flex-col items-center justify-center py-10 bg-gray-400">
                <h1 className="text-4xl font-bold text-secondary mb-4">Contact</h1>
                <p className="text-lg text-secondary text-justify">If you have any questions or would like to discuss further, you can contact me at : </p>
                    <div className="py-8 px-4 justify-center items-center text-tertiary">
                        <a href="mailto:ariswj29@gmail.com?subjek=Hello%20Aris" target="_blank">
                            <i className="fa-regular fa-envelope fa-3x sm:fa-2xl hover:text-secondary px-2"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/aris-wildan-b49a24226/" target="_blank">
                            <i className="fa-brands fa-linkedin fa-3x sm:fa-2xl hover:text-secondary px-2"></i>
                        </a>
                        <a href="https://github.com/ariswj29" target="_blank">
                            <i className="fa-brands fa-github fa-3x sm:fa-2xl hover:text-secondary px-2"></i>
                        </a>
                        <a href="https://www.instagram.com/ariswj_" target="_blank">
                            <i className="fa-brands fa-instagram fa-3x sm:fa-2xl hover:text-secondary px-2"></i>
                        </a>
                    </div>
            </div>
        </section>
    )
}

export default Contact;