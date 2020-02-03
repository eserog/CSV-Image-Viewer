class Picture < ApplicationRecord
	belongs_to :csv_file


	def get_dimensions
		parsed_url = url.split("/id/")
    params = parsed_url.last.split("/")
    
    params.length == 3 ? { width: params[1], height: params[2] }.with_indifferent_access  : nil
	end
end
