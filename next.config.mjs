import { remarkPlugins } from "./lib/mdx/remark.mjs";
import NextBundleAnalyzer from "@next/bundle-analyzer";
import nextMDX from "@next/mdx";

const withBundleAnalyzer = NextBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

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

export default withBundleAnalyzer(withMDX(nextConfig));
// export default withMDX(nextConfig);
// export default nextConfig;

