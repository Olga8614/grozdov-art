# Ephemeral Landscapes of the Salton Sea

Static photo-gallery site prepared for `grozdov.art/salton/`.

## Files
- `index.html` — page structure and project statement
- `style.css` — layout, gallery and full-screen viewer
- `gallery.js` — photograph list, captions and navigation
- `images/` — full-size supplied JPG files
- `thumbs/` — optimized gallery thumbnails

## Add a photograph
1. Put the full-size JPG in `images/`.
2. Put a smaller copy in `thumbs/`.
3. Add one object to the `photos` array in `gallery.js`.
4. For a landscape image that should span two square cells, add `wide: true`.

## Publishing
If `grozdov.art` is already served from a GitHub Pages repository, copy the entire
`salton` folder into the root of that site repository and push it. The intended URL
will then be `/salton/`.

The current five image titles are working titles and can be changed in `gallery.js`.
