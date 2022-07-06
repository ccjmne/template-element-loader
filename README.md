# &lt;template&gt; loader
A [webpack](https://webpack.js.org/) loader that serves your html contents into actual `<template>` elements.

It allows preprocessing of the contents of your template to speed up subsequent rendering when needed by saving CPU cycles on HTML parsing.

It's only relevant at all if you reuse that template multiple times; harmless otherwise.

## Why?

Usage example:

* `webpack.config.js`:
```javascript
rules: [{
  test: /\.html$/,
  use: {
    loader: 'template-tag-loader',
    options: {
      removeComments: true, // or any of the HTMLMinifier options
    },
  },
}]
```

* `my-code.ts`:
```typescript
import template from './my-template.html';

class MyElement extends HTMLElement {

  constructor() {
    super()
      .attachShadow({ mode: 'closed' })
      .appendChild(template.content.cloneNode(true));
  }

}
```

## Options

Additionally minifies your HTML content using [HTMLMinifier](https://github.com/terser/html-minifier-terser).  
Refer to their [Options Quick Reference](https://github.com/terser/html-minifier-terser#options-quick-reference) table for guidance.

## TypeScript typings

If your project uses [TypeScript](https://www.typescriptlang.org/), we recommend you include something like the excerpt below to you typings:

* `declarations.d.ts`:
```typescript
declare module '*.html' {
  const template: HTMLTemplateElement;
  export default template;
}
```

## Licensing

Uses the **MIT** license.

> See [LICENSE](./LICENSE) for the complete text or [the MIT entry on TLDR Legal](https://tldrlegal.com/license/mit-license) for a quick summary.
