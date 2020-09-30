import React, { Component } from 'react'
import Layout from '../components/grid/Layout'
import Container from '../components/grid/Container'
import ProjectGrid from './ProjectGrid'
import styles from '../styles/modules/Work.module.css';
import {Projects} from './shared/WorkProject';

export default class Work extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: Projects
        }
    }
    render() {
        return (
            <section className={styles.rrpWork} data-nav-theme='dark' id="rrpWork">
                <div className={styles.whiteShader}></div>
                <div className="rrplineWork"></div>
                <Layout>
                    <Container>
                        <div className={styles.rrpWorkHeaderGrid}>
                            <h1>Selectd Web, Mobile, Graphics, 3D Work and Personal Projects. /.</h1>
                        </div>
                        <div className={styles.rrpWorkProjectGrid}>
                            <ProjectGrid projects={this.state.projects} />
                        </div>
                    </Container>
                </Layout>
            </section>
        )
    }
}
