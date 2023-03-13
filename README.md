## Issue with adding MDX Plugins

The file in `app > messages.mdx` should have github flavored markdown enabled.

This project attempts to follow the documentation here:
https://beta.nextjs.org/docs/guides/mdx#remark-and-rehype-plugins

### Summary

I'm trying to get remark plugins to work. In this example, github flavored markdown.
I'm following these docs: https://beta.nextjs.org/docs/guides/mdx#remark-and-rehype-plugins

My next.config.mjs looks like this..
```js
import { remarkPlugins } from "./lib/mdx/remark.mjs";
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  options: {
    remarkPlugins,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
  experimental: {
    appDir: true,
    mdxRs: true,
  },
}

export default withMDX(nextConfig);
```

and the `./lib/mdx/remark.mjs` file looks like this:
```js
import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm]
```

When I try to run some markdown like a table or strikethrough in `messages.mdx`, it doesn't render properly
```
## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |
```


## To install and run
```
yarn && yarn dev
```