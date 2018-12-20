import React from 'react';
import SongIndexItemHC from './song_index_item_HC';

class SongIndexHC extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   offSet: 0,
    //   playlistNameInput: '',
    // };

    const { type } = this.props;
    if (type === 'index') {
      this.state = {
        offSet: 0,
      };

      window.addEventListener('scroll', () => {
        const { fetchSomeSongs } = this.props;
        const { offSet } = this.state;

        const { innerHeight } = window;
        const { scrollTop, offsetHeight } = document.documentElement;

        if (innerHeight + scrollTop > offsetHeight - 1) {
          fetchSomeSongs(offSet);
          this.setState(state => ({
            offSet: state.offSet + 20,
          }));
        }
      });
    }

    if (type === 'playlist') {
      this.state = {
        playlistNameInput: '',
      };

      this.handleChange = this.handleChange.bind(this);
    }
  }

  componentWillMount() {
    const { type } = this.props;

    if (type === 'index') {
      const { cookies, receiveSongs, addSongsToList } = this.props;

      const audioPlayerCookies = cookies.get('audioPlayer');
      if (audioPlayerCookies) {
        receiveSongs(cookies.get('audioPlayer').songs);
        addSongsToList(cookies.get('audioPlayer').audioPlayer);
      }
    }
  }

  componentDidMount() {
    const { type } = this.props;

    if (type === 'index') {
      const { fetchSomeSongs } = this.props;
      const { offSet } = this.state;

      fetchSomeSongs(offSet);

      this.setState(state => ({
        offSet: state.offSet + 20,
      }));
    }
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
        editPlaylist(playlistNameInput, userId, playingSongIds);
        break;
      default:
        savePlaylist(playlistNameInput, userId, playingSongIds);
    }
  }

  renderPlaylistForm() {
    const { type } = this.props;
    if (type === 'playlist') {
      return (
        <div>
          <i className="fas fa-save" role="presentation" onClick={this.handleClick('save')} />
          <i className="fas fa-edit" role="presentation" onClick={this.handleClick('edit')} />
          <input type="text" onChange={this.handleChange} placeholder="Change playlist's name here..." />
        </div>
      );
    }
    return null;
  }

  render() {
    const {
      songs, playSong, addSongToList, playingSongTitles, playingSongIds,
    } = this.props;

    return (
      <section className="section">
        <div className="container song-index">
          {this.renderPlaylistForm()}

          <ul className="grid grid-gutter padding-left">
            {songs.map(song => (
              <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
                <SongIndexItemHC
                  {...song}
                  playSong={playSong}
                  addSongToList={addSongToList}
                  playingSongTitles={playingSongTitles}
                  playingSongIds={playingSongIds}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default SongIndexHC;
