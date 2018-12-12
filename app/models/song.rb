class Song < ApplicationRecord
  validates :title, :album_id, :artist_id, presence: true

  belongs_to :album
  belongs_to :artist
end
