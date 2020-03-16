Rails.application.routes.draw do
  resources :plants
  resources :gardens
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :gardens do
  	resources :plants
  end
end
