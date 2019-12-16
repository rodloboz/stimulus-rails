class Artist < ApplicationRecord
  has_many :albums, dependent: :destroy
end
