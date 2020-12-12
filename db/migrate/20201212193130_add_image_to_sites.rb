class AddImageToSites < ActiveRecord::Migration[6.0]
  def change
    add_column :sites, :image, :string
  end
end
