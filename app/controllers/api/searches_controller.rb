class Api::SearchesController < ApplicationController
  def search
    if params[:query].present?
      songs = Song.where('title ~ ?', params[:query])
      artist = Artist.where('name ~ ?', params[:query]).limit(3)
      albums = Album.where('name ~ ?', params[:query]).limit(3)

      @search_result = [songs, artists, albums]
    else
      @search_result = []
    end
  end
end
