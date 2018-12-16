import React from 'react';
import AudioPlayer from 'react-modular-audio-player';
import PropTypes from 'prop-types';


const Mp3Player = (props) => {
  const { cookies } = props;

  const { songList } = props;

  if (typeof songList[0] === 'object') {
    return (
      <AudioPlayer
        // rearrange={rearrangedPlayer}
        sliderClass="my-slider"
        audioFiles={songList}
      />
    );
  }
  return null;
};

Mp3Player.propTypes = {
  cookies: PropTypes.instanceOf(Object).isRequired,
  songList: PropTypes.instanceOf(Array).isRequired,
};

export default Mp3Player;
