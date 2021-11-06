import React, { Component } from "react";
import { render } from "react-dom";

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>
              {education.description ?? (
                <p>
                  As a software engineering student at ENIS I was able to learn
                  different technologies and gain new skills in various domains
                  such as : <br />
                  <b>Computer science:</b> What is programming? How do computers
                  and the Internet work? What’s an algorithm, and how do you
                  write one? What are data structures? Why are there so many?
                  When do you use each one? Why is it important?
                  <br />
                  <b>UML:</b> specify, visualize, construct, and document the
                  artifacts of software systems,as well as for business modeling
                  and other non-software systems.
                  <br />
                  <b>Web development:</b> How does a web application work? What
                  are the different web languages? HTML, CSS, Sass, JavaScript,
                  SQL, databases, servers, APIs… how do they all fit together?
                  <br />
                  <b>Full-stack web development:</b>How to build an API and
                  integrate it, Spring boot, Angular, mongodb
                  <br />
                  <b>Testing and deployment:</b> How to deploy an application
                  for everyone to use? What are the different running
                  environments (development, test, production)? How to properly
                  test an application? how to package applications into
                  containers with Docker and Kubernetes (Devops)
                  <br />
                  <b>Artificial intelligence:</b> learn machine learning
                  algorithms and deep learning neural networks
                </p>
              )}
            </p>
          </div>
        );
      });
      var work = this.props.data.work.map(function (work) {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <p>{work.description}</p>
            <p>
              <b className="date bold">KEYWORDS: </b>
              {work.keywords}
            </p>
          </div>
        );
      });
      var projects = this.props.data.projects.map(function (projects) {
        return (
          <div key={projects.name}>
            <h3>{projects.name}</h3>
            <p className="info">
              <em className="date">{projects.time}</em>
            </p>
            <p>{projects.description}</p>
            <p>
              <b className="date bold">Technologies: </b>
              {projects.keywords}
            </p>
          </div>
        );
      });
      var communitylife = this.props.data.communitylife.map(function (communitylife) {
        return (
          <div key={communitylife.company}>
            <h3>{communitylife.company}</h3>
            <p className="info">
              {communitylife.title}
              <span>&bull;</span>{" "}
              <em className="date">{communitylife.years}</em>
            </p>
            <p>{communitylife.description}</p>
          </div>
        );
      });
      var skills = this.props.data.skills.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">{work}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>academic projects</span>
            </h1>
          </div>

          <div className="nine columns main-col">{projects}</div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Community Life</span>
            </h1>
          </div>

          <div className="nine columns main-col">{communitylife}</div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>{skillmessage}</p>

            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
