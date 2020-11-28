class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string :url
      t.string :reviews
      t.belongs_to :site

      t.timestamps
    end
  end
end
