class Api::SongsController < ApplicationController

  def index 
    @songs = Song.includes(:artist, :album).limit(10).offset(params[:offSet].to_i)
    render :index
  end 

end
