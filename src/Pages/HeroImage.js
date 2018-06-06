import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const HeroImage = () =>{
  return(
    <div className="hero-image">
      <div className="empty-space"></div>
      <ReactCSSTransitionGroup  
                                transitionAppear={true}
                                transitionName="fade"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500}>
        <h1>Hello. I'm Rick Brown</h1>
        <h1>and this is what i do..</h1>
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default HeroImage