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
      // debugger;
      if (innerHeight + scrollTop > offsetHeight - 5) {
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
      <div className="container">
        <ul className="grid grid-gutter padding-left">
          {songs.map(song => (
            <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
              <SongIndexItem {...song} />
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
