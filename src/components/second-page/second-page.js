import React from 'react';
import './second-page.css';
 function SecondPage () {
     return(
         <div classNameName= "second">
             
<section id="projects" className="projects-section">
  <h2 className="projects-section-header">These are some of my Works</h2>

  <div className="projects-grid">
    <a
      href="https://codepen.io/lordbryce09/pen/YzyMJjX"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://images.unsplash.com/photo-1588420915143-c0d6897be0a9?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Tribute Page
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
    <a
      href="https://codepen.io/lordbryce09/pen/PoPggzx"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/random-quote-machine.png"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        My First Landing Page
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
    <a
      href="https://codepen.io/lordbryce09/pen/RwWOdbG"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/survey-form-background.jpeg"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        My Survey Form
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
    <a
      href="https://codepen.io/lordbryce09/pen/gOaJYGa"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/map.jpg"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
       My Technical Documentation 
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
    <a
      href="https://codepen.io/freeCodeCamp/full/wGqEga"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/wiki.png"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Wikipedia Viewer
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
    <a
      href="https://codepen.io/freeCodeCamp/full/KzXQgy"
      target="_blank"
      className="project project-tile"
    >
      <img
        className="project-image"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/images/tic-tac-toe.png"
        alt="project"
      />
      <p className="project-title">
        <span className="code">&lt;</span>
        Tic Tac Toe Game
        <span className="code">&#47;&gt;</span>
      </p>
    </a>
  </div>

  <a
    href="https://codepen.io/FreeCodeCamp/"
    className="btn btn-show-all"
    target="_blank"
    >Show all<i className="fas fa-chevron-right"></i
  ></a>
</section>
         </div>
     )
 }

export default SecondPage ;