import React, { Component } from 'react';

class TechList extends Component {

  state = {
    techs: [
      'Node.js',
      'ReactJs',
      'React Native'
    ]
  };

  render() {
    return (
      <ul>
        <li>Node.js</li>
        <li>React.js</li>
        <li>React Native</li>
      </ul>
    );
  }
}

export default TechList;
