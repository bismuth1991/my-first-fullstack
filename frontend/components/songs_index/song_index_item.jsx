import React from 'react';
import PropTypes from 'prop-types';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { title, artist, albumCover } = this.props;

    return (
      <div className="song-item-container">
        <figure className="song-img-container">
          <img className="song-img" src={albumCover} alt={title} />

          <i className="far fa-play-circle" />
          <i className="fas fa-plus" title="Add to current Playlist" />
          <i className="fas fa-heart" title="Like" />
        </figure>

        <a>{title}</a>
        <a>{artist}</a>
      </div>
    );
  }
}

SongIndexItem.propTypes = {
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
};

export default SongIndexItem;
