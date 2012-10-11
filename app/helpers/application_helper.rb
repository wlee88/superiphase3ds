module ApplicationHelper
	def generate_bg_name
		 asset_path "bg#{rand(0..8)}.jpg"
	end

	def generate_iPhase_quote
		quotes = ['Oh God... ka', 'Godka: Drink Different', 'Godka: whats the best that could happen']
		quotes[rand(0...quotes.size)]
	end
end
