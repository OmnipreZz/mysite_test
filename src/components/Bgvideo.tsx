import React, { Component } from 'react';
import '../scss/bgvideo.scss';


interface IProps {

}

interface IState {
  videoURL?: string;
}


class Bgvideo extends Component<IProps, IState> {
    constructor (props: IProps) {
        super(props);
        this.state = {
            videoURL: 'videos/Abstract.mp4'
        }
    }
    render () {
        return (
            <video className="background-video" autoPlay loop muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Bgvideo;

