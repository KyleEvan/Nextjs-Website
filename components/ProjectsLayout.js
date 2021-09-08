// import {useRouter} from 'next/router';
import { Component } from "react"
import { Navigation } from './Navigation'
import styles from '../scss/components/projects-nav.module.scss'

export class ProjectsLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    console.log(this)
    this.setState((state) => ({
      menuActive: !state.menuActive
    }));
  }
  render() {
    return (
      <div>

        <div className={styles['projects-nav'] + ` ${this.state.menuActive ? styles.open : ""}`}>
          <Navigation projects={this.props.projects} className={styles['projects-nav-list']}/>
        </div>

        <div className={styles['menu-btn']}>
          <button className="hamburger-nav" onClick={this.toggleMenu}>
            <span></span>
          </button>
        </div>

        <div className={`page-wrapper ${styles['projects-wrapper']} ${this.state.menuActive ? styles['menu-open'] : ""}`}>
          {this.props.children}
          <div className={styles['menu-page-overlay']}></div>
        </div>

      </div>
    )
  }
}