import React, { Component } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';

import '../scss/circularbar.scss';
import '../scss/skills.scss';
import AnimatedProgressProvider from './AnimatedProgressProvider';


interface IProps {

}
interface IState {

}

class CircularBar extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);

        this.state = {
 
        }
    }

    render () {
        return (
          <div className="SkillsCircularBar">
            <div className="CircularBox01">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={100}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"Git"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox02">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={100}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"NPM"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <div className="CircularBox03">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={90}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"HTML"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <div className="CircularBox04">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={80}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"CSS"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>
            <div className="CircularBox05">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={60}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"SASS"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox06">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={75}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"JS"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox07">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={30}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"TS"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox08">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={70}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"React"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox09">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={50}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"Vue"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox10">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={60}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"Laravel"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>

            <div className="CircularBox11">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={80}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"Bootstrap"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
                </AnimatedProgressProvider>
            </div>

            <div className="CircularBox12">
              <AnimatedProgressProvider
                valueStart={0}
                valueEnd={50}
                duration={1.5}
                easingFunction={easeQuadInOut}
              >
                {(value) => {
                  return (
                    <CircularProgressbar
                      value={value}
                      text={"Wordpress"}
                      styles={buildStyles({ pathTransition: 'none' })}
                    />
                  );
                }}
              </AnimatedProgressProvider>
            </div>



          </div>
        
 
 
        )
    }
};

export default CircularBar;