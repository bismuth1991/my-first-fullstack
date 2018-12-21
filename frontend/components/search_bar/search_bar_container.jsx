import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchQueryData } from '../../actions/search_bar_actions';
import { receiveQuerySongs } from '../../actions/song_actions';

const mapStateToProps = ({ entities: { searchBar: { songs, artists, albums } } }) => ({
  songState: songs,
  songs: Object.values(songs).slice(0, 3),
  artists,
  albums,
});

const mapDispatchToProps = dispatch => ({
  fetchQueryData: query => dispatch(fetchQueryData(query)),
  receiveQuerySongs: songs => dispatch(receiveQuerySongs(songs)),
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
