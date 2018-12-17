import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import PropTypes from 'prop-types';
import { Cookies } from 'react-cookie';

class Mp3Player extends React.Component {
  constructor(props) {
    super(props);

    this.setCookies = this.setCookies.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.setCookies);
  }

  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.setCookies);
  // }

  setCookies() {
    const { cookies, audioPlayerCookies, songsCookies } = this.props;
    cookies.set(
      'audioPlayer', {
        // entities:
        songs: songsCookies,
        // session:
        audioPlayer: audioPlayerCookies,
      }, { path: '/' },
    );
  }

  render() {
    // debugger;
    const { songList } = this.props;

    return typeof songList[0] !== 'object' ? null
      : <AudioPlayer audioFiles={songList} />;
  }
}

Mp3Player.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  songList: PropTypes.instanceOf(Array).isRequired,
};

export default Mp3Player;
