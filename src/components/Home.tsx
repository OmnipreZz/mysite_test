import React, { Component } from 'react';

import Bgvideo from './Bgvideo';

import '../scss/home.scss';

interface IProps {

}
interface IState {
  docPDF?: string;
}

class Home extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
            docPDF: 'fichiers/cv_GFrioli.pdf'
        }
    }

    render () {
        return (
          <div className="Home">
          <Bgvideo />
          <div className="HomePage">
            <div className="HomeTitle">
              <h1 className="HomeTitleName">GEOFFREY FRIOLI</h1>
              <h2 className="HomeTitleDev">Développeur Web</h2>
              <div className="HomeHr"></div>
              <div className="HomeCv">
              <a className="CvBtn" target="_blank" href={this.state.docPDF} aria-label="Cv" rel="noopener noreferrer">
                <svg width="277" height="62">
                  <defs>
                      <linearGradient id="grad1">
                          <stop offset="0%" stopColor="#FF8282"/>
                          <stop offset="100%" stopColor="#E178ED" />
                      </linearGradient>
                  </defs>
                  <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
                </svg>
                  <span>Télécharger CV</span>
              </a>
            </div>
            </div>
          </div>
        </div>
        )
    }
};

export default Home;