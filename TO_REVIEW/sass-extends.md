```scss
%colors-per-viewport {
  background: red;

  @media (min-width: 768px) {
    background: blue;
  }
}

.colors {
  @extend %colors-per-viewport;
}
```

output

```css
.colors {
  background: red;
}
@media (min-width: 768px) {
  .colors {
    background: blue;
  }
}
```

------

```scss
%colors-mobile {
  background: yellow;
}

%colors-tablet {
  background: green;
}

.colors-viewport {
  @extend %colors-mobile;
  
  @media (min-width: 768px) {
    @extend %colors-tablet;
  }
}
```

```shell
You may not @extend an outer selector from within @media.
You may only @extend selectors within the same directive.
```
