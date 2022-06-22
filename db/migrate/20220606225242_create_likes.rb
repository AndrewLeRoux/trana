class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.belongs_to :liked_user, null: false, foreign_key: {to_table: :users}
      t.belongs_to :liked_post, null: false, foreign_key: {to_table: :posts}

      t.timestamps
    end
  end
end
