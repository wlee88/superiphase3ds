require 'spec_helper'

describe "StaticPages" do
  describe "Home" do
    
    it "should have title Super iPhase 3DS" do
    	visit home_path
    	page.should have_selector('title', text: "Super iPhase 3DS")
    end
  end
end
