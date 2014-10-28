class PagesController < ApplicationController
  def home
  end

  def about
  end

  def temp
  end

  def pins
  end

  def ajax
  	render partial: 'ajax', formats: :html
  end

end