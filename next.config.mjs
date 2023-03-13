import { remarkPlugins } from "./lib/mdx/remark.mjs";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import nextMDX from "@next/mdx";
// import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins,
    // remarkPlugins: [remarkGfm, remarkParse, remarkRehype],
    // rehypePlugins: [rehypeStringify],
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

export default withBundleAnalyzer(withMDX(nextConfig));
// export default withMDX(nextConfig);
// export default nextConfig;

