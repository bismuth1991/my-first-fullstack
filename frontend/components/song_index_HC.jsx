import React from 'react';
import SongIndexItemHC from './song_index_item_HC';

class SongIndexHC extends React.Component {
  componentWillMount() {
    const { cookies, receiveSongs, addSongsToAudioPlayer } = this.props;

    const audioPlayerCookies = cookies.get('audioPlayer');
    if (audioPlayerCookies) {
      receiveSongs(cookies.get('audioPlayer').songs);
      addSongsToAudioPlayer(cookies.get('audioPlayer').audioPlayer);
    }
  }

  render() {
    const { songs } = this.props;

    return (
      <section className="section">
        <div className="container song-index">
          <ul className="grid grid-gutter padding-left">
            {songs.map(song => (
              <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
                <SongIndexItemHC
                  {...song}
                  {...this.props}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default SongIndexHC;
