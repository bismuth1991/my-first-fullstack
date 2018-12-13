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

  handleSubmit(e) {
    e.preventDefault();

    this.setState({
      query: '',
    });
  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    });

    const { fetchQueryData } = this.props;
    fetchQueryData(e.target.value);
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

          <button type="submit"><i className="fa fa-search" /></button>
        </form>

        <ul>
          <li>
            <i className="fas fa-music" />
            SONGS
          </li>

          {songs.map(song => <li key={song.id}><SongItem title={song.title} artist={song.artist} album={song.album} /></li>)}
        </ul>

        <ul>
          <li>
            <i className="fas fa-user-circle" />
            ARTISTS
          </li>

          {artists.map(artist => <li key={artist.id}><ArtistItem name={artist.name} /></li>)}
        </ul>

        <ul>
          <li>
            <i className="fas fa-compact-disc" />
            ALBUMS
          </li>

          {albums.map(album => <li key={album.id}><AlbumItem name={album.name} /></li>)}
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

  artists: PropTypes.instanceOf(Array),
  albums: PropTypes.instanceOf(Array),

  fetchQueryData: PropTypes.func.isRequired,
};

export default SearchBar;
