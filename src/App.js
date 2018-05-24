import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import ButtonAppBar from './Components/ButtonAppBar'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'

const App = () =>
  <BrowserRouter>
    <div>
      <ButtonAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>

export default App
