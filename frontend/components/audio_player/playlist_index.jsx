import React from 'react';
import PlaylistItem from './playlist_item';

class PlaylistIndex extends React.Component {
  componentDidMount() {

  }

  render() {
    const {
      songs, playSong, addSongToList, playingSongs,
    } = this.props;

    return (
      <section className="section">
        <div className="container song-index">
          <ul className="grid grid-gutter padding-left">
            {songs.map(song => (
              <li className="grid-cell u-full u-med-1of2 u-large-1of3 u-xlarge-1of4" key={song.id}>
                <PlaylistItem
                  {...song}
                  playSong={playSong}
                  addSongToList={addSongToList}
                  playingSongs={playingSongs}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}
