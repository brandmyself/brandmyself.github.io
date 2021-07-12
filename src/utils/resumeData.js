import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebOutlined from '@material-ui/icons/WebAssetOutlined';
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined';

export default {
    name        :   'Md. Imrul Hasan',
    goal        :   'Data Enthusiast',
    title       :   'Data Analyst',
    birthday    :   '30th Aug, 1997',
    job         :   'Engineer',
    email       :   'imrulhasan273@gmail.com',
    address     :   'Dhaka, Bangladesh',
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

    about       :   "Data Analyst with a demonstrated history of working in the financial services industry.\
                    Skilled in PostgreSQL, Python, Data Visualization, ETL using Python with various database, \
                    have development experience to make BI portal using Django. Strong information technology \
                    professional with a Computer Science and Engineering focused in Computer Programming from \
                    University of Asia Pacific.",
    experiences  :    [
            {
                title           :       'Associate Data Analyst',
                company         :       'Progoti Systems Ltd.',
                department      :       'Engineering',
                team            :       'Data and BI',
                date            :       'March 2021 - present',
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
            {
                title           :       'Junior Data Analyst',
                company         :       'Progoti Systems Ltd.',
                department      :       'Engineering',
                team            :       'Data and BI',
                date            :       'Oct 2020 - Feb 2021',
                description     :       '',
            },
    ],
    educations  :    [
        {
            title           :       'BSc. in Computer Science & Engineering',
            institution     :       'University of Asia Pacific',
            result          :       '3.84/4',
            date            :       'April 2016 - June 2020',
            description     :       'Thesis: Deep Learning-Based Violence Detection System From Surveillance Video'
        },
        {
            title           :       'Higher Secondary Certificate',
            institution     :       'Jahangirnagar University School & College',
            result          :       '4.40/5',
            date            :       'June 2012 - May 2014',
            description     :       'Department of Science'
        },
        {
            title           :       'Secondary School Certificate',
            institution     :       'Savar Adhar Chandra High School',
            result          :       '4.63/5',
            date            :       'Jan 2010 -  May 2012',
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
                    "Python",
                    "SQL",
                    "C",
                    "JavaScript",
            ]
        },
        {
            title : 'Database',
            desciption : [
                    "PostgreSQL",
                    "MySQL",
                    "Oracle",
                    "MongoDB",
            ]
        },
        {
            title : 'DBA (pg)',
            desciption : [
                    "Configuration Files",
                    "Managing Connections",
                    "Roles",
                    "Database Creation",
                    "Privileges",
                    "Extensions",
                    "Backup and Restore",
                    "Tablespaces",
            ]
        },
        {
            title : 'Replication (pg)',
            desciption : [
                    "Overview",
                    "Setting Up Replication",
                    "Foreign Data Wrappers"
            ]
        },
        {
            title : 'Performance Tune (pg)',
            desciption : [
                    "EXPLAIN",
                    "Writing Better Queries",
                    "Parallelized Queries",
                    "Query Planner",
                    "Caching",
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
                    "OpenCV",
            ]
        },
        {
            title : 'Front-End Library',
            desciption : [
                    "JQuery",
                    "React JS",
                    "Bootstrap",
            ]
        },
        {
            title : 'Back-End Framework',
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
        {
            title : 'Others',
            desciption : [
                    "MS Word",
                    "MS Excel",
                    "MS Powerpoint",
                    "Google Docx",
            ]
        },
    ],

    problem_solvings : [
        {
            account    : 'UVA',
            handle     : 'BackstreetImrul007',
            count      : 60,
        },
        {
            account    : 'URI',
            handle     : '201743',
            count      : 90,
        },
    ],
    academic_achievements : [
        {
            awards     : 'VC Awards',
            institution: 'UAP',
            date       : 'Fall, 2019',
            reason     : 'GPA 4.00',
        },
        {
            awards    : 'VC Awards',
            institution: 'UAP',
            date      : 'Spring, 2019',
            reason     : 'GPA 3.96',
        },
        {
            awards    : 'Dean Awards',
            institution: 'UAP',
            date      : 'Fall, 2018',
            reason     : 'GPA 3.82',
        },
        {
            awards    : 'VC Awards',
            institution: 'UAP',
            date      : 'Spring, 2018',
            reason     : 'GPA 3.98',
        },
        {
            awards    : 'Dean Awards',
            institution: 'UAP',
            date      : 'Fall, 2017',
            reason     : 'GPA 3.86',
        },
    ],

}


