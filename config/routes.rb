Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :songs, only: [:index] do 
      get "search", on: :collection
    end 
  end 
  
  root to: 'static_pages#root'
end
