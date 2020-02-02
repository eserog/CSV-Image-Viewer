require "csv"

class CsvParser
	def self.parse(csv)
		new(csv).parse
	end

	attr_reader :csv

	def initialize(csv)
		@csv = csv
	end

	def parse
		file_name = @csv.original_filename
		parsed_csv = CSV.parse(@csv.tempfile).flatten

		{pictures: parsed_csv, file_name: file_name}
	end
end