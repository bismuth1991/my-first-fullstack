class Song < ApplicationRecord
  validates :title, :album_id, :artist_id, presence: true
end
