# furry-octo-succotash

## Installation
```
npm --save install
```

## Run
```
gulp
```

Expected `critical.css` contents:
```
@font-face {
  font-family: FontAwesome;
  src: url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.eot?v=4.7.0);
  src: url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0)
    format('embedded-opentype'),
    url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.woff2?v=4.7.0)
    format('woff2'),
    url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),
    url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),
    url(https://hom3chuk.github.io/furry-octo-succotash/styles/some/deep/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');
  font-weight: 400;
  font-style: normal;
}

.test-header {
  font-family: FontAwesome;
}
```

Actual `critical.css` contents:
```
@font-face {
  font-family: FontAwesome;
  src: url(../fonts/fontawesome-webfont.eot?v=4.7.0);
  src: url(../fonts/fontawesome-webfont.eot?#iefix&v=4.7.0)
    format('embedded-opentype'),
    url(../fonts/fontawesome-webfont.woff2?v=4.7.0)
    format('woff2'),
    url(../fonts/fontawesome-webfont.woff?v=4.7.0) format('woff'),
    url(../fonts/fontawesome-webfont.ttf?v=4.7.0) format('truetype'),
    url(../fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular) format('svg');
  font-weight: 400;
  font-style: normal;
}

.test-header {
  font-family: FontAwesome;
}
```
Which, when inlined at `index.html`, break fonts URLs (see [index-with-critical.html](https://hom3chuk.github.io/furry-octo-succotash/index-with-critical.html)).