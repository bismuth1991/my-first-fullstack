import { connect } from 'react-redux';
import { fetchSomeSongs } from '../../actions/song_actions';
import SongIndex from './song_index';

const mapStateToProps = ({ entities: { songs } }) => ({
  songs: Object.values(songs),
});

const mapDispatchtoProps = dispatch => ({
  fetchSomeSongs: () => dispatch(fetchSomeSongs()),
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchtoProps,
)(SongIndex);


export default SongIndexContainer;
