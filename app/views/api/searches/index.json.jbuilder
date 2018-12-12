json.songs do 
  @songs.each do |song|
    json.set! song.id do 
      json.id song.id 
      json.title song.title
      json.artist song.artist
      json.album song.album
    end
  end 
end

json.artists do 
  json.array! @artists, :name
end

json.albums do 
  json.array! @albums, :name
end