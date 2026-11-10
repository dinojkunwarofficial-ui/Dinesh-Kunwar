# Actor Portfolio: Prototype

A simple website made of plain HTML, CSS and JavaScript. No installs, no backend, no paid services.

## What is in the folder
```
index.html          page structure (the sections) + title/share tags in <head>
css/styles.css      colours, fonts, layout
js/data.js          ALL your content: name, bio, films, photos, videos, awards, contact
js/script.js        the logic (filters, search, popups). You rarely need to edit it.
assets/images/      hero-portrait.webp, about-portrait.webp, gallery/
assets/posters/     movie, show and music video posters
```

## Run it on your computer
Unzip, then double-click `index.html`. (Internet is only needed for the Google Fonts and YouTube.)

## Change things (almost always in `js/data.js`)
| I want to... | Do this |
|---|---|
| Change name, intro, biography | Edit the `SITE` block |
| Add a movie / TV show / music video | Copy one line in `PRODUCTIONS`, paste, edit. Use a unique `id` and the same `category` spelling each time |
| Remove the sample entries | Delete the lines that say `sample: true` |
| Replace the hero photo | Save it as `assets/images/hero-portrait.webp` (same name). About photo: `about-portrait.webp` |
| Add a poster | Save in `assets/posters/`, put the path in the production's `poster` |
| Add a gallery photo | Save in `assets/images/gallery/`, add a line in `GALLERY` |
| Add the showreel | Paste the YouTube ID into `SITE.showreel` |
| Add other videos | Add lines in `VIDEOS` |
| Add an award or press link | Fill `AWARDS` or `PRESS` (empty = section hidden) |
| Set email and social links | `SITE.email`, `SITE.socials` |
| Show credit counts | `SITE.showHighlights = true` (only when your list is complete) |
| Change the browser tab title and share preview | Edit the `<title>` and `<meta>` lines at the top of `index.html` |
| Change colours or fonts | Top of `css/styles.css` (`:root`) |
| Remove a whole section | Delete its `<section>` in `index.html` and its link in the menu |

Tip: save photos as WebP and keep each under about 300 KB (free converter: squoosh.app).

## Publish for free
**Netlify (easiest):** go to app.netlify.com/drop and drag the whole project folder in. You get a free web address. Custom domain: Site settings, then Domain management.

**GitHub Pages:** create a repository, upload all the files, open Settings, then Pages, choose branch `main` and folder `/ (root)`, and save. Custom domain: Settings, Pages, Custom domain, then add the DNS records your domain seller shows you.

After publishing, put the real web address in the `canonical` and `og:image` lines in `index.html`.
