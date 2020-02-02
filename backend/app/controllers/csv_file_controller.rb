class CsvFileController < ApplicationController
	def create
    if csv_params.present?
      data = CsvParser.parse(csv_params[:file])

      if data[:pictures].present? && data[:file_name].present?
        form = CsvForm.new(data[:pictures], data[:file_name])

        if form.save
          redirect_to show_batch_path(csv_file_id: form.csv_file.id, page: 1, grayscale: csv_params[:grayscale])
        else
          render json: { code: 500, message: "something went wrong"}
        end
      else
        render json: { code: 500, message: "something went wrong parsing the file"}
      end      
    else
      render json: { code: 500, message: "not a valid csv"}
    end
	end

	private

	def csv_params
    params.permit(:file, :id, :grayscale)
	end

end
