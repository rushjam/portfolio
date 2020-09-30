import React, { Component } from 'react'
import styles from './Container.module.css'

export default class Container extends Component {
    render() {
        return (
            <div className={styles.rrpContainer}>
                {this.props.children}
            </div>
        )
    }
}
