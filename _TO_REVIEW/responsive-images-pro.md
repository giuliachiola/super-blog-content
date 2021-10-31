---
title: Responsive images like a pro
abstract: 
quote: 
quoteAuthor: 

date: 2021-08-25
crossPostDEV: 
crossPostHashnode: 
mainTag: 
tags:
  - 
  - 
id: 
---

# Responsive images

Responsive images are handled with different HTML tags and attributes, depending on different use cases.

To pick the best implementation, and before starting to code, ask yourself:

- Are the images created dynamically by the user or statically by a design team?
- If the width and height of the image are changed disproportionately, would that affect the quality?
- Are all the images rendered at the same width and height? When rendered, should they have a specific aspect ratio or one that’s entirely different?
- What must be considered when presenting the images on different viewports?

^^ https://css-tricks.com/planning-for-responsive-images/

## 📚 Table of Contents

- [Tag picture](#tag-%3Cpicture%3E)
- [Tag source](#tag-%3Csource%3E)
- [Tag img](#tag-%3Cimg%3E)
- [Attribute src](#attribute-src)
- [Attribute srcset](#attribute-srcset)
- [Attribute sizes](#attribute-sizes)

## Tag `<picture>`

> The HTML `<picture>` element contains zero or more `<source>` elements and one `<img>` element to provide versions of an image for different display/device scenarios. The browser will consider each child `<source>` element and choose the best match among them; if no matches are found, the URL of the `<img>` element's src attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.

[MDN documentation - picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)

### TL;DR

With `<picture>` we **instruct the browser to use a specific image in a specific responsive scenario**. The developer decides.

Notes:

- If the browser understands `<picture>`, it also understands `srcset`
- `<picture>` is used if there are different editorial cuts in different viewports, usually
  - due to art direction: the designer picks a specific crop or alternative image for a specific viewport (for instance, using a closeup of a person on mobile and a wide angle view on desktop)
  - or if the images have different proportions, for example a landscape format in mobile and a portrait format in desktop
- The browser reads the `source` images **in order**: it takes the first source that matches the media query correctly and the first file resource it understands (based on MIME type support). For instance, for the same media query I can have one `source` referencing a _WebP_ resource, and one referencing a _JPG_ resource. If the browser doesn't understand the _WebP_ format, it skips it and examines the next `source` definition. This is why `source` tags must be in order: first, modern image formats, then widely supported ones (fallbacks). Only one source is ever downloaded.

The tag `<picture>` can include a `<img>` tag. The `img` serves both as a fallback for older browsers and for any case not covered by media queries specified in `source` tags ([See tag source below](#tag-%3Csource%3E)).


```html
<picture>
  <img srcset="../images/component-img-vertical.jpg" alt="…">
</picture>
```

```html
<picture>
  <source srcset="../images/component-img-vertical.jpg" media="(min-width: 1000px)">
  <source srcset="../images/component-img-horizontal.jpg" media="(min-width: 600px)">
  <img srcset="../images/component-img-custom.jpg" alt="…">
</picture>
```

### _Supporting <picture> in Internet Explorer 9_

While most versions of IE (even older ones!) can use the `img` fallback inside a `picture` element, ignoring tags they don't support, IE9 has a little conflict to work around. To support `picture` on IE9, you will need to wrap a video element around source elements in your picture tag. You can do this using conditional comments, like so:

```html
<picture>
  <!--[if IE 9]><video style="display: none;"><![endif]-->
  <source srcset="../images/component-img-ratio-16-9.jpg" media="(min-width: 1000px)">
  <source srcset="../images/component-img-ratio-16-10.jpg" media="(min-width: 600px)">
  <!--[if IE 9]></video><![endif]-->
  <img srcset="../images/component-img-custom.jpg" alt="…">
</picture>
```

See [Supporting picture in Internet Explorer 9](https://scottjehl.github.io/picturefill/examples/demo-02.html)

### Tag `<source>`

> The HTML `<source>` element specifies multiple media resources for the `<picture>`, the `<audio>` element, or the `<video>` element. It is an empty element, meaning that it has no content and does not have a closing tag. It is commonly used to serve the same media content in multiple formats supported by different browsers.

[MDN documentation - source](https://developer.mozilla.org/en/docs/Web/HTML/Element/source)

```xml
<source srcset="../images/component-img" media="(min-width: 800px)">
```
- For responsive images, `source` is used inside a `<picture>` element
- When `source` is placed inside a `picture` element, it only supports the `srcset` attribute, but not `src`
- The browser will use the first `source` whose media query **and** image type matches
- If the browser does not understand the `srcset` attribute, or if no media query matches, the browser will use the fallback image declared in the `img` tag.

Source also supports the `type` attribute, to specify the MIME type of the resource listed. This can be used to specify multiple image formats:

📚 Example declaring _WebP_ and _JPG_ for the same media query:

```html
<picture>
  <source type="image/webp" media="(min-width: 900px)" srcset="../images/component-img.webp">
  <source media="(min-width: 900px)" srcset="../images/component-img-vertical.jpg">
  <source media="(min-width: 750px)" srcset="../images/component-img-horizontal.jpg">
  <img src="../images/component-img.jpg" alt="...">
</picture>
```

## Tag `<img>`

> The HTML `<img>` element embeds an image into the document. It is a replaced element. <br> Responsive image hints using sizes and srcset (see also the <picture> element, and our Responsive images tutorial).

[MDN documentation - img](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

It is used:

- to specify responsive images that have the same aspect ratio across all viewports
- inside a `picture` element, as a fallback for browsers that do not understand `picture` + `srcset` or
- inside a `picture` element, as a fallback when no `source` matches

## Attribute `src`

> The image URL. This attribute is mandatory for the `<img>` element. On browsers supporting srcset, src is treated like a candidate image with a pixel density descriptor 1x unless an image with this pixel density descriptor is already defined in srcset, or unless srcset contains 'w' descriptors.

[MDN documentation - src](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/src)

```xml
<img src="/static/card/sport-416x261.jpg" alt="" />
```

- It can have only ONE path
- For responsive images, use the largest cut to cover all cases at 1x. This is usually the 1x desktop cut, because in this viewport components are usually bigger in size, although this is not always true. For example, cards can have their image at 100% of the card width, but on desktop they are placed in the grid, so they are displayed at a smaller size. On mobile they take the full viewport width and are therefore bigger.

📚 Examples

In the set of cards we have the same card in different templates in different viewports: we need to analyze _all templates_ and _all viewports_ to find the bigger image size used, and use it as the `src` resource

| Viewport | Design required |
|----------|-----------------|
| desktop  | 314x197         |

![card-desktop-01](/attachments/card-desktop-01.png)

| Viewport | Design required |
|----------|-----------------|
| desktop  | 203x126         |

![card-desktop-02](/attachments/card-desktop-02.png)

| Viewport | Design required |
|----------|-----------------|
| tablet   | 416x259         |

![card-tablet-01](/attachments/card-tablet-01.png)

Putting all the required design sizes together, we see that the biggest img size is 416x259. This is the cut we will use for the `src` attribute.

| Viewport | Design required |
|----------|-----------------|
| desktop  | 314x197         |
| desktop  | 203x126         |
| tablet   | 416x259         |
| ....     | ...             |


## Attribute `srcset`

> A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use.
> Each string is composed of:
>
> - a URL to an image,
> - optionally, whitespace followed by one of:
>
>   * A width descriptor, or a positive integer directly followed by `w`. The width descriptor is divided by the source size given in the sizes attribute to calculate the effective pixel density.
>   * A pixel density descriptor, which is a positive floating point number directly followed by `x`.<br>
> If no descriptor is specified, the source is assigned the default descriptor: 1x.

[MDN documentation - srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset)

The browser picks the most optimal srcset  _according to its own criteria_. This technique is called **resolution switching** in responsive images. Thanks to resolution switching, if the browser window is resized, the browser then checkes again the srcset definition and optionally downloads an image that fits best for the current viewport. We use this technique to provide smaller images for small screens (good on CPU and RAM) and larger images for larger viewports.

- The order of declaration of the `srcset` resources is not important: the browser reads _all the cuts_ and chooses the most suitable one according to its parameters and to the `sizes` available
- The `srcset` attribute can be used with:
  - a number that represents the width of the image, followed by `w`. This is called a *width descriptor*. We're telling the browser how large is the image we are providing
  - OR (important: exclusive choice!) as a *pixel density descriptor*, specifying `1x`, `2x` and `nx`
- It is wrong to mix width descriptor and pixel density descriptors in the same `srcset` attribute.
- Duplicate descriptors (for instance, two sources in the same srcset which are both described with `2x`) are also invalid.
- The user agent selects any one of the available sources at its discretion. This provides them with significant leeway to tailor their selection based on things like user preferences or bandwidth conditions.
- The browser chooses only in respect to the width parameter, so for example we cannot provide a _WebP_ and a _JPG_ resource for the same media condition

Using `<img>` with `srcset`:

- browsers that **understand** `srcset` ignore `src` and *use* `srcset`
- browsers that **do not** understand `srcset` ignore `srcset` and *use* `src`

📚 Example `<picture>` + `scrset` using **density descriptors**

```html
<picture>
  <source
    media="(max-width: 767px)"
    srcset="/static/hero/sport-375x235.jpg 1x, /static/hero/sport-750x470.jpg 2x">
  <source
    media="(min-width: 768px) and (max-width: 1023px)"
    srcset="/static/hero/sport-768x481.jpg 1x, /static/hero/sport-1536x962.jpg 2x">
  <source
    media="(min-width: 1024px)"
    srcset="/static/hero/sport-567x355.jpg 1x, /static/hero/sport-1134x710.jpg 2x">
  <img alt="..." src="/static/hero/sport-567x355.jpg 1x">
</picture>
```

| Viewport                  | Display density | Browser _should_ load image |
|---------------------------|-----------------|-----------------------------|
| viewport < 768px          | 1x              | 375x235                     |
| viewport < 768px          | 2x              | 750x470                     |
| 768px < viewport < 1024px | 1x              | 768x481                     |
| 768px < viewport < 1024px | 2x              | 1536x962                    |
| viewport > 1024px         | 1x              | 567x355                     |
| viewport > 1024px         | 2x              | 1134x710                    |

_Fallback image_

| Viewport | Display density | Browser loads image |
|----------|-----------------|---------------------|
| all      | all             | 567x355             |

[Srcset density webkit demo](https://webkit.org/demos/srcset/)

📚 Example `<picture>` + `scrset` using **width descriptors**

```xml
<img srcset="/static/card/sport-314x197.jpg 314w,
      /static/card/sport-375x235.jpg 375w,
      /static/card/sport-416x261.jpg 416w,
      /static/card/sport-628x394.jpg 628w,
      /static/card/sport-750x470.jpg 750w,
      /static/card/sport-832x522.jpg 832w">
```

indicates that the image that will be loaded will have a size of 314px so the browser even before downloading the image already knows how large it will be.


📚 Example with srcset and **density descriptors**:

```xml
<img
  src="/static/card/sport-416x261.jpg"
  srcset="/static/card/sport-416x261.jpg 1x,
          /static/card/sport-832x522.jpg 2x,
          /static/card/sport-1248x783.jpg 3x,
          /static/card/sport-1664x1044.jpg 4x">
```

| Viewport | Display density | Image available | Max image size | Browser loads image                   |
|----------|-----------------|-----------------|----------------|---------------------------------------|
| all      | 1x              | 416x261         | not declared   | puntually the one specified 416x261   |
| all      | 2x              | 832x522         | not declared   | puntually the one specified 832x522   |
| all      | 3x              | 1248x783        | not declared   | puntually the one specified 1248x783  |
| all      | 4x              | 1664x1044       | not declared   | puntually the one specified 1664x1044 |

📚 Example with `src` fallback and `srcset` images:

```xml
<img
  alt="Houston vince a Toronto, perdono OKC e Portland."
  src="/static/card/sport-416x261.jpg"
  srcset="/static/card/sport-314x197.jpg 314w,
          /static/card/sport-375x235.jpg 375w,
          /static/card/sport-416x261.jpg 416w,
          /static/card/sport-628x394.jpg 628w,
          /static/card/sport-750x470.jpg 750w,
          /static/card/sport-832x522.jpg 832w">
```

| Viewport | Display density | Image available | Max image size              | Browser loads image            |
|----------|-----------------|-----------------|-----------------------------|--------------------------------|
| all      | all             | 314x197         | 314px (declared using 314w) | we don't know at the beginning |
| all      | all             | 375x235         | 375px (declared using 375w) | we don't know at the beginning |
| all      | all             | 416x261         | 416px (declared using 416w) | we don't know at the beginning |
| all      | all             | 628x394         | 628px (declared using 628w) | we don't know at the beginning |
| all      | all             | 750x470         | 750px (declared using 750w) | we don't know at the beginning |
| all      | all             | 832x522         | 832px (declared using 832w) | we don't know at the beginning |

With `img` fallback loads

| Viewport | Display density | Image available | Max image size | Browser loads image |
|----------|-----------------|-----------------|----------------|---------------------|
| all      | all             | 416x261         | \              | 416x261             |

📚 Example for the hero component:

```html
<img
  alt="Mercato NBA, New York Knicks"
  src="/static/hero/sport-567x355.jpg"
  sizes="(max-width: 1024px) 100vw, 55vw"
  srcset="/static/hero/sport-375x235.jpg 375w,
          /static/hero/sport-750x470.jpg 750w,
          /static/hero/sport-768x481.jpg 768w,
          /static/hero/sport-1536x962.jpg 1536w,
          /static/hero/sport-567x355.jpg 565w,
          /static/hero/sport-1134x710.jpg 1130w">
```

If we open the browser inspector and select the hero image's DOM node, the browser will show the size of the box that contains the image. In this example, the box is about 477px wide.

![hero-srcset-desktop](/attachments/hero-srcset-desktop-01.png)

Hovering on one of the source images, the browser will show several info:
- the dimensions of the image resized: 477x299
- the instrinsic image size (the real image dimensions): 1536x962
- the current source image loaded

![hero-srcset-desktop](/attachments/hero-srcset-desktop-02.png)

**Why** is the browser loading the 1536x962 image?<br>
The viewport size is 1440px. This is the only information the browser uses to determine the image to download. To do so, it reads the `sizes` attribute, which tells it that for the current viewport size, the image will be `55vw`. Quick math: 0,55 * 1440px = 792px. The browser now looks for a 792px image. The closest match (always bigger in size compared to the required one) would be the 1134x710 image. But the monitor the screenshot has been taken on is a _retina display_ (or, better, a high density display, roughly using 2 physical pixels for every logical one), so the browser looks for an image that is at least 792 * 2 (1584px), hence the 1536x962. There is no image as big as 1584px, so the biggest available (even if smaller) will do.

Note that CSS has sized the image to be 477.17px wide. The browser has **no information on CSS layout when it decides which image to download**. It only makes decisions based on the viewport size, the display pixel density, the `sizes` attributes and the list of images provided via `srcset`.

In the mobile viewport:

- if the **cache is not empty** and we previously loaded the bigger image 1536x962, **probably** (important! it's probable, not sure!) the browser will use that image as well: in this example we have a 366px viewport the image is loaded is still 1535px wide.

![hero-srcset-mobile-01](/attachments/hero-srcset-mobile-01.png)

- if instead the **cache is cleaned** and we open the browser in mobile viewport, we get the image at a smaller size, accordingly to the container size.

![hero-srcset-mobile-02](/attachments/hero-srcset-mobile-02.png)
![hero-srcset-mobile-03](/attachments/hero-srcset-mobile-03.png)

## Attribute `sizes`

> A list of one or more strings separated by commas indicating a set of source sizes. Each source size consists of:
>
> - a media condition. This must be omitted for the last item.
> - a source size value.
> Source size values specify the intended display size of the image. User agents use the current source size to select one of the sources supplied by the srcset attribute, when those sources are described using width ('w') descriptors. The selected source size affects the intrinsic size of the image (the image’s display size if no CSS styling is applied). If the srcset attribute is absent, or contains no values with a width (w) descriptor, then the sizes attribute has no effect.

[MDN documentation - sizes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes)

- Indicates the width that the image can have in a given viewport (either as absolute pixel dimensions or relative percentage, usually in viewport units)
- If a viewport is not specified, the browser assumes 100vw
- Note that, based on the previous rules, author should use _inverted_ media queries, preferring `max-width` to `min-width`

Therefore, the order to follow in the declaration would be:

- mobile
- tablet
- desktop

```html
sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
```

| Viewport                    | Image size / viewport |
|-----------------------------|-----------------------|
| mobile < viewport < tablet  | 100vw                 |
| tablet < viewport < desktop | 50vw                  |
| viewport > desktop          | 30vw                  |

Note that _all cases_ excluded from the mediaquery, take the last value.

```html
sizes="(min-width: 768px and max-width: 1023px) 100vw, 30vw"
```

| Viewport                    | Image size / viewport |
|-----------------------------|-----------------------|
| mobile < viewport < tablet  | 30vw                  |
| tablet < viewport < desktop | 100vw                 |
| viewport > desktop          | 30vw                  |


Sizes explained in a Harry Roberts [tweet](https://twitter.com/csswizardry/status/836960832789565440)

![responsive images harry roberts](/attachments/img-responsive-sizes.jpg)

📚 Example

```xml
<img
  alt="Mercato NBA, New York Knicks"
  src="/static/hero/sport-567x355.jpg"
  sizes="(max-width: 1024px) 100vw, 55vw"
  srcset="/static/hero/sport-375x235.jpg 375w,
          /static/hero/sport-750x470.jpg 750w,
          /static/hero/sport-768x481.jpg 768w,
          /static/hero/sport-1536x962.jpg 1536w,
          /static/hero/sport-567x355.jpg 565w,
          /static/hero/sport-1134x710.jpg 1130w">
```

Sizes "magic numbers" derive from design. We need to mesure the image width as a proportion of the current viewport.

**Important note**

We might have different width proportions across templates, so we must analyze **all templates** to get the most appropriate sizes.

| Viewport | Template | Image width | Image size / viewport |
|----------|----------|-------------|-----------------------|
| 375px    | homepage | 335px       | 335px / 375px = 89vw  |
| 375px    | article  | 375px       | 375px / 375px = 100vw |

If, as in this case, we have different percentages for the same viewport, we decided to use the percentage of the *worst* scenario, so when the component image is *bigger*. In our specific case, we would use `100vw` for the mobile viewport.

_Template homepage_

![hero-homepage-sizes-mobile](/attachments/hero-homepage-sizes-mobile.png)

_Template article_

![hero-article-sizes-mobile](/attachments/hero-article-sizes-mobile.png)

| Viewport | Template | Image width | Image size / viewport  |
|----------|----------|-------------|------------------------|
| 768px    | homepage | 728px       | 728px / 768 px = 94vw  |
| 768px    | article  | 768px       | 768px / 768 px = 100vw |

As above, we would take `100vw`.

_Template homepage_

![hero-homepage-sizes-tablet](/attachments/hero-homepage-sizes-tablet.png)

_Template article_

![hero-article-sizes-tablet](/attachments/hero-article-sizes-tablet.png)

| Viewport | Template | Image width | Image size / viewport |
|----------|----------|-------------|-----------------------|
| 1024px   | homepage | 482px       | 482px / 1024px = 47vw |
| 1024px   | article  | 567px       | 567px / 1024px = 55vw |

As above, we would take the bigger size, so `55vw`.

_Template homepage_

![hero-homepage-sizes-desktop](/attachments/hero-homepage-sizes-desktop.png)

_Template article_

![hero-article-sizes-desktop](/attachments/hero-article-sizes-desktop.png)

- up to 1024px the image will be displayed at 100% of the viewport size
- after 1024px the image will be at most 55% of the viewport size

| Viewport          | Display density | Max image size |
|-------------------|-----------------|----------------|
| viewport < 1024px | all             | 100vw          |
| viewport > 1024px | all             | 55vw           |

Read more:<br>
[Responsive images MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)<br>
[responsive-images-youre-just-changing-resolutions-use-srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/)<br>
[Figuring responsive images](https://css-tricks.com/video-screencasts/133-figuring-responsive-images/)<br>
[Responsive images 101 definitions](https://cloudfour.com/thinks/responsive-images-101-definitions/)<br>
[Planning for responsive images](https://css-tricks.com/planning-for-responsive-images/)<br>
[Time-saving CSS techniques to create responsive images](https://www.freecodecamp.org/news/time-saving-css-techniques-to-create-responsive-images-ebb1e84f90d5/)<br>

<hr>

### 📚 Example of images based on art direction or different proportions

Use `<picture>` and `<source>`:

```html
<picture>
  <!--[if IE 9]><video style="display: none"><![endif]-->
  <source media="(max-width: 767px)"
          srcset="../images/split-767x190.jpg 1x,
                  ../images/split-1534x380.jpg 2x">

  <source media="(min-width: 768px) and (max-width: 1023px)"
          srcset="../images/split-1199x190.jpg 1x,
                  ../images/split-2398x380.jpg 2x">
  <!--[if IE 9]></video><![endif]-->

  <img alt=""
        src="../images/split-1920x350.jpg"
        sizes="(max-width: 1920px) 100vw"
        srcset="../images/split-1920x350.jpg 1x,
                ../images/split-3840x700.jpg 2x">
</picture>
```

At viewport 800px

| Browser                       | Viewport | Display density | Browser loads image |
|-------------------------------|----------|-----------------|---------------------|
| understands `picture`         | 800px    | 1x              | 1199x190            |
| doesn't understand `picture`* | 800px    | 1x              | 1920x350            |
| doesn't understand `picture`* | 800px    | 2x              | 1920x350            |

*the browser will take the `<img>` fallback.

<hr>

# Friendly reminder

| Images in viewport                | Technique        | We gave to the browser a |
|-----------------------------------|------------------|--------------------------|
| same ratio or same cut            | img              | suggestion               |
| different ratio or different cuts | picture + source | directive                |
