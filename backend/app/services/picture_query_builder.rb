class PictureQueryBuilder

  def self.build(csv_file_id:, page: 1, per_page: 10, grayscale: false)
    new(csv_file_id: csv_file_id, page: page, per_page: per_page, grayscale: grayscale).build
  end

  attr_reader :csv_file_id, :page, :per_page, :grayscale

  def initialize(csv_file_id:, page: 1, per_page: 10, grayscale: false)
    @csv_file_id = csv_file_id
    @page = page.to_i
    @per_page = per_page
    @grayscale = grayscale
  end

  def build
    pictures = Picture.where(csv_file_id: @csv_file_id).paginate(page: @page, per_page: @per_page).pluck(:url)
    pictures = pictures.map { |url| url.concat("?grayscale") } if grayscale
    
    # TODO: find out why pagination isn't working
    { images: pictures, batch_id: @csv_file_id, data_in_next_set: next_page_count > 0, page: @page}
  end

  private

  def next_page_count
    data = Picture.where(csv_file_id: @csv_file_id).paginate(page: @page + 1, per_page: @per_page)
    data.reload.size
  end
end