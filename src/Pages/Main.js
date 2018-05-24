import React from 'react'

// Components
import { Switch, Route } from 'react-router-dom'

// Pages
import LandingPage from './LandingPage'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'

const Main = () =>{
  return(
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutme" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Main