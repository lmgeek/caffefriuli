import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { expect, it } from "vitest";
import { routeTree } from "@/routeTree.gen";
import { sitemapStaticPaths, sitemapXML } from "@/lib/sitemap";

it("lists only the public homepage at the official origin without invented timestamps", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  const paths = sitemapStaticPaths(router);
  expect(paths).toEqual(["/"]);
  const xml = sitemapXML(
    "https://caffefriuli.it",
    paths.map((path) => ({ path })),
  );
  expect(xml).toContain("<loc>https://caffefriuli.it/</loc>");
  expect(xml).not.toContain("lastmod");
  expect(xml).not.toContain("/sitemap.xml</loc>");
});
