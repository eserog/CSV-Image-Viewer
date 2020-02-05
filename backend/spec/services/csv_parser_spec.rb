require "rails_helper"
require "spec_helper"

RSpec.describe CsvParser do
	describe "#parse" do
		context "Given a CSV file" do
			it "returns a hash of urls and the file name" do
				file = fixture_file_upload('files/test.csv', 'text/csv')
				parser = CsvParser.new(file)

				expect(parser.parse).to eq({
					pictures: [
						"https://picsum.photos/id/12/300/200",
						"https://picsum.photos/id/434/300/200"
					],
					file_name: "test.csv"
				})
			end
		end	
	end
end