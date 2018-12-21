import React from 'react';
import { connect } from 'react-redux';
import SongsContainer from '../songs_container';
import { addSongsToList } from '../../actions/audio_player_actions';

class SearchShow extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    const { addSongsToList, songIds } = this.props;

    addSongsToList(songIds);
    window.setTimeout(() => document.getElementById('play-icon').click(), 500);
  }

  render() {
    return (<>
      <section className="section">
        <div className="container search-bar playlist-form">
          <form className="input-wrapper">
            <button type="button" className="play">
              <i
                className="fas fa-play"
                role="presentation"
                title="Play all"
                onClick={this.handleClick}
              />
            </button>

            <h2>Search results</h2>
          </form>
        </div>
      </section>

      <SongsContainer {...this.props} />
  </>);
  }
}

const mapStateToProps = ({ entities: { searchBar: { songIds, songs } } }) => ({
  songIds,
  songs: Object.values(songs),
});

const mapDispatchToProps = dispatch => ({
  addSongsToList: songIds => dispatch(addSongsToList(songIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchShow);
