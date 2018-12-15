import React from 'react';
import PropTypes from 'prop-types';
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

      if (window.innerHeight + document.documentElement.scrollTop > document.documentElement.offsetHeight - 10) {
        fetchSomeSongs(offSet);
        this.setState(state => ({
          offSet: state.offSet + 10,
        }));
      }
    });
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
    const { songs } = this.props;
    return (
      <div className="song-index-container" id="song-index-container">
        <ul className="song-index">
          {songs.map(song => (
            <li key={song.id} className="song-index-item">
              <SongIndexItem title={song.title} artist={song.artist} albumCover={song.albumCover} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

SongIndex.defaultProps = {
  songs: [],
};

SongIndex.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
  })),

  fetchSomeSongs: PropTypes.func.isRequired,
};

export default SongIndex;
