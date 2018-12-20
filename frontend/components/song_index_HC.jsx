import React from 'react';
import SongIndexItemHC from './song_index_item_HC';
import UserPlaylistForm from './user_playlists/user_playlist_form';

class SongIndexHC extends React.Component {
  constructor() {
    super();

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

  render() {
    const { songs } = this.props;

    return (
      <>
        <section className="section">
          <UserPlaylistForm {...this.props} />
        </section>

        <section className="section">
          <div className="container song-index">
            <ul className="grid grid-gutter padding-left">
              {songs.map(song => (
                <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
                  <SongIndexItemHC
                    {...song}
                    {...this.props}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
    </>
    );
  }
}

export default SongIndexHC;
