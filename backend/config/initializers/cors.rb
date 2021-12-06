Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'sign-ai.as.r.appspot.com'
      resource '*', headers: :any, methods: [:get, :post, :put, :delete]
    end
  end

