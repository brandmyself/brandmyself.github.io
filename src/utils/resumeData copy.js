import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlined from '@material-ui/icons/WebAssetOutlined';
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined';

export default {
    name        :   'Md. Imrul Hasan',
    title       :   'Data Analyst',
    birthday    :   '30th Aug, 1997',
    job         :   'Engineer',
    email       :   'imrulhasan273@gmail.com',
    address     :   'Savar, Dhaka',
    phone       :   '01775707460',
    socials     :    {
        Facebook    :   {
                link : 'https://www.facebook.com/backstreetimrul/',
                text : 'Imrul Hasan',
                icon : <FacebookIcon/>,
        },
        Linkedin    :   {
                link : 'https://www.linkedin.com/in/imrulhasan273/',
                text : 'Imrul Hasan',
                icon : <LinkedInIcon/>,
        },
        Github    :   {
                link : 'https://www.github.com/imrulhasan273',
                text : 'Imrul Hasan',
                icon : <GitHubIcon/>,
        },    
    },

    about       :   "A proactive and fast learning individual working as a dynamic data analyst \
                    utilizing analytical methodical skills and relevant expertise to help the company \
                    achieve business goals while sticking to vision, mission and values.",
    experiences  :    [
            {
                title           :       'Associate Data Analyst, Progoti Systems Ltd',
                date            :       'Oct 2020 - present',
                description     :       '- Developed ETL jobs using Python for MySQL, PostgreSQL DB.\n\
                                        - Developed SureCash Query Helper Portal in Web\n\
                                        - Create new PL/pgSQL functions or procedures.\n\
                                        - Modify existing PL/pgSQL functions or procedures.\n\
                                        - Bangladesh Bank Audit Report\n\
                                        - Growth Report\n\
                                        - Handle BI portal on web\n\
                                        - Social Welfare Disbursement\n\
                                        - Padma Multipurpose Bridge stipend project\n\
                                        - Daily, Monthly Adhoc Reports\n\
                                        - Checking RIT Report,Income Reports\n\
                                        - Automated 3rd RIT Report\n\
                                        - Automate Excel Report using Python\n\
                                        - Prepare documentation for reports\n\
                                        - Data Scraping from portals to match with db'
            },
    ],
    educations  :    [
        {
            title           :       'BSc. in CSE, University of Asia Pacific',
            date            :       'April 2016 - June 2020',
            description     :       'Computer Science & Engineering\n\
                                     Thesis: Deep Learning-Based Violence Detection System From Surveillance Video'
        },
        {
            title           :       'HSC, Jahangirnagar University School & College',
            date            :       'April 2012 - May 2014',
            description     :       'Department of Science'
        },
        {
            title           :       'SSC, Savar Adhar Chandra High School',
            date            :       'Jan 2010 -  April 2012',
            description     :       'Department of Science'
        },
    ],
    services : [
        {
            title           : 'ETL Develop',
            description     : 'Extract, Transform and Load Design and Develop',
            icon            : <WebOutlined/>
        },
        {
            title           : 'Data Warehouse Design',
            description     : 'Develop Data Warehouse',
            icon            : <AssignmentOutlined/>
        },
        {
            title           : 'Database Design',
            description     : 'Design Database',
            icon            : <WebOutlined/>
        },
        {
            title           : 'Web Application',
            description     : 'I can develop an application using Django.',
            icon            : <WebOutlined/>
        },
    ],

    skills  : [
        {
            title : 'Language',
            desciption : [
                    "C",
                    "Python",
                    "JavaScript",
                    "SQL"
            ]
        },
        {
            title : 'Database',
            desciption : [
                    "PostgreSQL",
                    "pl/pgsql",
                    "pg DBA",
                    "MySQL",
                    "Oracle",
                    "MongoDB",
            ]
        },
        {
            title : 'Front End',
            desciption : [
                    "JQuery",
                    "React JS",
                    "Bootstrap",
            ]
        },
        {
            title : 'Back End',
            desciption : [
                    "Django",
                    "Laravel",
            ]
        },
        {
            title : 'Version Control',
            desciption : [
                    "Git",
                    "Github",
                    "Gitlab",
            ]
        },
        {
            title : 'Data Analysis',
            desciption : [
                    "Tableau",
                    "Google Data Studio",
                    "Matplotlib",
                    "Pandas",
                    "Keras",
                    "OpenCV"
            ]
        },
        {
            title : 'Software & Tools',
            desciption : [
                    "DBeaver",
                    "Jupyter Notebook",
                    "Google Colab",
                    "VS Code",
                    "Pycharm",
                    "Codeblocks"
            ]
        },
        {
            title : 'Scrum/Agile',
            desciption : [
                    "Jira",
            ]
        },
    ]
}


