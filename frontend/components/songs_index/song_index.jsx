import React from 'react';
import PropTypes from 'prop-types';
import SongIndexItem from './song_index_item';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offSet: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    fetchSomeSongs(offSet);

    this.setState(state => ({
      offSet: state.offSet + 10,
    }));
  }

  handleScroll(e) {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    const bottom = ((e.target.scrollTop % e.target.clientHeight) + 50) >= e.target.clientHeight;
    // debugger;

    if (bottom) {
      fetchSomeSongs(offSet);
      // const {
      //   scrollTop, clientHeight, offsetHeight, scrollHeight,
      // } = document.getElementById('song-index-container');
      // debugger;
      // if (scrollTop + 10 >= clientHeight) {
      // debugger;


      this.setState(state => ({
        offSet: state.offSet + 10,
      }));
    }
  }

  render() {
    const { songs } = this.props;
    // debugger;
    return (
      <div className="song-index-container" id="song-index-container" onScroll={this.handleScroll}>
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
