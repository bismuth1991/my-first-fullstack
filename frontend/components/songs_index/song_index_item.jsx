import React from 'react';
import PropTypes from 'prop-types';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.findPlayingSongIdx = this.findPlayingSongIdx.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  findPlayingSongIdx() {
    const { playingSongs } = this.props;

    const marquee = document.getElementsByClassName('marquee')[0];
    if (marquee) {
      const playingSongName = marquee.innerHTML.split(' - ')[1];
      const playingSongIdx = playingSongs.indexOf(playingSongName);
      if (playingSongIdx) return playingSongIdx;
    }
    return 0;
  }

  handleClick(type) {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();

      const { playSong, addSongToList } = this.props;
      const { id } = this.props;
      const playIcon = document.getElementById('play-icon');


      switch (type) {
        case 'add':
          addSongToList(id);
          break;
        default:
          if (playIcon) playIcon.click();
          playSong(id, this.findPlayingSongIdx());
          window.setTimeout(() => document.getElementById('play-icon').click(), 500);
      }
    };
  }

  render() {
    const { title, artist, albumCover } = this.props;

    return (
      <div className="song-item-container">
        <figure className="song-img-container">
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

SongIndexItem.defaultProps = {
  playingSongs: [],
};

SongIndexItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  albumCover: PropTypes.string.isRequired,
  playingSongs: PropTypes.arrayOf(PropTypes.string),
  playSong: PropTypes.func.isRequired,
  addSongToList: PropTypes.func.isRequired,
};

export default SongIndexItem;
