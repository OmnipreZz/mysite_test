import React, { Component } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import '../scss/circularbar.scss';
import '../scss/skills.scss';
import GIT from '../images/git1.png';
import NPM from '../images/npm.png';
import HTML from '../images/html.png';
import CSS from '../images/css.png';
import SASS from '../images/sass.png';
import JS from '../images/js.png';
import TS from '../images/ts.png';
import REACT from '../images/react.png';
import VUE from '../images/vue.png';
import LARAVEL from '../images/laravel.png';
import BOOSTRAP from '../images/bootstrap.png';
import WP from '../images/wordpress.png';


interface IProps {

}

interface IState {
  git: number
  npm: number
  html: number
  css: number
  sass: number
  js: number
  ts: number
  react: number
  vue: number 
  laravel: number
  bootstrap: number
  wordpress: number
}


class CircularBar extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
          git: 0,
          npm: 0,
          html: 0,
          css: 0,
          sass: 0,
          js: 0,
          ts: 0,
          react: 0,
          vue: 0,
          laravel: 0,
          bootstrap: 0,
          wordpress: 0
        }
    }

    clickGit = () => {
      this.state.git > 0 ? 
      this.setState({
        git: 0,
      }) : 
      this.setState({
        git: 100,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickNPM = () => {
      this.state.npm > 0 ? 
      this.setState({
        npm: 0,
      }) : 
      this.setState({
        npm: 100,
        git: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickHTML = () => {
      this.state.html > 0 ? 
      this.setState({
        html: 0,
      }) : 
      this.setState({
        html: 90,
        git: 0,
        npm: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickCSS = () => {
      this.state.css > 0 ? 
      this.setState({
        css: 0,
      }) : 
      this.setState({
        css: 80,
        git: 0,
        npm: 0,
        html: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickSASS = () => {
      this.state.sass > 0 ? 
      this.setState({
        sass: 0,
      }) : 
      this.setState({
        sass: 55,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickJS = () => {
      this.state.js > 0 ? 
      this.setState({
        js: 0,
      }) : 
      this.setState({
        js: 75,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickTS = () => {
      this.state.ts > 0 ? 
      this.setState({
        ts: 0,
      }) : 
      this.setState({
        ts: 30,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickREACT = () => {
      this.state.react > 0 ? 
      this.setState({
        react: 0,
      }) : 
      this.setState({
        react: 65,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickVUE = () => {
      this.state.vue > 0 ? 
      this.setState({
        vue: 0,
      }) : 
      this.setState({
        vue: 45,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        laravel: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickLARAVEL = () => {
      this.state.laravel > 0 ? 
      this.setState({
        laravel: 0,
      }) : 
      this.setState({
        laravel: 60,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        bootstrap: 0,
        wordpress: 0
      });
    }
    
    clickBOOTSTRAP = () => {
      this.state.bootstrap > 0 ? 
      this.setState({
        bootstrap: 0,
      }) : 
      this.setState({
        bootstrap: 80,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        wordpress: 0
      });
    }
    
    clickWP = () => {
      this.state.wordpress > 0 ? 
      this.setState({
        wordpress: 0,
      }) : 
      this.setState({
        wordpress: 50,
        git: 0,
        npm: 0,
        html: 0,
        css: 0,
        sass: 0,
        js: 0,
        ts: 0,
        react: 0,
        vue: 0,
        laravel: 0,
        bootstrap: 0
      });
    }

   
    render () {
        return (
          <div className="SkillsCircularBar">

            <div className="Skills01">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="git-gradient" x2="1" y2="1">
                  <stop offset="50%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#df3c00" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickGit}>
                <div className="CircularBox circle01">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.git}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >          
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#git-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={GIT}
                            alt="Git"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>   
            </div>
            
            <div className="Skills02">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="npm-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#cd1512" />
                </linearGradient>
              </svg>
            <div className="CircularBoxClick"  onClick={this.clickNPM}>
                <div className="CircularBox circle02">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.npm}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#npm-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={NPM}
                            alt="NPM"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills03">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="html-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#f36000" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickHTML}>
                <div className="CircularBox circle03">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.html}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#html-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={HTML}
                            alt="HTML"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills04">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="css-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#429ae1" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickCSS}>
                <div className="CircularBox circle04">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.css}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#css-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={CSS}
                            alt="CSS"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills05">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="sass-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#cf4294" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickSASS}>
                <div className="CircularBox circle05">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.sass}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#sass-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={SASS}
                            alt="SASS"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills06">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="js-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#e8f033" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickJS}>
                <div className="CircularBox circle06">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.js}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#js-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={JS}
                            alt="JS"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills07">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="ts-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#3757d0" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickTS}>
                <div className="CircularBox circle07">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.ts}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#ts-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={TS}
                            alt="TS"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills08">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="react-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#62d4ff" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickREACT}>
                <div className="CircularBox circle08">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.react}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#react-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={REACT}
                            alt="REACT"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills09">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="vue-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#1fc685" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickVUE}>
                <div className="CircularBox circle09">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.vue}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#vue-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={VUE}
                            alt="VUE"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills10">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="laravel-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#ff3600" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickLARAVEL}>
                <div className="CircularBox circle10">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.laravel}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#laravel-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={LARAVEL}
                            alt="LARAVEL"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills11">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="bs-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#631683" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickBOOTSTRAP}>
                <div className="CircularBox circle11">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.bootstrap}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#bs-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={BOOSTRAP}
                            alt="BOOSTRAP"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>
            

            <div className="Skills12">
              <svg className="svgColor" aria-hidden="true" focusable="false">
                <linearGradient id="wp-gradient" x2="1" y2="1">
                  <stop offset="0%" stop-color="#919191" />
                  <stop offset="100%" stop-color="#2e6b9d" />
                </linearGradient>
              </svg>
              <div className="CircularBoxClick"  onClick={this.clickWP}>
                <div className="CircularBox circle12">
                  <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.state.wordpress}
                    duration={1}
                    easingFunction={easeQuadInOut}
                  >              
                    {(value) => {
                      return (
                        <CircularProgressbarWithChildren
                          value={value}
                          styles={buildStyles({
                            strokeLinecap: "butt",
                            pathColor: "url(#wp-gradient)"
                          })}
                          strokeWidth={5}
                        >
                          <img
                            className="ImgLogo"
                            src={WP}
                            alt="WORDPRESS"
                          />
                        </CircularProgressbarWithChildren>
                      );
                    }}
                  </AnimatedProgressProvider>
                </div>
              </div>
            </div>

          </div>
        )
    }
};

export default CircularBar;