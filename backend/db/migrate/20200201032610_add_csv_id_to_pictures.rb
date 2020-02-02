class AddCsvIdToPictures < ActiveRecord::Migration[5.1]
  def change
  	add_reference :pictures, :csv_file, index: true
  end
end
