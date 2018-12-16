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

      const { innerHeight } = window;
      const { scrollTop, offsetHeight } = document.documentElement;

      if (innerHeight + scrollTop > offsetHeight - 0) {
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
      <ul className="song-index">
        {songs.map(song => (
          <li key={song.id}>
            <SongIndexItem title={song.title} artist={song.artist} albumCover={song.albumCover} />
          </li>
        ))}
      </ul>
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
