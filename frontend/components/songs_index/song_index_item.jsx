import React from 'react';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, artist, album } = this.props;

    return (
      <div>
        <img
          src="https://raw.githubusercontent.com/retrofuturejosh/demo-react-modular-audio-player/master/public/beatlesPic.png"
          alt={title}
          height="160"
          width="160"
        />
        <br />
        {title}
        <br />
        {artist}
      </div>
    );
  }
}

export default SongIndexItem;
