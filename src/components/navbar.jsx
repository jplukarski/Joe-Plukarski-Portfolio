import React from 'react'
import {Menu} from 'semantic-ui-react'

const Navbar = () => {
    return(
        <>
            <Menu
            size={"large"}
            fixed={"top"}
            inverted
            fluid
            large
            >
                <Menu.Item href="/">Home</Menu.Item>
                <Menu.Item href="/about">About</Menu.Item>
                <Menu.Item href="/projects">Projects</Menu.Item>
            </Menu>
        </>
    )
}

export default Navbar