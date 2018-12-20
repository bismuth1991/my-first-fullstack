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

  componentDidUpdate() {
    // debugger;
  }

  handleChange(e) {
    this.setState({
      playlistNameInput: e.target.value,
    });
  }

  handleClick(type) {
    return (e) => {
      e.preventDefault();

      const { playlistNameInput } = this.state;
      const {
        savePlaylist, editPlaylist, playingSongIds, userId,
      } = this.props;
      const { match: { params: { playlistId } } } = this.props;

      switch (type) {
        case 'edit':
          editPlaylist(playlistId, playlistNameInput, userId, playingSongIds);
          break;
        default:
          savePlaylist(playlistNameInput, userId, playingSongIds);
          break;
      }
    };
  }

  render() {
    const { playlistNameInput } = this.state;

    return (
      <section className="section">
        <div className="container search-bar playlist-form">
          <form className="input-wrapper">
            <h2>Title</h2>

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
