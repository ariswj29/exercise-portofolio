import projectPPDB from './assets/project-ppdb.png';
import projectCMI from './assets/project-cmi.png';
import projectMardawa from './assets/project-mardawa.png';
import projectDosis from './assets/project-dosis.png';
import projectUMKM from './assets/project-solusi.png';
import projectSipakle from './assets/project-sipakle.png';
import projectCmsPpdb from './assets/project-cms-ppdb.png';
import projectPortfolio from './assets/project-portofolio.png';
import projectTodoList from './assets/project-todo-list.png';

function Data(){
    const dataNavbar = [
        { name: 'Home', href: '' },
        { name: 'About', href: 'about' },
        { name: 'Experience', href: 'experience' },
        { name: 'Contact', href: 'contact' },
    ];

    const dataExperience = [
    {
        id: 1,
        name: "Todo List Application (Exercise From Purwadhika Digital School)",
        link: "https://todo-list.ariswj.my.id/",
        image: projectTodoList,
        description: "This project is a todo list application that I created when I was studying at Purwadhika Digital School. This application was created using React JS and Tailwind CSS for the styling."
    },
    {
        id: 2,
        name: "Web Company PT. Mardawa Intiguna Persada",
        link: "https://www.mardawa.id/",
        image: projectMardawa,
        description: "Company Website PT. Mardawa Intiguna Persada is a website for the company PT. Mardawa Intiguna Persada. This website was created using Next JS and Adonis JS for the backend. I helped in creating the website in the endpoint section to retrieve data from the database and also helped create several pages."
    },
    {
        id: 3,
        name: "Web Company PT. Cipta Mulia Innovation",
        link: "https://www.bayardigital.com/",
        image: projectCMI,
        description: "Web Company PT. Cipta Multi Innovation is a website for the company PT. Cipta Multi Innovation. This website was created using Next JS and Adonis JS for the backend. I helped in creating the website in the endpoint section to retrieve data from the database and also helped to create several pages."
    },
    {
        id: 4,
        name: "Document Tracker Information System",
        link: "https://dosis.demo.or.id/sign-in/",
        image: projectDosis,
        description: "Document Tracker Information System is an application from the Project Hope Foundation company for finances in every existing activity. This application was created using React JS and Laravel 9 for the backend. I helped in creating the application in several menus containing crud and also created several endpoints to retrieve data from the database"
    },
    {
        id: 5,
        name: "CMS Aplication Solusi UMKM Kota Bogor",
        link: "https://umkm-cms.miptech.my.id/",
        image: projectUMKM,
        description: "This project is an application for managing MSMEs in Bogor City. This application was created using React JS and Laravel 9 for the backend. I helped in creating a CMS that contains crud for website content, also created several graphs to display MSME data and endpoints to retrieve data from the database."
    },
    {
        id: 6,
        name: "System Information Teacher Credit Score Kab Sleman",
        link: "https://pakguru.slemankab.go.id/",
        image: projectSipakle,
        description: "Sleman District Teacher Credit Score Assessment Application is an application for calculating teacher credit scores in Sleman Regency. This application was created using React JS and Laravel 8. I helped in creating the application on the frontend and also created several endpoints to retrieve data from the database."
    },
    {
        id: 7,
        name: "Portal PPDB (Kota Bogor, Cilegon, Palembang)",
        link: "https://ppdb.kotabogor.go.id/",
        image: projectPPDB,
        description: "PPDB Online 2023 is an application for registering new students online. This application was created using React JS and Laravel 9. I helped in creating the CMS for the website content and also created the endpoint to retrieve data from the database."
    },
    {
        id: 8,
        name: "CMS For Portal PPDB (Kota Bogor, Cilegon, Palembang)",
        link: "https://api-portal-ppdb.kotabogor.go.id/cms/login/",
        image: projectCmsPpdb,
        description: "PPDB Portal CMS is an application for managing content about PPDB and the data will be displayed on the PPDB portal website. This application was created using Laravel 8 Monolith. I'm here working on all parts of the menu and also the crud function."
    },
    {
        id: 9,
        name: "My Portfolio Website V1",
        link: "https://v1.ariswj.my.id/",
        image: projectPortfolio,
        description: "This is my first portfolio website. This website was created using React JS and Tailwind CSS. I created this website to show my portfolio and also to learn more about using React JS and Tailwind CSS in creating single-page applications."
    }
    ]

    return(
        {'dataNavbar': dataNavbar, 'dataExperience': dataExperience}
    )
}

export default Data;