class Song < ApplicationRecord
  validates :title, presence: true

  belongs_to :album
  belongs_to :artist

  has_one_attached :url
end
