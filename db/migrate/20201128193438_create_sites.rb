class CreateSites < ActiveRecord::Migration[6.0]
  def change
    create_table :sites do |t|
      t.string :name
      t.string :region
      t.string :description
      t.integer :likes, default: 0

      t.timestamps
    end
  end
end
