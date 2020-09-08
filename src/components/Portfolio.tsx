import React, { Component, useState } from 'react';

import '../scss/portfolio.scss';

import CloubModal from './CloubModal'

interface IProps {

}

interface IState {
  modal?: boolean;
}

class Portfolio extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
            modal: false,
        }
    }

    viewModal = () => {
      setTimeout(this.viewModalAction, 250)
    }

    viewModalAction = () => {
      this.setState({
        modal: !this.state.modal
      })
    }

    outModalAction = () => {
      this.setState({
        modal: false
      })
    }
    

    render () {

      let backDrop:string = 'PortfolioBack'
      let portfolioModal:string = 'PortfolioModal'

      if (this.state.modal) {
        backDrop = "PortfolioBack activation"
        portfolioModal= "PortfolioModal activation"
      }

        return (
          <div className="Portfolio">
   
            <div className="CardCloub">
              <div className="CardCloubHeader">
                <p className="CloubTitle"> Projet de Stage | Cloub Technologies</p>
                <p className="CloubText">Réalisation d'une plateforme destinée aux suivis et à la programmation d'enregistrement audio en direct</p>
              </div>
              <div className="CardCloubBody">
                <div className="CloubCircleBody">
                <div className="CloubCircle">
                  <img onClick={this.viewModal} className="CloubImg" src="/images/cloub.png" alt="Cloub Logo"/>
                </div>
                </div>
                
              </div>
              <div className="CardCloubFooter">
                <div className="CardTechno">
                  <i className="fab fa-html5"></i>
                  <i className="fab fa-css3-alt"></i>
                  <i className="fab fa-js-square"></i>
                  <i className="fab fa-react"></i>
                  <i className="fab fa-sass"></i>
                </div>
              </div>   
            </div> 


            <div className={backDrop} onClick={this.outModalAction}>
            </div>

            <div className={portfolioModal}>
              <div className="ModalHeader">
                <button onClick={this.outModalAction}><i className="fas fa-times"></i></button>
              </div>

                <CloubModal />
  
        
            
            </div>

          </div>
        )
    }
};

export default Portfolio;