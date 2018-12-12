import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { fetchQueryData } from '../../actions/search_bar_actions';

const mapStateToProps = ({ entities: { searchBar: { songs, artists, albums } } }) => ({
  songs: Object.values(songs).slice(4),
  artists,
  albums,
});

const mapDispatchToProps = dispatch => ({
  fetchQueryData: query => dispatch(fetchQueryData(query)),
});

const SearchBarContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);

export default SearchBarContainer;
