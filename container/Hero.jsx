import React from "react";
import Navbar from "./Navbar";
import Container from '../components/grid/Container'
import Layout from '../components/grid/Layout'
import styles from "../styles/modules/Hero.module.css";
import { default as anime } from "animejs/lib/anime";
import AOS from 'aos';


class Hero extends React.Component {
  animation() {
    anime({
      targets: ".animation-container path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInQuad",
      duration: 3000,
      delay: function (el, i) {
        return i * 250;
      },
      direction: "both",
      loop: false,
    });
  }
  
  componentDidMount() {
    AOS.init({
      disable: false,
      duration : 1000,
      startEvent: 'DOMContentLoaded',
      easing: 'ease',
      once: false,
      anchorPlacement: 'top-bottom',
    });

    this.animation();
  }
  render() {
    
    return (
      <>
        <Navbar />
        <Layout>
          <div className="rrpline rrplineHero"></div>
          <Container>
            <div className={styles.rrpHeroGrid}>
              <div className={styles.rrpHeroInfoWrapper}>
                <div className={styles.rrpHeroInfoInnerWrapper}>
                  <h1 className="" data-aos="fade-up"
                  >I'm Rushik Ramani.</h1>
                  <p  data-aos="fade-up" data-aos-delay="200">
                    A Full Stack Web Developer, and
                    <span className={styles.amature}>
                      <span className={styles.cross}></span> Amature
                    </span>
                    Digital Marketing Strategist, living in India
                  </p>
                </div>
              </div>
              <div className={styles.rrpHeroAnimatedText}>
                <div className="animation-container">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 753.31 633.6"
                  >
                    <title>Untitled-1</title>
                    <path
                      d="M332.41,296.83H381c-6.6,43.79-44.6,60.19-86.2,60.19-45.6,0-87.4-19.4-87.4-73,0-53.4,41.8-72.8,87.4-72.8,41.6,0,79.6,16.4,86.2,60.2h-48.6c-4.4-17.8-15-28.2-37.6-28.2-27,0-39.4,16.2-39.4,40.8,0,24.8,12.4,41,39.4,41C317.41,325,328,314.63,332.41,296.83Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path 
                      d="M503,246.43v36.8h-3.6a56.37,56.37,0,0,0-22.2-4.8c-22.4,0-28.6,13.6-28.6,30.2V354H405V247.43h43.6v16.4c4-7,15.8-19.2,39-19.2C494.41,244.63,499.41,245.23,503,246.43Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path className={styles.charC}
                      d="M751,247.43h27.6V272H751v82h-43.6V272h-17.6v-24.6h17.6c0-23.8,8.6-41,47.4-41,8.2,0,18,.8,25.8,1.4V235C762.41,233,751,232.83,751,247.43Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M856.21,272v39.4c0,15,9.8,15,31.2,13.2v29.59a199.51,199.51,0,0,1-25,1.6c-40.2,0-49.8-12.6-49.8-44.39V272h-19.8v-24.6h19.8v-27.6h43.6v27.6h31.2V272Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M955,324.63l-19.2,47.79h-28.4l8-47.79Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M332.41,536.83H381c-6.6,43.8-44.6,60.19-86.2,60.19-45.6,0-87.4-19.39-87.4-73,0-53.4,41.8-72.8,87.4-72.8,41.6,0,79.6,16.4,86.2,60.2h-48.6c-4.4-17.8-15-28.2-37.6-28.2-27,0-39.4,16.2-39.4,40.8,0,24.8,12.4,41,39.4,41C317.41,565,328,554.63,332.41,536.83Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M725,454V594h-43.6v-12.8c-9,10.4-21.8,15.8-36.2,15.8-33,0-58.2-20-58.2-56.19s25.2-56.2,58.2-56.2c14.4,0,27.2,5.4,36.2,15.6V454Zm-39.8,86.8c0-15.6-8-27.8-28.6-27.8-19.2,0-28,13.4-28,27.8s8.8,27.8,28,27.8C677.21,568.63,685.21,556.42,685.21,540.83Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M880.21,550.63H788c2.6,11,10.2,19.79,27.8,19.79,13.8,0,20.4-7,24-12.39h38.8c-6.8,29.19-33.8,39-62.8,39-34.2,0-68.8-15-68.8-56.19s34.8-56.2,67.8-56.2C845,484.63,883.21,501,880.21,550.63Zm-40.8-22.2c-3.2-11-11.2-17.2-24.6-17.2-15.2,0-23,7.4-26,17.2Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M946,564.63l-19.2,47.79h-28.4l8-47.79Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M371.61,789.63C371.61,823.22,343,837,288,837c-59.2,0-82.6-19-82.6-48.39H255c0,13,16,16.59,35.6,16.59,18.8,0,30-2.8,30-10.59,0-9.4-13.6-8.8-53.8-15-43-6.6-58.2-15.6-58.2-43.6,0-28.4,22.6-44.8,77-44.8,59.4,0,77,21.4,77,45.6h-48.2c0-9.6-11.2-13.8-29.4-13.8-19.2,0-29.2,2.8-29.2,10.8,0,9.6,17.4,10.4,41.4,12.8C341,751.23,371.61,754.23,371.61,789.63Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M589.61,765.43V834H546V775.43c0-11.8-1.2-21-15.8-21s-16.8,9-16.8,21V834h-43.6V775.43c0-11.8-1.4-21-16-21s-16.6,9-16.6,21V834h-43.6V727.43h43.6v13c3.6-5.6,13.8-15.8,33.6-15.8,18.4,0,30.4,5.2,36.8,15.8,5.6-6.2,17.8-15.8,37.6-15.8C574.61,724.63,589.61,738.23,589.61,765.43Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M614.81,698.83c0-13.2,9.4-20.8,22.6-20.8s22.6,7.6,22.6,20.8-9.4,20.6-22.6,20.6S614.81,712,614.81,698.83Zm.8,28.6h43.6V834h-43.6Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M728.81,686.43V834h-43.6V686.43Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M954.4,815.22a21.7,21.7,0,1,1-43.4,0,21.7,21.7,0,0,1,43.4,0Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M419.05,485.73v30.51H549.22V485.73Zm22.88,19.07H434.3v-7.63h7.63Zm15.25,0h-7.62v-7.63h7.62Zm15.26,0h-7.63v-7.63h7.63Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M419.05,592.51H549.22V523.87H419.05ZM506.22,541l5.39-5.4,18.88,18.88-18.88,18.88-5.39-5.4,13.48-13.48Zm-16.36-4.26,6.54,3.92-18,30-6.54-3.92Zm-33.22-1.14L462,541l-13.48,13.48L462,568l-5.39,5.4-18.88-18.88Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M816,804.93A32.47,32.47,0,0,0,848.4,772.5v-3.6H783.53v3.6A32.47,32.47,0,0,0,816,804.93Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <path
                      d="M816,711a61.5,61.5,0,1,0,61.5,61.5A61.74,61.74,0,0,0,816,711Zm21.62,27.58,9.76,9.75-5.1,5.1-4.66-4.66-4.65,4.66-5.1-5.1Zm-43.24,0,9.76,9.75-5.1,5.1-4.66-4.66-4.66,4.66-5.09-5.1ZM855.6,772.5a39.64,39.64,0,0,1-79.28,0V761.69H855.6Z"
                      transform="translate(-203.91 -204.93)"
                      fill="none"
                      stroke="#000"
                      stroke-miterlimit="10"
                      stroke-width="3"
                    />
                    <g id="Layer_5" data-name="Layer 5">
                      <path
                        d="M618.7,303c-.54-.86-3.11-4-4-5-1.35-1.65-2.89-1.47-4.11,0-3,3.55-7.09,8.48-9.45,11.3-1.58,1.87-1.87,3.36-.62,4.74.55.61,2.84,3.24,2.84,3.24A26.81,26.81,0,1,0,618.7,303Zm18.51,34.54a12.4,12.4,0,1,1,0-17.54A12.39,12.39,0,0,1,637.21,337.52Z"
                        transform="translate(-203.91 -204.93)"
                        fill="none"
                        stroke="#000"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        d="M576.86,284.43c3-4.15,7.94-10.4,10.5-13.93,1.29-1.77,1.41-3.14,0-5.08C577.85,252.25,549,213,549,213c-4-4.69-8.51-3.65-10,2.32l-2.75,10.81c-1.53,6,.79,14.42,5.15,18.78,0,0,23.76,29.59,31.56,39.55C574.17,286.07,575.79,285.89,576.86,284.43Z"
                        transform="translate(-203.91 -204.93)"
                        fill="none"
                        stroke="#000"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                      <path
                        d="M543.83,307.65a26.81,26.81,0,1,0,43.4,8l57.52-68.73c4.36-4.36,6.67-12.81,5.15-18.78l-2.76-10.8c-1.52-6-6-7-10-2.33l-63.47,84a21.12,21.12,0,0,0-1.72,2.36A26.78,26.78,0,0,0,543.83,307.65Zm9.59,10.78a12.4,12.4,0,1,1,0,17.54A12.41,12.41,0,0,1,553.42,318.43Z"
                        transform="translate(-203.91 -204.93)"
                        fill="none"
                        stroke="#000"
                        stroke-miterlimit="10"
                        stroke-width="3"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </Layout>
      </>
    );
  }
}

export default Hero;
