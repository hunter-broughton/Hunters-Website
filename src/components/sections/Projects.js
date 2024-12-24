import React, { Component } from "react";
import Project from "../elements/Project";
import resumeData from "../../resume.json";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    const projects = resumeData.projects.map((project, index) => (
      <div className="column" key={index}>
        <Project
          title={project.title}
          description={project.description}
          url={project.url}
          image={project.x_image}
        />
      </div>
    ));
    this.setState({ projects: projects });
  }

  render() {
    return (
      <section id="projects" className="section projects">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;