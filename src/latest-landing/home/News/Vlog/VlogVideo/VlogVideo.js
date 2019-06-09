import React, { Component } from "react";
import "./VlogVideo.scss";
import Icon from "../../../../shared/core/Icon";

class Vlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };

        this.onVideoPlay = this.onVideoPlay.bind(this);
        this.closeVideo = this.closeVideo.bind(this);
    }


    onVideoPlay() {
        this.setState({ isPlaying: true });
    }


    closeVideo() {
        this.props.onVideoClose();
        this.setState({ isPlaying: false });
    }


    render() {
        const { vlog } = this.props;
        const playingModifier = this.state.isPlaying ? 'is-playing' : '';

        return (
            <div className="VlogVideo">
                <div
                    className={`VlogVideo__container VlogVideo__container--${playingModifier}`}
                    style={{ backgroundImage: `url(${vlog.imgUrl})` }}>
                    <a className="VlogVideo__dismiss"
                       onClick={this.closeVideo}>
                        <Icon
                            name="times-circle-o"
                            size="topbar"
                        />
                    </a>
                    {
                        !this.state.isPlaying
                        &&
                        <a className="VlogVideo__play"
                           onClick={this.onVideoPlay}>
                            <Icon
                                name="youtube-play"
                                size="card"
                                className="Vlog__icon"
                            />
                        </a>
                    }
                    {
                        this.state.isPlaying
                        &&
                        <video
                            className="VlogVideo__video"
                            autoPlay
                            loop
                            muted>
                            <source
                                src={vlog.videoUrl}
                                type="video/mp4"
                            />
                        </video>
                    }
                    <div className="VlogVideo__height-mask">&nsbp;</div>
                </div>
            </div>
        );
    }
}

Vlog.propTypes = {};

export default Vlog;
