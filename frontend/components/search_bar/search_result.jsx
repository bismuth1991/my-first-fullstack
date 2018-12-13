import React from 'react';
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
    <>
      <div className="search-results">
        <ul>
          <div>
            <i className="fas fa-music" />
            SONGS
          </div>

          {songs.map(song => <li key={song.id}><SongItem title={song.title} artist={song.artist} album={song.album} /></li>)}
        </ul>

        <ul>
          <div>
            <i className="fas fa-user-circle" />
            ARTISTS
          </div>

          {artists.map(artist => <li key={artist.id}><ArtistItem name={artist.name} /></li>)}
        </ul>

        <ul>
          <div>
            <i className="fas fa-compact-disc" />
            ALBUMS
          </div>

          {albums.map(album => <li key={album.id}><AlbumItem name={album.name} /></li>)}
        </ul>
      </div>
    </>
  )
);

export default SearchResult;
