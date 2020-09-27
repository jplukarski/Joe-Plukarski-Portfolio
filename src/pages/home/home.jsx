import React, {useState} from 'react'
import './home.css'
import {Grid, Button, Transition, Popup} from 'semantic-ui-react'

const Home = () => {
    const [toggleContactArrow, setToggleContactArrow] = useState(true)
    const [toggleAboutArrow, setToggleAboutArrow] = useState(true)
    const copyEmail = () => {
        console.log('yo')
        const str = "jwplukarski@gmail.com"
        function listener(e) {
            e.clipboardData.setData("text/html", str);
            e.clipboardData.setData("text/plain", str);
            e.preventDefault();
        }
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);
    }

    return(
        <>
            <div id="top-container">
                <Grid.Column>
                    <h1>Hello, my name is <span className="introText" style={{color: "#f8f9fa"}}>Joe Plukarski.</span></h1>
                    <h1>I'm a <span className="introText" style={{color: "#f8f9fa"}}>full-stack web developer</span> with</h1>
                    <h1>an insatiable <span className="introText" style={{color: "#f8f9fa"}}>thirst for adventure</span></h1>
                        <Grid.Row>
                            <Button.Group widths='2'>
                                <Button href="/about" inverted color='black' className="introButton" onMouseEnter={()=> setToggleAboutArrow(false)} onMouseLeave={()=> setToggleAboutArrow(true)}>
                                    <Transition
                                    animation={"jiggle"}
                                    visible={toggleAboutArrow}
                                    >
                                    <i id="aboutMeIcon" className="angle double left icon"></i>
                                    </Transition>
                                    Get to know me more
                                </Button>
                                <Button href="projects" inverted color='black' className="introButton" onMouseEnter={()=> setToggleContactArrow(false)} onMouseLeave={()=> setToggleContactArrow(true)}>
                                    Check out my Projects
                                    <Transition
                                    animation={"jiggle"}
                                    visible={toggleContactArrow}
                                    >
                                    <i id="contactMeIcon" className="angle double right icon"></i>
                                    </Transition>
                                </Button>
                            </Button.Group>
                        </Grid.Row>
                        <Grid.Row>
                        <Button.Group fluid>
                            <Button target="_blank" href="https://www.linkedin.com/in/josephplukarski/" inverted color='blue'>Linked In</Button>
                            <Button target="_blank" href="https://github.com/jplukarski" inverted color='black'>Github</Button>
                            <Popup
                            on="click"
                            position='bottom'
                            trigger={<Button onClick={() => copyEmail()} inverted>jwplukarski@gmail.com</Button>}
                            >
                                Copied Joe's email!
                            </Popup>
                        </Button.Group>
                        </Grid.Row>
                    
                </Grid.Column>
            </div>        
        </>
    )
}

export default Home