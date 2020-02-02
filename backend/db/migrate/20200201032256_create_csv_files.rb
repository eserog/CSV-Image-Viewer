class CreateCsvFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :csv_files do |t|
      t.string :csv_file_name
      t.timestamps
    end
  end
end
