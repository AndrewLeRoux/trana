class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :description
      t.decimal :distance
      t.integer :hours
      t.integer :minutes
      t.integer :seconds
      t.decimal :pace
      t.belongs_to :owner, null: false, foreign_key: {to_table: :users}
      t.belongs_to :tag, null: false, foreign_key: true

      t.timestamps
    end
  end
end
