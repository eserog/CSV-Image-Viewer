Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/pictures/:csv_file_id/:page", to: "picture#show_batch", as: "show_batch"
  resources :csv_file
end
