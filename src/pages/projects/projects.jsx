import React from 'react'
import Navbar from '../../components/navbar'
import Project from '../../components/project'
import './projects'
import {Grid} from 'semantic-ui-react'

const projects = [
    {
        text: "Super Pac Spending", 
        description: "Super Pac spending takes data from the Federal Election Commission's very own API to analyse spending by Pacs and Super Pacs over the current and previous 5 presidential elections.",
        skills: [
            {src:"graphql.png", text:"GraphQL"},
            {src:"mongodb.jpeg", text:"MongoDB"},
            {src:"express.png", text:"Express"},
            {src:"react.png", text:"React"},
            {src:"node.jpeg", text:"Node"},
            {src:"semantic_ui.png", text:"Semantic UI"},
            
        ],
        link:"https://independent-spending.herokuapp.com/",
        github: "https://github.com/jplukarski/independent_spending",
        image: "super_pac.png"
    },
    {
        text: "Joey Cannoli's Donuts", 
        description: "Joey Cannoli's Donuts is a sample e-commerce store built with Braintree and features a fully functional cart powered by Firebase's firestore.",
        skills: [
            {src:"react.png", text:"React"},
            {src:"node.jpeg", text:"Node"},
            {src:"bootstrap.png", text:"Bootstrap"},
            {src:"braintree.png", text:"Braintree"},
            {src:"firebase.png", text:"Firebase"},
            {src:"graphql.png", text:"GraphQL"},
            
        ],
        link:"https://github.com/jplukarski/Joey_Cannolis_Donuts",
        github: "https://github.com/jplukarski/Joey_Cannolis_Donuts",
        image: "donuts.png"
    }
]


const Projects = () => {
    return(
        <>
            <Navbar/>
                <Grid doubling stackable columns={2} >
                    <Grid.Row>
                        {projects.map(project => (
                            <Project image={project.image} text={project.text} description={project.description} skills={project.skills} link={project.link} github={project.github}/>
                        ))}
                    </Grid.Row>
                </Grid>
        </>
    )
}

export default Projects