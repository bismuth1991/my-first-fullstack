import React from 'react';
import PropTypes from 'prop-types';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    fetchSomeSongs();
  }

  render() {
    const { songs } = this.props;

    return (
      <div className="song-index-container">
        <h1>Song Index goes here!</h1>
        <ul className="song-index">
          {songs.map(song => (
            <li key={song.id} className="song-index-item">
              <SongIndexItem title={song.title} artist={song.artist} album={song.album} />
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
