artists = [
  huong_tram = Artist.new(name: "Huong Tram")
]

albums = [
  em_gai_mua = Album.new(name: "Em Gai Mua"),
  voi_em_la_mai_mai = Album.new(name: "Voi Em La Mai Mai")
]

artists.each do |artist|
  artist.save!
end

huong_tram.picture.attach(io: File.open("app/assets/images/Artists/HuongTram.jpg"), filename: "HuongTram.jpg")

albums.each do |album|
  album.save!
end

em_gai_mua.cover_image.attach(io: File.open("app/assets/images/Albums/EmGaiMua.jpg"), filename: "EmGaiMua.jpg")
voi_em_la_mai_mai.cover_image.attach(io: File.open("app/assets/images/Albums/VoiEmLaMaiMai.jpg"), filename: "VoiEmLaMaiMai.jpg")

songs = [
  s1 = Song.new(title: "Chia Tay Trong Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s2 = Song.new(title: "Em Gai Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s3 = Song.new(title: "Hom Qua Mua", album_id: em_gai_mua.id, artist_id: huong_tram.id),
  s4 = Song.new(title: "Voi Em La Mai Mai", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id),
  s5 = Song.new(title: "Trang Duoi Chan Minh", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id),
  s6 = Song.new(title: "Ngai Ngung", album_id: voi_em_la_mai_mai.id, artist_id: huong_tram.id)
]

songs.each do |song|
  song.save!
end

s1.url.attach(io: File.open("app/assets/Songs/ChiaTayTrongMua.mp3"), filename: "ChiaTayTrongMua.mp3")
s2.url.attach(io: File.open("app/assets/Songs/EmGaiMua.mp3"), filename: "EmGaiMua.mp3")
s3.url.attach(io: File.open("app/assets/Songs/HomQuaMua.mp3"), filename: "HomQuaMua.mp3")
s4.url.attach(io: File.open("app/assets/Songs/VoiEmLaMaiMai.mp3"), filename: "VoiEmLaMaiMai.mp3")
s5.url.attach(io: File.open("app/assets/Songs/TrangDuoiChanMinh.mp3"), filename: "TrangDuoiChanMinh.mp3")
s6.url.attach(io: File.open("app/assets/Songs/NgaiNgung.mp3"), filename: "NgaiNgung.mp3")