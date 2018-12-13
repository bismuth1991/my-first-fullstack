json.songs do 
  if @songs == []
    json.array! @songs
  else 
    @songs.each do |song|
      json.set! song.id do 
        json.id song.id 
        json.title song.title
        json.artist song.artist.name
        json.album song.album.name
      end
    end
  end 
end

json.artists do 
  json.array! @artists, :id, :name
end

json.albums do 
  json.array! @albums, :id, :name
end