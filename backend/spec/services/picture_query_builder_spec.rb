require "rails_helper"
require "spec_helper"

RSpec.describe PictureQueryBuilder do
	describe "#build" do

		before :each do
			@csv_file = CsvFile.create(csv_file_name: "test file")
			@csv_file.pictures << Picture.create(url: "https://picsum.photos/id/12/150/200")
			@csv_file.pictures << Picture.create(url: "https://picsum.photos/id/434/300/300")
		end

		context "Given no params" do
			it "returns a hash of urls, the batch_id, if there are items on the next page and the current page" do
				urls = @csv_file.pictures.pluck(:url)

				expect(PictureQueryBuilder.build(csv_file_id: @csv_file.id)).to eq({
					images: urls, batch_id: @csv_file.id, data_in_next_set: false, page: 1
				})
			end
		end

		context "given a grayscale option" do
			it "returns back grayscale images" do
				urls = @csv_file.pictures.pluck(:url)
				urls.map{|url| url.concat(Picture::GRAYSCALE)}

				expect(PictureQueryBuilder.build(csv_file_id: @csv_file.id, grayscale: true)).to eq({
					images: urls, batch_id: @csv_file.id, data_in_next_set: false, page: 1
				})
			end
		end

		context "given mass amounts of data" do
			it "will return if there is data in the next page" do
				500.times {|x| @csv_file.pictures << Picture.create(url: "https://picsum.photos/id/12/300/200") }

				urls = @csv_file.pictures.reload.pluck(:url)

				expect(PictureQueryBuilder.build(csv_file_id: @csv_file.id)[:data_in_next_set]).to eq(true)
			end
		end

		context "Given no params" do
			it "returns a hash of urls, the batch_id, if there are items on the next page and the current page" do
				urls = @csv_file.pictures.pluck(:url)

				expect(PictureQueryBuilder.build(csv_file_id: @csv_file.id, width: 150)).to eq({
					images: [urls.first], batch_id: @csv_file.id, data_in_next_set: false, page: 1
				})
			end
		end

		context "Given no params" do
			it "returns a hash of urls, the batch_id, if there are items on the next page and the current page" do
				urls = @csv_file.pictures.pluck(:url)

				expect(PictureQueryBuilder.build(csv_file_id: @csv_file.id, height: 300)).to eq({
					images: [urls.last], batch_id: @csv_file.id, data_in_next_set: false, page: 1
				})
			end
		end
	end
end