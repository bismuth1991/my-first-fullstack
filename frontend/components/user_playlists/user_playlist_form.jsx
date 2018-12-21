import React from 'react';

class UserPlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      playlistNameInput: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      playlistNameInput: e.target.value,
    });
  }

  handleClick(type) {
    return (e) => {
      e.preventDefault();

      const { playlistNameInput, songIds } = this.state;
      const {
        savePlaylist, editPlaylist, playingSongIds, userId, playlistId, addSongsToAudioPlayer,
      } = this.props;

      switch (type) {
        case 'edit':
          editPlaylist(playlistId, playlistNameInput, userId, playingSongIds);

          this.setState({
            playlistNameInput: '',
          });
          break;
        case 'play':
          addSongsToAudioPlayer(playingSongIds);
          break;
        default:
          savePlaylist(playlistNameInput, userId, playingSongIds);
          break;
      }
    };
  }

  render() {
    const { playlistNameInput } = this.state;
    const { playlistName } = this.props;

    return (
      <section className="section">
        <div className="container search-bar playlist-form">
          <form className="input-wrapper" onSubmit={this.handleClick('edit')}>
            <button type="button" className="play">
              <i
                className="fas fa-play"
                role="presentation"
                title="Play all"
                onClick={this.handleClick('play')}
              />
            </button>

            <h2>{playlistName}</h2>

            <input type="text" onChange={this.handleChange} value={playlistNameInput} placeholder="Change playlist's name here..." />

            <button type="button">
              <i
                className="fas fa-edit"
                role="presentation"
                title="edit Playlist"
                onClick={this.handleClick('edit')}
              />
            </button>

            <button type="button">
              <i
                className="fas fa-save"
                role="presentation"
                title="save to new Playlist"
                onClick={this.handleClick('save')}
              />
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default UserPlaylistForm;
