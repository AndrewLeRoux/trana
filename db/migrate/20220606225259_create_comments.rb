class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :commented_user, null: false, foreign_key: {to_table: :users}
      t.belongs_to :commented_post, null: false, foreign_key: {to_table: :posts}

      t.timestamps
    end
  end
end
