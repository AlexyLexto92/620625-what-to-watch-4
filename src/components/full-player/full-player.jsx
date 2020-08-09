import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import history from '../../history.js';
import { connect } from 'react-redux';
import { getFilms } from '../../reducer/data/selectors.js';
import { RouteConst } from '../../utils.js';
class FullPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
    this.state = {
      isPlaying: true,
      duration: 0,
      progress: 0,
    };
    this.onHendlerPlay = this.onHendlerPlay.bind(this);
    this.onHendlerPause = this.onHendlerPause.bind(this);
    this.handlerFullScreenClick = this.handlerFullScreenClick.bind(this);
    this.setDuration = this.setDuration.bind(this);

  }

  onHendlerPause() {
    this.setState({
      isPlaying: false,
    });
  }
  onHendlerPlay() {
    this.setState({
      isPlaying: true,
    });
  }
  handlerFullScreenClick() {
    const video = this._videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }

  setDuration() {
    const video = this._videoRef.current;
    this.setState({
      duration: video.duration,
    });
  }

  componentDidMount() {
    const { currentFilm } = this.props;
    if (currentFilm) {
      const video = this._videoRef.current;
      video.src = currentFilm.video_link;
      video.muted = true;

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () =>
        this.setState({
          progress: video.currentTime * 100 / video.duration,
        });
    }
  }

  componentDidUpdate() {
    const { isPlaying } = this.state;
    const video = this._videoRef.current;
    if (isPlaying) {
      video.play();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    video.muted = null;
    video.src = null;
    video.poster = null;
    video.onplay = null;
    video.onpause = null;
    video.onplay = null;
  }

  render() {
    debugger;
    const { filmList } = this.props;
    const { isPlaying, duration, progress } = this.state;
    const currentFilm = filmList[0];
    if (!currentFilm) {
      return null;
    } return <div className="player">
      <video ref={this._videoRef}
        width="100%"
        height="100%"
        onLoadedMetadata={this.setDuration}
        crossOrigin="anonymous" src="#" className="player__video" poster="img/player-poster.jpg" />
      <button onClick={history.push(RouteConst.MAIN)} type="button" className="player__exit">Exit</button>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={100} />
            <div className="player__toggler" style={{ left: `${progress}%` }}>Toggler</div>
          </div>
          <div className="player__time-value">{duration}</div>
        </div>
        <div className="player__controls-row">
          {isPlaying ? <button onClick={this.onHendlerPause} type="button" className="player__play">
            <svg viewBox="0 0 14 21" width={14} height={21}>
              <use xlinkHref="#pause" />
            </svg>
            <span>Pause</span>
          </button> : <button onClick={this.onHendlerPlay} type="button" className="player__play">
              <svg viewBox="0 0 19 19" width={19} height={19}>
                <use xlinkHref="#play-s" />
              </svg>
              <span>Play</span>
            </button>}
          <div className="player__name">Transpotting</div>
          <button onClick={this.handlerFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen" />
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div >;
  }
}
const mapStateToProps = (state) => ({
  filmList: getFilms(state),
});

FullPlayer.propTypes = {
  handlerButtonCloseClick: PropTypes.func,
  currentFilm: PropTypes.object,
};
export default connect(mapStateToProps)(FullPlayer);
