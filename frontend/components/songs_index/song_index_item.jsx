import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {

  }

  render() {
    const { title, artist, album } = this.props;

    return (
      <div className="song-cover">
        <div className="song-cover-img">
          <i className="far fa-play-circle play-icon" />
        </div>
      </div>
    );
  }
}

export default SongIndexItem;
