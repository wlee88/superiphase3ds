module ApplicationHelper
	def generate_bg_name
		 asset_path "bg#{rand(0..8)}.jpg"
	end
end
