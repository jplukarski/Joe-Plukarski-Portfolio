import React from 'react'
import Navbar from '../../components/navbar'
import {Segment, Container, Image, Divider, Icon, Grid} from 'semantic-ui-react'
import Skills from '../../components/skills'
import './about.css'

const leftSkills = [
    {src:"react.png", text:"React"},
    {src:"graphql.png", text:"GraphQL"},
    {src:"node.jpeg", text:"Node"},

]

const rightSkills = [
    {src:"vim.jpg", text:"Vim"},
    {src:"mongodb.jpeg", text:"MongoDB"}
]

const About = () => {
    return(
        <>
            <Navbar/>
            <Segment vertical>
                <Container text className="pageContent">
                    <Grid columns={2} relaxed='very stackable'>
                        <Grid.Column>
                            <Image src='secondBangkok.png' size='medium' circular />
                        </Grid.Column>
                        <Grid.Column>
                        <Divider horizontal>
                            <Icon name={"code"} id="codeIcon"/>
                            Experience
                        </Divider>                
                        <Image src='paypal.png' avatar/> Global Technical Support Engineer
                    <Divider horizontal>
                        <Icon name={"plug icon"}/>
                        Skills
                    </Divider>
                    <Grid columns={2}>
                        <Grid.Column>
                        {leftSkills.map(skill => (
                            <Skills src={skill.src} text={skill.text}/>
                            ))}
                        </Grid.Column>
                        <Grid.Column>
                        {rightSkills.map(skill => (
                            <Skills src={skill.src} text={skill.text}/>
                            ))}
                        </Grid.Column>
                    </Grid>
                    <Divider horizontal>
                        <Icon name={"book"}/>
                        Education
                    </Divider>
                    <Image />
                    <Skills src='nwestern.png' text="Full Stack Web Development Bootcamp"/>
                    <Skills src='isu.png' text="Bachelor of Arts - English"/>

                        </Grid.Column>
                    </Grid>
                    <Divider horizontal>
                        <Icon name={"map marker alternate"}/>
                        Chicago
                    </Divider>
                    I am currently working as an API Support and Migrations Specialist for  PayPal, servicing our Braintree product. 
                </Container>
            </Segment>
        </>
    )
}

export default About