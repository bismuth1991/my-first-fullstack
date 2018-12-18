@plsylists.each do |playlist|
  json.set! playlist.id do 
    json.name playlist.name
  end
end