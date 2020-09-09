import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../scss/navbar.scss';


interface IProps {

}

interface IState {
  mobileNav: boolean
}


class NavBurger extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
            mobileNav: false
        }
    }

    mobileNav = () => {
      this.setState({
        mobileNav: !this.state.mobileNav
      })
    }

    render () {

      let mobileNavClass:string = 'MobileMenu'
      let backDrop:string = 'BackDropMobile'

        if (this.state.mobileNav) {
          mobileNavClass = 'MobileMenu open'
          backDrop ="BackDropMobile active"
        }
        
        return (
          <div className="NavBurger">
            <div onClick={this.mobileNav}>
              <i className="fas fa-bars"></i>
            </div>
            
            <div className={backDrop} onClick={this.mobileNav}>
            </div>

            <div className={mobileNavClass}>
              <div className="MobileMenuDiv">
                <ul className="MobileMenuLinks">
                  <Link to="/">
                    <li onClick={this.mobileNav}>ACCUEIL</li>
                  </Link>
                  <Link to="/a-propos">
                    <li onClick={this.mobileNav}>À PROPOS</li>
                  </Link>
                  <Link to="/skills">
                    <li onClick={this.mobileNav}>SKILLS</li>
                  </Link>
                  <Link to="/portfolio">
                    <li onClick={this.mobileNav}>PROJETS</li>
                  </Link>
                  <Link to="/contact">
                    <li onClick={this.mobileNav}>CONTACT</li>
                  </Link>
                </ul> 
              </div>
              <div className="MobileMenuFooter">
              <a className="footer-icon-mobile" target="_blank" href="https://github.com/OmnipreZz" aria-label="GitHub" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
          </a>

          <a className="footer-icon-mobile" target="_blank" href="https://www.linkedin.com/in/geoffrey-frioli-362944168/" aria-label="Linkedin" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
          </a>

          <a className="footer-icon-mobile" target="_blank" href="https://twitter.com/Omni_DevWeb" aria-label="Twitter" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
          </a>
              </div>
            </div>
          </div>
        )
    }
};

export default NavBurger;