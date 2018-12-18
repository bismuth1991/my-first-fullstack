class Api::PlaylistsController < ApplicationController
  def index
    @playlist = Playlist.where('user_id = ?', current_user.id)
    render :index
  end

  def show

  end

  def create

  end

  def patch

  end

  def destroy

  end
end
