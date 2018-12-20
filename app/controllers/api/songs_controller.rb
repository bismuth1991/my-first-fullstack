class Api::SongsController < ApplicationController

  def index 
    @songs = Song
      .with_attached_url
      .includes(:artist, album: [cover_image_attachment: :blob])
      .limit(20)
      .offset(params[:offSet].to_i).order(:id)

    render :index
  end 

end
