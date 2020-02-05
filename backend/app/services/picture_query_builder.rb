class PictureQueryBuilder
  def self.build(csv_file_id:, page: 1, per_page: 10, grayscale: false, width: nil, height: nil)
    new(
      csv_file_id: csv_file_id,
      page: page,
      per_page: per_page,
      grayscale: grayscale,
      width: width,
      height: height
    ).build
  end

  attr_accessor :filtered_pictures
  attr_reader :csv_file_id, :page, :per_page, :grayscale, :width, :height

  def initialize(csv_file_id:, page: 1, per_page: 10, grayscale: false, width: nil, height: nil)
    @csv_file_id = csv_file_id
    @page = page.to_i
    @per_page = per_page
    @grayscale = grayscale
    @width = width
    @height = height
    @filtered_pictures = nil
  end

  def build
    @filtered_pictures = Picture.where(csv_file_id: @csv_file_id).paginate(page: @page, per_page: @per_page)
    @filtered_pictures = @filtered_pictures.where(width: @width) if @width.present?
    @filtered_pictures = @filtered_pictures.where(height: @height) if @height.present?
    

    image_urls = @filtered_pictures.map(&:url)
    image_urls = image_urls.map { |url| url.concat("?grayscale") } if @grayscale
    
    { images: image_urls, batch_id: @csv_file_id, data_in_next_set: next_page_count > 0, page: @page}
  end

  private

  def next_page_count
    data = @filtered_pictures.where(csv_file_id: @csv_file_id).paginate(page: @page + 1, per_page: @per_page)
    data.reload.size
  end
end