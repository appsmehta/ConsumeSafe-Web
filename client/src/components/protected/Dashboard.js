import React, { Component } from 'react'

export default class Dashboard extends Component {

  constructor(props){
    super(props);
    console.log("this.props...",props);
  }
  render () {
    return (
      <div>
        <h1>User Dashboard</h1>
        <p> This is a protected route. You can only see this if you're authed.</p>

      <h3>Welcome, {this.props.user.name}!</h3>
        
      </div>
    )
  }
}