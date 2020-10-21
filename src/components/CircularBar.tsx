import React, { Component } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import '../scss/circularbar.scss';
import '../scss/skills.scss';
import data from './SkillsData';


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
  title: string
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
          wordpress: 0,
          title: "SKILLS"
        }
    }

    handleClick = (value:number, name:string) => {
      switch (name) {
        case "GIT":
          this.state.git > 0 ? 
          this.setState({
            git: 0,
          }) : 
          this.setState({
            git: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'NPM':
          this.state.npm > 0 ? 
          this.setState({
            npm: 0,
          }) : 
          this.setState({
            npm: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'HTML':
          this.state.html > 0 ? 
          this.setState({
            html: 0,
          }) : 
          this.setState({
            html: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'CSS':
          this.state.css > 0 ? 
          this.setState({
            css: 0,
          }) : 
          this.setState({
            css: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'SASS':
          this.state.sass > 0 ? 
          this.setState({
            sass: 0,
          }) : 
          this.setState({
            sass: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'JAVASCRIPT':
          this.state.js > 0 ? 
          this.setState({
            js: 0,
          }) : 
          this.setState({
            js: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'TYPESCRIPT':
          this.state.ts > 0 ? 
          this.setState({
            ts: 0,
          }) : 
          this.setState({
            ts: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'REACT.JS':
          this.state.react > 0 ? 
          this.setState({
            react: 0,
          }) : 
          this.setState({
            react: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'VUE.JS':
          this.state.vue > 0 ? 
          this.setState({
            vue: 0,
          }) : 
          this.setState({
            vue: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'LARAVEL':
          this.state.laravel > 0 ? 
          this.setState({
            laravel: 0,
          }) : 
          this.setState({
            laravel: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'BOOTSTRAP':
          this.state.bootstrap > 0 ? 
          this.setState({
            bootstrap: 0,
          }) : 
          this.setState({
            bootstrap: value,
            title: name,
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
            wordpress: 0,
          });
        break;
        case 'WORDPRESS':
          this.state.wordpress > 0 ? 
          this.setState({
            wordpress: 0,
          }) : 
          this.setState({
            wordpress: value,
            title: name,
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
          });
        break;
        default:
          console.log("hello");
      }
    }
   
    render () {
        return (
          <div className="SkillsCircularBar">
            <div className="SkillsCircularBarTitle">
              <h2 className="SkillsTitle">{this.state.title}</h2>
            </div>
            <div className="SkillsCircularBarContent">
            {data.skills && data.skills.length && (
              data.skills.map( (skills, index) => {
                return <div className={skills.class} key={index}>
                        <svg className="svgColor" aria-hidden="true" focusable="false">
                          <linearGradient id={skills.gradient} x2="1" y2="1">
                            <stop offset="0%" stopColor={skills.color} />
                            <stop offset="50%" stopColor="#919191" />
                            <stop offset="100%" stopColor={skills.color} />
                          </linearGradient>
                        </svg>
                        <div className="CircularBoxClick"  onClick={() => {this.handleClick(skills.value, skills.name)}}>
                          <div className={skills.circle}>
                            <AnimatedProgressProvider
                              valueStart={0}
                              valueEnd={skills.name === "GIT" ? this.state.git :
                                        skills.name === "NPM" ? this.state.npm : 
                                        skills.name === "HTML" ? this.state.html : 
                                        skills.name === "CSS" ? this.state.css : 
                                        skills.name === "SASS" ? this.state.sass :
                                        skills.name === "JAVASCRIPT" ? this.state.js :
                                        skills.name === "TYPESCRIPT" ? this.state.ts :
                                        skills.name === "REACT.JS" ? this.state.react :
                                        skills.name === "VUE.JS" ? this.state.vue :
                                        skills.name === "LARAVEL" ? this.state.laravel :
                                        skills.name === "BOOTSTRAP" ? this.state.bootstrap :
                                        skills.name === "WORDPRESS" ? this.state.wordpress : 0 }
                              duration={1}
                              easingFunction={easeQuadInOut}
                            >          
                              {(value) => {
                                return (
                                  <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                      strokeLinecap: "butt",
                                      pathColor: `url(#${skills.gradient})`
                                    })}
                                    strokeWidth={5}
                                  >
                                    <img
                                      className="ImgLogo"
                                      src={skills.img}
                                      alt={skills.name}
                                    />
                                  </CircularProgressbarWithChildren>
                                );
                              }}
                            </AnimatedProgressProvider>
                          </div>
                        </div>   
                      </div>      
                })
              )}
            </div>
          </div>
        )
    }
};

export default CircularBar;