import React from 'react'
import { Route } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div>About</div>
            <Route path="/about/text">
                <div>A lot of text bla bla bla</div>
            </Route>
        </div>

    )
}

export default About