class CsvForm
  include ActiveModel::Model

  attr_accessor :pictures, :csv_file_name, :csv_file
  validates :pictures, :csv_file_name, presence: true

  def initialize(pictures, csv_file_name)
    @pictures = pictures
    @csv_file_name = csv_file_name
  end

  def save
    return false if invalid?

    @csv_file = CsvFile.create(csv_file_name: @csv_file_name)
    @pictures.each { |picture| csv_file.pictures << Picture.create(url: picture) }
    true
  end
end