import React from 'react';
import { connect } from 'react-redux';
import SongsContainer from '../songs_container';
import { createPlaylist } from '../../actions/user_playlist_actions';
import { currentDate } from '../../util/user_playlist_utils';

class PlaylistIndex extends React.Component {
  constructor() {
    super();

    this.state = {
      playlistName: '',
    };


    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      playlistName: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();

    const { savePlaylist, userId, songIds } = this.props;

    let { playlistName } = this.state;
    if (playlistName === '') playlistName = currentDate();

    savePlaylist(userId, songIds, playlistName);

    this.setState({
      playlistName: '',
    });
  }

  render() {
    const { playlistName } = this.state;

    return (<>
      <section className="section">
        <div className="container search-bar playlist-form">
          <form className="input-wrapper" onSubmit={this.handleClick}>
            <h2 className="playlist-header">Playlist</h2>

            <input
              type="text"
              onChange={this.handleChange}
              value={playlistName}
              placeholder="Playlist name ..."
            />

            <button type="button">
              <i
                className="fas fa-save"
                role="presentation"
                title="save to new Playlist"
                onClick={this.handleClick}
              />
            </button>
          </form>
        </div>
      </section>

      <SongsContainer {...this.props} />
  </>);
  }
}

const mapStateToProps = (state) => {
  const { entities: { songs } } = state;
  const { session: { currentUser, audioPlayer } } = state;

  return {
    songIds: audioPlayer,
    songs: audioPlayer.map(songId => songs[songId]),
    userId: currentUser.id,
  };
};

const mapDispatchToProps = dispatch => ({
  savePlaylist: (userId, songIds, playlistName) => (dispatch(createPlaylist(userId, songIds, playlistName))),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistIndex);
