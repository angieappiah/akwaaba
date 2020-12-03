Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
     resources :photos
     resources :sites
      # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
     # get '/test', to: 'application#test'
    end
  end
end
