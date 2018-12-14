class Album < ApplicationRecord
  validates :name, presence: true

  has_many :songs

  has_one_attached :cover_image
end
