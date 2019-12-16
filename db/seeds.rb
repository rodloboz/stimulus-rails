require 'open-uri'

puts 'Deleting db...'
[Album, Artist].each(&:destroy_all)

puts 'Creating artists...'
URL = 'https://raw.githubusercontent.com/rodloboz/lw-fullstack/master/airtunes/data/airtunes.json'

response = open(URL).read

artists = JSON.parse(response)

artists.each do |artist|
  attrs = artist.except('albums')
  albums = artist.delete('albums')
  Artist.create!(artist).tap do |artist|
    artist.albums.create!(albums)
  end
end

puts "Created #{Artist.count} artists."

puts 'Finished!'
