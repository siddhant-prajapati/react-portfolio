import React from 'react'
import '../styles/Home.css'
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import profilePic from '../assets/cool-profile-picture-removebg-preview.png';
import threeYearPic from '../assets/3-years-exp.PNG';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Home() {
    const firstName = process.env.REACT_APP_USER_FIRSTNAME;
    const lastName = process.env.REACT_APP_USER_LASTNAME;

    return (
        <div>
        <Grid container spacing={2}>
            <Grid size={6}>
            <Item>
                <h1 style={{textAlign : 'left' , fontSize: '80px'}}><b>Hello I'm</b></h1>
                <h2 className='name-element'>{firstName}</h2>
                <h2 className='name-element'>{lastName}</h2>
                <h3 className='work-element'><i>- Web Developer</i></h3>
                <img src={threeYearPic} alt="3-years expiriance" className='year-symbol'/>
            </Item>
            </Grid>
            <Grid size={6}>
            <Item>
                <img src={profilePic} alt='profile-pic' className='profile-pic'/>
            </Item>
            </Grid>
            <Grid size={6}>
                <Item>size=4</Item>
            </Grid>
            <Grid size={6}>
                <Item>size=8</Item>
            </Grid>
        </Grid>
        </div>
    )
}
