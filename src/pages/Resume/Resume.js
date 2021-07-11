import React from 'react';
import "./Resume.css";
import {Grid, Icon, Typography, Paper} from '@material-ui/core';
import resumeData from '../../utils/resumeData';
import CustomTimeline, { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import TimelineItem from "@material-ui/lab/TimelineItem";
import { TimelineContent, TimelineSeparator } from '@material-ui/lab';
import TimelineDot from "@material-ui/lab/TimelineDot";


const Resume = () => {
    return (
        <>
            {/* About me */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>
                        {resumeData.about}
                    </Typography>
                </Grid>
            </Grid>
            
            
            {/* Education and Experience */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container className='resume_timeline'>
                        {/* STARTS SECTION */}

                        {/* Experience */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Work Experience' icon={<WorkIcon/>}>
                                {resumeData.experiences.map(experiences => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator></CustomTimelineSeparator>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'>{experiences.title}</Typography>
                                            <Typography className='timeline_details'>{experiences.company}</Typography>
                                            <Typography className='timeline_details'>{experiences.team}, {experiences.department}</Typography>
                                            <Typography variant='caption' className='timeline_date'> {experiences.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'> {experiences.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>
                        
                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeline title='Education' icon={<SchoolIcon/>}>
                                {resumeData.educations.map(educations => (
                                    <TimelineItem>
                                        <CustomTimelineSeparator></CustomTimelineSeparator>
                                        <TimelineContent className='timeline_content'>
                                            <Typography className='timeline_title'> {educations.title}</Typography>
                                            <Typography className='timeline_details'>{educations.institution}</Typography>
                                            <Typography className='timeline_details'>cgpa: {educations.result}</Typography>
                                            <Typography variant='caption' className='timeline_date'> {educations.date}</Typography>
                                            <Typography variant='body2' className='timeline_description'> {educations.description}</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeline>
                        </Grid>

                        {/* END SECTIONS */}
                    </Grid>
                </Grid>
            </Grid>


            {/* Services */}
            <Grid container className='section pb_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Skills & Services</h6>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3} justify='space-around'>
                        {resumeData.services.map(service => (
                            <Grid item xs ={12} sm={6} md={3}>
                                <div className='service'>
                                    <Icon className='service_icon'>{service.icon}</Icon>
                                    <Typography className='service_title' variant='h6'>{service.title}</Typography>
                                    <Typography className='service_description' variant='body2'>{service.description}</Typography>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>     
            

            {/* Skills */}
            <Grid container  className='section graybg pb_45 p_50'>
                <Grid item xs={12}>
                    <Grid container justify='space-between' spacing={3}>
                        {resumeData.skills.map(skill =>(
                            <Grid item xs={12} sm={6} md={3}>
                                <Paper elevation={0} className='skill'>
                                    <Typography variant='h6' className='skill_title'>{skill.title}</Typography>
                                    {skill.desciption.map(element =>(
                                        <Typography variant='body2' className='skill_description'>
                                            <TimelineDot variant={'outlined'} className='timeline_dot'/>
                                            {element}
                                        </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
                        

            {/* PROBLEM SOLVING */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item sm={12} md={6}>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Problem Solving (OJ)</h6>
                    </Grid>
                    <ul className='problem_solving'>
                        {resumeData.problem_solvings.map(problem_solving => (
                            <Typography className='timeline_title'>
                                <li className="problem_solving_inner">{problem_solving.account} -  
                                    {problem_solving.handle} 
                                    <span className="problem_solve_count">
                                        [{problem_solving.count}+ problems]
                                    </span> 
                                </li>
                            </Typography>
                        ))}
                    </ul>  
                </Grid>
            </Grid>            

            {/* Academic Achievements */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item sm={12} md={6}>
                    <Grid item className='section_title mb_30'>
                        <span></span>
                        <h6 className='section_title_text'>Academic Achievements</h6>
                    </Grid>
                    <ul className='academic_achievements'>
                        {resumeData.academic_achievements.map(academic_achievement => (
                            <Typography className='timeline_title'>
                                <li>{academic_achievement.awards} -  
                                    {academic_achievement.date} 
                                    <span className="problem_solve_count">
                                        [{academic_achievement.reason}]
                                    </span> 
                                </li>
                            </Typography>
                        ))}
                    </ul>  
                </Grid>
            </Grid>   

            {/* License & Certifications */}
            <Grid container className='section pb_45 pt_45'>
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>License & Certifications</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutme_text'>
                        Test
                    </Typography>
                </Grid>
            </Grid>         


            {/* Contact */}
            <Grid container className='section'></Grid>
        </>
    )
}

export default Resume
