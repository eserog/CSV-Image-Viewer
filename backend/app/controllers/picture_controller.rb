class PictureController < ApplicationController

  NULLABLE_VALUES = ["null", "0"]

  def show_batch
    binding.pry
  	results = PictureQueryBuilder.build(
      csv_file_id: picture_params[:csv_file_id],
      page: picture_params[:page] || 1,
      per_page: 25,
      grayscale: picture_params[:grayscale],
      width: picture_params[:width],
      height: picture_params[:height]
    )

    render json: results
  end

  private

  def picture_params
    new_params = params.permit(:csv_file_id, :page, :grayscale, :width, :height)

    new_params.delete(:width) if NULLABLE_VALUES.include?(new_params[:width])
    new_params.delete(:height) if NULLABLE_VALUES.include?(new_params[:height])
    new_params.delete(:grayscale) if NULLABLE_VALUES.include?(new_params[:grayscale])
    new_params
  end
end
