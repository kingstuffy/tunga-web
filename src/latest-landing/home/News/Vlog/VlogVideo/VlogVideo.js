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
                    className={`VlogVideo__container VlogVideo__container--${playingModifier}`}>
                    <a className="VlogVideo__dismiss"
                       onClick={this.closeVideo}>
                        <Icon
                            name="times-circle-o"
                            size="topbar"
                        />
                    </a>
                    <div className="VlogVideo__container">
                        <iframe allowFullScreen="allowFullScreen"
                                src={`https://www.youtube.com/embed/${vlog.id.videoId}?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=100`}
                                width="100%" height="100%" allowtransparency="true" frameBorder="0">
                        </iframe>
                    </div>
                    <div className="VlogVideo__height-mask">&nsbp;</div>
                </div>
            </div>
        );
    }
}

Vlog.propTypes = {};

export default Vlog;
