import React from 'react';
import PropTypes from 'prop-types';
import SongItem from './song_item';
import ArtistItem from './artist_item';
import AlbumItem from './album_item';

const SearchResult = ({
  query,
  songs,
  artists,
  albums,
}) => (!query ? null
  : (
    <div className="search-results">
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
    </div>
  )
);

SearchResult.defaultProps = {
  songs: [],
  artists: [],
  albums: [],
};

SearchResult.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
    album: PropTypes.string,
  })),

  artists: PropTypes.instanceOf(Array),
  albums: PropTypes.instanceOf(Array),

  query: PropTypes.string.isRequired,
};

export default SearchResult;
