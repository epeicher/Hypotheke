run lambda { |env| [200, {'Content-Type'=>'text/plain'}, File.open('public/QuicktosTickets.html', File::RDONLY)]}