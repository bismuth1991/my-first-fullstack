import React from 'react';

class UserPlaylistForm extends React.Component {
  constructor() {
    super();

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
    const { playlistNameInput } = this.state;
    const {
      savePlaylist, editPlaylist, playingSongIds, userId,
    } = this.props;

    switch (type) {
      case 'edit':
        return () => editPlaylist(playlistNameInput, userId, playingSongIds);
      default:
        return () => savePlaylist(playlistNameInput, userId, playingSongIds);
    }
  }

  render() {
    const { playlistNameInput } = this.state;

    return (
      <div className="container search-bar playlist-form">
        <form className="input-wrapper">
          <h2>Title</h2>

          <button type="button">
            <i
              className="fas fa-save"
              role="presentation"
              title="save to new Playlist"
              onClick={this.handleClick('save')}
            />
          </button>

          <button type="button">
            <i
              className="fas fa-edit"
              role="presentation"
              title="edit Playlist"
              onClick={this.handleClick('edit')}
            />
          </button>

          <input type="text" onChange={this.handleChange} value={playlistNameInput} placeholder="Change playlist's name here..." />
        </form>
      </div>
    );
  }
}

export default UserPlaylistForm;
