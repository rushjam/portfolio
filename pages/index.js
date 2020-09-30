import React, { Component } from 'react'
import Head from 'next/head'
import Hero from '../container/Hero'
import Grain from '../container/Grain'
import Main from '../container/Main'
import dynamic from "next/dynamic";



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
      
     
  render() {



    return (
      <div id="js-scroll">
        <Grain />
        <Head>
          <title>Rushik Ramani</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero />
        <main >
          <Main />
        </main>

        <footer >

        </footer>
      </div>
    )
  }
}
