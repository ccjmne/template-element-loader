import { minify, type Options } from 'html-minifier-terser';
import { type LoaderContext } from 'webpack';

export default function templateElementLoader(this: LoaderContext<Options>, content: string | Buffer): Promise<string> {
  return minify(String(content), this.getOptions()).then(minified => `
    const template = document.createElement('template');
    template.innerHTML = ${JSON.stringify(minified)};
    export default template;`);
}
