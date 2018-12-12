import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './song_item';
import ArtistItem from './artist_item';
import AlbumItem from './album_item';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });
  }

  render() {
    const { query } = this.state;
    const { songs, artists, albums } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for songs, artists or albums..."
            value={query}
            onChange={this.handleChange}
          />

          <button type="submit">search</button>
        </form>

        <ul>
          <li>Songs</li>
          {songs.map(song => <li><SongItem key={song.id} title={song.title} artist={song.artist} album={song.album} /></li>)}
        </ul>

        <ul>
          <li>Artists</li>
          {artists.map(artist => <li><ArtistItem key={artist.id} name={artist.name} /></li>)}
        </ul>

        <ul>
          <li>Albums</li>
          {albums.map(album => <li><AlbumItem key={album.id} name={album.name} /></li>)}
        </ul>
      </>
    );
  }
}

SearchBar.defaultProps = {
  songs: [],
  artists: [],
  albums: [],
};

SearchBar.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
  })),

  artists: PropTypes.arrayOf(PropTypes.string),
  albums: PropTypes.arrayOf(PropTypes.string),
};

export default SearchBar;
