class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.where('user_id = ?', current_user.id)
    render :index
  end

  def show
    @playlist = Playlist.find(params[:id])
    render :show
  end

  def create
    @playlist = Playlist.new(playlist_params)

    if @playlist.save
      render :show
    else
      render json: @playlist.errors.full_messagaes, status: 422
    end
  end

  def patch
    @playlist = Playlist.find(params[:id])

    if @playlist.update(playlist_params)
      render :show
    else
      render json: @playlist.errors.full_messagaes, status: 422
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy

    render :show
  end

  private 
  
  def playlist_params
    params.require(:playlist).permit(:name)
  end
end
