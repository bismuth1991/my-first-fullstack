class Artist < ApplicationRecord
  validates :name, presence: true

  has_many :songs

  has_one_attached :picture
end
