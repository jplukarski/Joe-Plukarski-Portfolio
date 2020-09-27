import React, {useState} from 'react'
import {Segment, Image, Grid, Dimmer, Button, Modal, Divider} from 'semantic-ui-react'
import Skills from './skills'

const Project = props => {
    const [openModel, setOpenModel] = useState(false)
    return(
        <>
            <Grid.Column>
                <Segment  className="projectImage">
                    <Dimmer.Dimmable dimmed={true}>
                        <Image style={{height: '35rem'}} src={props.image}/>
                        <Dimmer active={true} >
                                <h2>
                                    {props.text}
                                </h2>
                                <Modal
                                size="small"
                                closeIcon
                                onClose={() => setOpenModel(false)}
                                onOpen={() => setOpenModel(true)}
                                open={openModel}
                                trigger={<Button inverted>See More</Button>}
                                >
                                        <Modal.Header>{props.text}</Modal.Header>
                                        <Modal.Content >
                                                {props.description}
                                                <Divider />
                                                <h3>
                                                    Built With
                                                </h3>
                                            <Grid columns='equal'>

                                                <Grid.Row className="projectModalSkills">
                                                    {props.skills.map(skill => (
                                                        <Skills src={skill.src} text={skill.text}/>
                                                    ))}
                                                </Grid.Row>
                                            </Grid>
                                        </Modal.Content> 
                                        <Modal.Actions>
                                            <Button.Group widths='2'>
                                                <Button color='primary' inverted href={props.link} target="_blank">
                                                    Visit Page
                                                </Button>
                                                <Button color="secondary" inverted href={props.github} target="_blank">
                                                    Github Repo
                                                </Button>
                                            </Button.Group>
                                        </Modal.Actions>
                                    </Modal>
                        </Dimmer>
                    </Dimmer.Dimmable>
                </Segment>
            </Grid.Column>
        </>
    )
}

export default Project