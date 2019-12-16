class CreateAlbums < ActiveRecord::Migration[6.0]
  def change
    create_table :albums do |t|
      t.references :artist, null: false, foreign_key: true
      t.string :title
      t.string :image_url

      t.timestamps
    end
  end
end
