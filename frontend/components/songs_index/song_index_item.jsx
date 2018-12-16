import React from 'react';
import PropTypes from 'prop-types';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
    const { playSong, addSongToList } = this.props;
    const { id } = this.props;

    switch (type) {
      case 'add':
        addSongToList(id);
        break;
      default:
        addSongToList(id);
        playSong(id);
    }
  }

  render() {
    const { title, artist, albumCover } = this.props;

    return (
      <div className="song-item-container">
        <figure className="song-img-container" role="presentation" onClick={e => e.stopPropagation()}>
          <img className="song-img" src={albumCover} alt={title} />

          <i className="far fa-play-circle" role="presentation" onClick={this.handleClick('play')} />
          <i className="fas fa-plus" role="presentation" title="Add to current Playlist" onClick={this.handleClick('add')} />
          <i className="fas fa-heart" title="Like" />
        </figure>

        <a>{title}</a>
        <a>{artist}</a>
      </div>
    );
  }
}

SongIndexItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  addSongToList: PropTypes.func.isRequired,
};

export default SongIndexItem;
