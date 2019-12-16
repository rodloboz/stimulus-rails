// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'styles/application.scss';
import 'vendor';
import 'channels';

document.addEventListener('turbolinks:load', () => {
  console.log('Hello from webpacker!')
});
