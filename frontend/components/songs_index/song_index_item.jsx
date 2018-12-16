import React from 'react';

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
          <i className="far fa-play-circle play-icon" />
        </figure>

        <a>{title}</a>
        <a>{artist}</a>
      </div>
    );
  }
}

export default SongIndexItem;
