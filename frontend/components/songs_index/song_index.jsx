import React from 'react';
// import { Cookies } from 'react-cookie';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offSet: 0,
    };

    window.addEventListener('scroll', () => {
      const { fetchSomeSongs } = this.props;
      const { offSet } = this.state;

      const { innerHeight } = window;
      const { scrollTop, offsetHeight } = document.documentElement;

      if (innerHeight + scrollTop > offsetHeight - 5) {
        fetchSomeSongs(offSet);
        this.setState(state => ({
          offSet: state.offSet + 10,
        }));
      }
    });
  }

  componentWillMount() {
    debugger;
    const { cookies, receiveSongs, addSongsToList } = this.props;
    receiveSongs(cookies.get('audioPlayer').songs);
    addSongsToList(cookies.get('audioPlayer').audioPlayer);
  }

  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    fetchSomeSongs(offSet);

    this.setState(state => ({
      offSet: state.offSet + 10,
    }));
  }

  render() {
    const {
      songs, playSong, addSongToList, playingSongs,
    } = this.props;

    return (
      <div className="container">
        <ul className="grid grid-gutter padding-left">
          {songs.map(song => (
            <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
              <SongIndexItem
                {...song}
                playSong={playSong}
                addSongToList={addSongToList}
                playingSongs={playingSongs}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SongIndex;
