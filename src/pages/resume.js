import React from 'react';
//import futureResume from '../assets/';

const styles = {
    divStyle: {
      height: '400px',
    },
  };

export default function Resume() {
    return (
        <div style={styles.divStyle}>
            <h1>Resume</h1>
            <p>
           {/*<a href={futureResume} download="">Click here to download my resume.</a>*/}
            </p>
            <h2>Proficiencies:</h2>
            <ul>
              <li>React</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
              <li>NodeJS</li>
              <li>RESTful API</li>
            </ul>
        </div>
    );
}