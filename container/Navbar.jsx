import React from "react";
import Link from "next/link"
import styles from "../styles/modules/Navbar.module.css"


class Navbar extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if(document.documentElement.scrollTop > 0) {
            document.getElementById('header').style.borderBottom = "1px solid rgba(0,0,0,0.16)";
            document.getElementById('rrpHeaderWrapper').classList.add("rrpNavbarSticky");
        }
        else {
            document.getElementById('header').style.borderBottom = "none";
            document.getElementById('rrpHeaderWrapper').classList.remove("rrpNavbarSticky");
        }
    }
    
    render() {
        return (
            <>
                <div className={styles.rrpHeaderWrapper} id="rrpHeaderWrapper">
                    <header className={`${styles.rrpHeader} ${styles.rrphW}`} id="header">
                        <div className={styles.rrpHeaderInnerWrapper}>
                            <div className="rrp-logo__div">
                                <Link href="/">
                                    <a className={styles.rrpLogoLink} aria-label="Portfolio homepage">
                                        <div className={styles.rrpLogoContainer}>
                                            <svg id="rrp-logo--svg" data-name="rrp-logo--svg" className={styles.rrpLogoImage} xmlns="http://www.w3.org/2000/svg" width="130" viewBox="0 0 973.88 300.22">
                                                <title>Rushik Ramani</title>
                                                <g className="lines">
                                                    <path d="M186.73,495.22,211,534H171.09l-21.29-34.9H95.15q0,17.45,0,34.9H61.22q0-65.32,0-130.64H164.9c30,0,50.48,18.85,50.47,48C215.37,472.63,204.44,488.31,186.73,495.22ZM95.15,471h60.3c10.18,0,26,0,26-19.59,0-19.78-15.82-19.78-26-19.78H95.17Q95.16,451.26,95.15,471Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="3"/><path d="M315.59,535.9c-58,0-82.89-21.83-82.88-67.37q0-32.56,0-65.14h33.91q0,32.58,0,65.14c0,18.29,5.08,39.19,49,39.19s49-21.09,49-39.19q0-32.56,0-65.14h33.91q0,32.58,0,65.14C398.47,513.88,373.42,535.9,315.59,535.9Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M449.71,489.06c0,13.81,11.3,20.16,54.24,20.16,35.6,0,46.34-3.92,46.34-14.19,0-10.82-7.54-12.69-50.29-14.74-57.45-2.62-80.24-11.57-80.23-40.88,0-28.74,29.57-37.88,78.92-37.88,49.71,0,79.85,12.32,79.85,44.61h-33.9c0-14.37-14.5-17.92-49.72-17.92-33.34,0-41.25,3.17-41.25,12.88,0,10.07,7.91,11.94,46.33,14.18,52,2.8,84.19,5.6,84.19,38.63,0,34.9-33.34,42-82.12,42-54.06,0-86.26-9.14-86.26-46.84Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M776.68,403.4q0,65.33,0,130.65H742.78q0-25.57,0-51.14H635.42V534h-33.9V403.4h33.9v51.14H742.78q0-25.57,0-51.14Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M830.76,534.05H796.85q0-65.32,0-130.64h33.9Q830.76,468.72,830.76,534.05Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M950.39,461.46l79.92,72.6H983.38l-58-54.32L884.83,509v25H850.92q0-65.32,0-130.64h33.91q0,33.87,0,67.75l94-67.74h51.44Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M215.81,645.83c0,28.68-20.53,47.25-50.48,47.25H61.71q0-64.37,0-128.72H95.66q0,17.19,0,34.38h54.63l21.29-34.39H211.5q-12.15,19.13-24.31,38.25C204.9,609.42,215.82,624.86,215.81,645.83ZM95.63,665.32h60.28c10.18,0,26,0,26-19.49,0-19.31-15.82-19.31-26-19.31H95.64Q95.63,645.92,95.63,665.32Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M363.1,564.36h37.47L332.39,693.08H286.63q-34-64.35-68-128.72H256l14.12,27.4H349Zm-80.42,52,26.92,52.23,26.75-52.23Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M610.5,693.08H564.75l-55.17-90.84-55.17,90.84H408.66q0-64.35,0-128.72h33.89q0,44.13,0,88.27,27.4-44.13,54.79-88.27h24.48l54.79,88.27V564.36H610.5Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M763,564.36h37.47q-34.07,64.36-68.15,128.72H686.58l-68-128.72h37.27L670,591.76h78.89Q756,578.07,763,564.36Zm-80.39,52q13.46,26.11,26.93,52.22l26.73-52.22Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M944.6,693.08q0-48.36,0-96.72l-90,96.72H808.61q0-64.35,0-128.72h33.89q0,48.27,0,96.54,44.93-48.27,89.82-96.54h46.15q0,64.36,0,128.72Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/><path d="M1027.49,693.09H993.58q0-64.37,0-128.72h33.91Q1027.49,628.72,1027.49,693.09Z" transform="translate(-59.72 -400.03)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="3"/>
                                                </g>
                                            </svg>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className={styles.rrpNavDiv}>
                                <nav className="rrp-nav" id="rrp-nav">
                                    <div className="rrp-nav--item__wrapper-div">
                                        <ul className={styles.rrpNavItemWrapper}>
                                            <li className={styles.rrpNavItem}>
                                                <Link href="/project">
                                                    <a >Work</a>
                                                </Link>
                                            </li>
                                            <li className={styles.rrpNavItem}>
                                                <Link href="/blog" >
                                                    <a className="rrp-nav__link">Blog</a>
                                                </Link>
                                            </li>
                                            <li className={styles.rrpNavItem}>
                                                <Link href="/about">
                                                    <a  className="rrp-nav__link">About</a>
                                                </Link>
                                            </li>
                                            <li className={styles.rrpNavItem}>
                                                <Link href="/contact"> 
                                                    <a  className="rrp-nav__link">Contact</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </header>
                    <div className={styles.rrpMNavDiv}>
                        <input type='checkbox' id="toggle" style={{display:"none"}} />
                        <label class='toggle-btn' htmlFor='toggle'>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </label>
                        <nav>
                            <ul>
                                <li>
                                    <Link href="/project">
                                        <a>Projects</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">                              
                                        <a>Contact me</a>
                                    </Link> 
                                </li>
                                      
                            </ul>
                        </nav>                
                    </div>
                </div>    
            </>
        );
    }
}

export default Navbar;