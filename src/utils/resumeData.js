import React from "react";
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
                    achieve business goals while sticking to vision, mission and values. \n\n Here is the next paragrah",
}