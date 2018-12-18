json.playlistSongs do 
  @playlist_songs.each do |playlist_song|
    json.set! playlist_song.id do 
      json.extract! playlist_song, :id, :playlist_id, :song_id
    end
  end
end

json.songs do 
  @songs.each do |song|
    json.set! song.id do 
      json.id song.id
      json.title song.title
      json.artist song.artist.name
      json.album song.album.name
      json.albumCover url_for(song.album.cover_image)
      json.url url_for(song.url)
    end
  end
end