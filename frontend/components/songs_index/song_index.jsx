import React from 'react';
import SongsContainer from '../songs_container';

class SongIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offSet: 20,
    };

    this.fetchMoreSongs = this.fetchMoreSongs.bind(this);
    window.addEventListener('scroll', this.fetchMoreSongs);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.fetchMoreSongs);
  }

  fetchMoreSongs() {
    const { fetchSomeSongs } = this.props;
    const { offSet } = this.state;

    if (offSet > 35) return;

    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;

    if (innerHeight + scrollTop > offsetHeight - 1) {
      fetchSomeSongs(offSet);
      this.setState(state => ({
        offSet: state.offSet + 20,
      }));
    }
  }

  render() {
    return (
      <SongsContainer {...this.props} />
    );
  }
}

export default SongIndex;
