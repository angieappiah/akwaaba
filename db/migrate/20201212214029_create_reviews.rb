class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :comments
      t.belongs_to :site

      t.timestamps
    end
  end
end
