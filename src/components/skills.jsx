import React from 'react'
import {Image} from 'semantic-ui-react'

const Skills = props => {
    return(
        <div className="skills">
            <Image className="skills" avatar src={props.src}/>
            <span>
                {props.text}
            </span>
        </div>
    )
}

export default Skills