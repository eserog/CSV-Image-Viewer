class Picture < ApplicationRecord
	belongs_to :csv_file

	before_save :extract_dimensions

	GRAYSCALE = "?grayscale"

	private

	def extract_dimensions
		parsed_url = url.split("/id/")
    	url_params = parsed_url.last.split("/")
    	
      if url_params.length == 3
        self.width = url_params[1]
        self.height = url_params[2]
      end
	end
end
