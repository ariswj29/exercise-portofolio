/* eslint-disable react/prop-types */
import { useState } from "react";

function Experience(props) {
    const projectList = props.data;
    const [currentPage, setCurrentPage] = useState(0);
    const mobileItemsPerPage = 1;
    const itemsPerPage = window.innerWidth < 640 ? mobileItemsPerPage : 3;

    const handleNext = () => {
        if (currentPage < Math.ceil(projectList.length / itemsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const currentItems = projectList.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <section className="flex flex-col sm:flex-row h-screen sm:h-full items-stretch gap-6 sm:gap-12 mx-auto max-w-5xl">
            <div className="flex flex-1 flex-col sm:text-left justify-center">
                <h1 className="text-3xl font-bold text-secondary mb-4">My Experience</h1>
                <div className="flex sm:flex-row flex-col items-center sm:items-start">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 text-center">
                        {currentItems.map((item, index) => (
                            <div key={index} className="flex flex-col border-2 border-solid border-tertiary rounded-3xl">
                                <a href={item.link} target="_blank" rel="noreferrer" className="flex flex-col h-full hover:border-2 hover:border-secondary rounded-3xl">
                                    <img src={item.image} alt={item.name} className="w-auto h-40 rounded-t-3xl" />
                                    <h3 className="text-base text-secondary font-bold mt-2 px-2">{item.id}. {item.name}</h3>
                                    <p className="text-sm text-secondary text-justify p-2">{item.description}</p>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <button
                        onClick={handlePrev}
                        className={`md:py-2 py-1 md:px-4 px-2 w-fit bg-secondary text-white border-none rounded-lg mx-auto sm:mx-0 ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage === 0}
                    >
                        {"<"}
                    </button>
                    <button
                        onClick={handleNext}
                        className={`md:py-2 py-1 md:px-4 px-2 w-fit bg-secondary text-white border-none rounded-lg mx-auto sm:mx-0 ${currentPage >= Math.ceil(projectList.length / itemsPerPage) - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentPage >= Math.ceil(projectList.length / itemsPerPage) - 1}
                    >
                        {">"} 
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Experience;
