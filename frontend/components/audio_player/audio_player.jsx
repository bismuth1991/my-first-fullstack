import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import PropTypes from 'prop-types';
import { Cookies } from 'react-cookie';
import rearrangedPlayer from './rearranged_player';
import PlaylistIndex from './playlist_item';


const currentDate = () => new Date().toLocaleString();
class Mp3Player extends React.Component {
  constructor(props) {
    super(props);

    this.setCookies = this.setCookies.bind(this);
    this.closeAudioPlayer = this.closeAudioPlayer.bind(this);
    this.saveToPersonalPlaylist = this.saveToPersonalPlaylist.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.setCookies);
  }

  componentWillUnmount() {
    this.setCookies();
    window.removeEventListener('beforeunload', this.setCookies);
  }

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

  closeAudioPlayer() {
    const { removeAllSongsFromList } = this.props;
    removeAllSongsFromList();
  }

  saveToPersonalPlaylist() {
    const { createPlaylist, userId, audioPlayerCookies } = this.props;

    createPlaylist(currentDate(), userId, audioPlayerCookies);
  }

  render() {
    const { songList, songs, audioPlayerCookies } = this.props;

    if (typeof songList[0] !== 'object') {
      return null;
    }
    return (
      <>
        {/* <PlaylistIndex songs={songsCookies} /> */}

        <div className="audio-player-container">
          <AudioPlayer
            audioFiles={songList}
            rearrange={rearrangedPlayer}
            iconSize="25px"
            fontSize="14px"
            playerWidth="450px"
          />

          <i
            className="fas fa-save"
            role="presentation"
            title="save to personal playlist"
            onClick={this.saveToPersonalPlaylist}
          />
          <i
            className="fas fa-times"
            role="presentation"
            title="close player"
            onClick={this.closeAudioPlayer}
          />
        </div>
      </>
    );
  }
}

Mp3Player.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  songList: PropTypes.instanceOf(Array).isRequired,
};

export default Mp3Player;
