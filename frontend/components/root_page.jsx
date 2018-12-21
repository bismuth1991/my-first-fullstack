import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { fetchSomeSongs, receiveSongs } from '../actions/song_actions';
import { addSongsToList } from '../actions/audio_player_actions';

class RootPage extends React.Component {
  componentWillMount() {
    const { cookies, receiveSongs, addSongsToList } = this.props;

    const audioPlayerCookies = cookies.get('audioPlayer');
    if (audioPlayerCookies) {
      receiveSongs(cookies.get('audioPlayer').songs);
      addSongsToList(cookies.get('audioPlayer').audioPlayer);
    }
  }

  componentDidMount() {
    const { fetchSomeSongs } = this.props;
    fetchSomeSongs(0);
  }

  render() {
    return <></>;
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: offSet => dispatch(fetchSomeSongs(offSet)),
  receiveSongs: songs => dispatch(receiveSongs(songs)),
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
});

export default withCookies(connect(
  null,
  mapDispatchtoProps,
)(RootPage));
