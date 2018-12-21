import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchQueryData } from '../../actions/search_bar_actions';
import { receiveQuerySongs } from '../../actions/song_actions';

const mapStateToProps = ({ entities: { searchBar } }) => ({
  ...searchBar,
  songsForShow: Object.values(searchBar.songsForShow),
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
