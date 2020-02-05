require "rails_helper"
require "spec_helper"

RSpec.describe Picture do
	describe "#extract_dimensions" do
		context "given an endpoint with an id, width, and height specified" do
			it "saves the dimensions to the appropriate fields" do
				csv = CsvFile.create(csv_file_name: "test file")
				url = "https://picsum.photos/id/639/127/200"
				csv.pictures << Picture.create(url: url) # should create an active record object, but for some reason it isn't
				picture = csv.pictures.last

				expect(picture.reload.width).to eq(127)
				expect(picture.reload.height).to eq(200)
			end
		end	
	end
end