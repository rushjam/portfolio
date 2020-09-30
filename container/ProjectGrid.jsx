import React, { Component } from 'react'
import styles from '../styles/modules/ProjectGrid.module.css'

export default class ProjectGrid extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        const project = this.props.projects.map( project => {
            return (
                <div key={project.id} className={styles.rrpProjectGridDiv}>
                    <h1>{project.name}</h1>
                    <img src={project.gif} alt={`${project.name} icon`}  />
                    
                </div>
            )
        });
        return (
            <div className="yes" className={styles.rrpProjectGridStyle}>
                {project}
            </div>
        )
    }
}
