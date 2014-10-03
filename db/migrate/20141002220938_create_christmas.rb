class CreateChristmas < ActiveRecord::Migration
  def change
    create_table :christmas do |t|

      t.timestamps
    end
  end
end
