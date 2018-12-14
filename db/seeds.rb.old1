# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first

# Artists
artists = [
  sarah_morrau = Artist.new(name: "Sarah Morrau"),
  bill_evans = Artist.new(name: "Bill Evens"),
  oscar_peterson = Artist.new(name: "Oscar Peterson"),
  sonny_criss = Artist.new(name: "Sonny Criss"),
  chris_botti = Artist.new(name: "Chris Botti"),
  dave_brubeck_quartet = Artist.new(name: "Dave Brubeck Quartet"),
  bill_evans_trio = Artist.new(name: "Bill Evans Trio"),
  paul_desmond = Artist.new(name: "Pau Desmond"),
  harrison_craig = Artist.new(name: "Harrison Craig"),
  rod_steward = Artist.new(name: "Rod Steward"),
  woongsan = Artist.new(name: "Woongsan"),
  nikki_yanovsky = Artist.new(name: "Nikki Yanovsky"),
  michael_bub = Artist.new(name: "Michael Bub"),
  diana_krall = Artist.new(name: "Diana Krall"),
  lady_gaga = Artist.new(name: "Lady Gaga"),
  ariana_grande = Artist.new(name: "Ariana Grande"),
  cher_lloyd = Artist.new(name: "Cher Lloyd"),
  halsey = Artist.new(name: "Halsey"),
]

#Albums
albums = [
  have_a_good_night = Album.new(name: "Have A Good Night"),
  jazz_for_sleep = Album.new(name: "Jazz For Sleep"),
  a_star_is_born = Album.new(name: "A Star Is Born"),
  sweetener = Album.new(name: "Sweetener"),
  none_of_my_business_single = Album.new(name: "None Of My Business (single)"),
  thank_u_next_single = Album.new(name: "Thank U Next"),
  without_me_single = Album.new(name: "Without Me (single)"),
]

artists.each do |artist|
  artist.save!
end

albums.each do |album|
  album.save!
end

# Songs
songs = [
  both_sides_now = Song.new(title: "Both Sides Now", album_id: have_a_good_night.id, artist_id: sarah_morrau.id),
  dream_a_little_of_me = Song.new(title: "Dream A Little Of Me", album_id: have_a_good_night.id, artist_id: harrison_craig.id),
  im_in_the_mood_for_love = Song.new(title: "I'm In The Mood For Love", album_id: have_a_good_night.id, artist_id: rod_steward.id),
  over_the_rainbow = Song.new(title: "Over The Rainbow", album_id: have_a_good_night.id, artist_id: nikki_yanovsky.id),
  misty_blue = Song.new(title: "Misty Blue", album_id: have_a_good_night.id, artist_id: woongsan.id),
  put_your_head_on_my_shoulder = Song.new(title: "Put Your Head On My Shoulder", album_id: have_a_good_night.id, artist_id: michael_bub.id),
  sorry_seems_to_be_the_hardest_word = Song.new(title: "Sorry Seems To Be The Hardest Word", album_id: have_a_good_night.id, artist_id: diana_krall.id),
  peace_piece = Song.new(title: "Peace Piece", album_id: jazz_for_sleep.id, artist_id: bill_evans.id),
  in_your_own_sweet_way = Song.new(title: "In Your Own Sweet Way", album_id: jazz_for_sleep.id, artist_id: oscar_peterson.id),
  god_bless_the_child = Song.new(title: "God Bless The Child", album_id: jazz_for_sleep.id, artist_id: sonny_criss.id),
  one_for_my_baby = Song.new(title: "One For My Baby", album_id: jazz_for_sleep.id, artist_id: chris_botti.id),
  i_hear_a_rhapsody = Song.new(title: "I Hear A Rhapsody", album_id: jazz_for_sleep.id, artist_id: dave_brubeck_quartet.id),
  my_foolish_heart = Song.new(title: "My Foolish Heart", album_id: jazz_for_sleep.id, artist_id: bill_evans_trio.id),
  emily = Song.new(title: "Emily", album_id: jazz_for_sleep.id, artist_id: paul_desmond.id),
  always_remember_us_this_way = Song.new(title: "Always Remember Us This Way", album_id: a_star_is_born.id, artist_id: lady_gaga.id),
  god_is_a_woman = Song.new(title: "Good Is A Woman", album_id: sweetener.id, artist_id: ariana_grande.id),
  none_of_my_business = Song.new(title: "None Of My Business", album_id: none_of_my_business_single.id, artist_id: cher_lloyd.id),
  thank_u_next = Song.new(title: "Thank U Next", album_id: thank_u_next_single.id, artist_id: ariana_grande.id),
  without_me = Song.new(title: "Without Me", album_id: without_me_single.id, artist_id: halsey.id),
]

songs.each do |song|
  song.save!
end