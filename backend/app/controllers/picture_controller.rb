class PictureController < ApplicationController
  def show_batch
  	results = PictureQueryBuilder.build(
      csv_file_id: picture_params[:csv_file_id],
      page: picture_params[:page] || 1,
      per_page: 25,
      grayscale: picture_params[:grayscale]
    )

    render json: results
  end

  private

  def picture_params
    params.permit(:csv_file_id, :page, :grayscale)
  end
end
