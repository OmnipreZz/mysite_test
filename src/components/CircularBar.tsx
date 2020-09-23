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

    handleClick = (value:number, name:string) => {
      switch (name) {
        case "Git":
          this.state.git > 0 ? 
          this.setState({
            git: 0,
          }) : 
          this.setState({
            git: value,
          });
        break;
        case 'NPM':
          this.state.npm > 0 ? 
          this.setState({
            npm: 0,
          }) : 
          this.setState({
            npm: value,
          });
        break;
        case 'HTML':
          this.state.html > 0 ? 
          this.setState({
            html: 0,
          }) : 
          this.setState({
            html: value,
          });
        break;
        case 'CSS':
          this.state.css > 0 ? 
          this.setState({
            css: 0,
          }) : 
          this.setState({
            css: value,
          });
        break;
        case 'SASS':
          this.state.sass > 0 ? 
          this.setState({
            sass: 0,
          }) : 
          this.setState({
            sass: value,
          });
        break;
        case 'JS':
          this.state.js > 0 ? 
          this.setState({
            js: 0,
          }) : 
          this.setState({
            js: value,
          });
        break;
        case 'TS':
          this.state.ts > 0 ? 
          this.setState({
            ts: 0,
          }) : 
          this.setState({
            ts: value,
          });
        break;
        case 'React':
          this.state.react > 0 ? 
          this.setState({
            react: 0,
          }) : 
          this.setState({
            react: value,
          });
        break;
        case 'Vue':
          this.state.vue > 0 ? 
          this.setState({
            vue: 0,
          }) : 
          this.setState({
            vue: value,
          });
        break;
        case 'Laravel':
          this.state.laravel > 0 ? 
          this.setState({
            laravel: 0,
          }) : 
          this.setState({
            laravel: value,
          });
        break;
        case 'Bootstrap':
          this.state.bootstrap > 0 ? 
          this.setState({
            bootstrap: 0,
          }) : 
          this.setState({
            bootstrap: value,
          });
        break;
        case 'Wordpress':
          this.state.wordpress > 0 ? 
          this.setState({
            wordpress: 0,
          }) : 
          this.setState({
            wordpress: value,
          });
        break;
        default:
          console.log("hello");
      }
    }
   
    render () {
        return (
          <div className="SkillsCircularBar">
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
                            valueEnd={skills.name === "Git" ? this.state.git :
                                      skills.name === "NPM" ? this.state.npm : 
                                      skills.name === "HTML" ? this.state.html : 
                                      skills.name === "CSS" ? this.state.css : 
                                      skills.name === "SASS" ? this.state.sass :
                                      skills.name === "JS" ? this.state.js :
                                      skills.name === "TS" ? this.state.ts :
                                      skills.name === "React" ? this.state.react :
                                      skills.name === "Vue" ? this.state.vue :
                                      skills.name === "Laravel" ? this.state.laravel :
                                      skills.name === "Bootstrap" ? this.state.bootstrap :
                                      skills.name === "Wordpress" ? this.state.wordpress : 0 }
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
        )
    }
};

export default CircularBar;