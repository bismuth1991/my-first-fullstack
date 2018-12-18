class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name, unique: true
      t.integer :user_id

      t.timestamps
    end

    add_index :playlists, :user_id, unique: true
  end
end
