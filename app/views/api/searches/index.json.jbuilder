json.songs do 
  @songs.each do |song|
    json.set! song.id do 
      json.extract! song, :id, :title, :artist_id, :album_id
    end
  end 
end

json.artists do 
  json.array! @artists, :name
end

json.albums do 
  json.array! @albums, :name
end