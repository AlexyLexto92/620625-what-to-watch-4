import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
class Player extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }
  componentDidMount() {
    const {previewVideoLink, posterImage, isPlaying} = this.props;
    const video = this._videoRef.current;
    video.poster = posterImage;
    video.src = previewVideoLink;
    video.muted = true;
    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentDidUpdate() {

    const {isPlaying, previewVideoLink} = this.props;
    const video = this._videoRef.current;
    video.src = previewVideoLink;
    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.muted = null;
    video.src = null;
    video.poster = null;
  }

  render() {
    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
        crossOrigin="anonymous"
      />
    );
  }
}

Player.propTypes = {
  posterImage: PropTypes.string,
  isMuted: PropTypes.bool,
  previewVideoLink: PropTypes.string,
  isPlaying: PropTypes.bool,
  src: PropTypes.string,
};
export default Player;

