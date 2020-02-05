class AddDimensionsToPicture < ActiveRecord::Migration[5.1]
  def change
  	add_column :pictures, :width, :integer
  	add_column :pictures, :height, :integer
  end
end
