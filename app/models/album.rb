class Album < ApplicationRecord
  validates :name, presence: true

  has_many :songs
end
