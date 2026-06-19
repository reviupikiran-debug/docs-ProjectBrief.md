import cities from "../data/cities.json";

export async function GET() {
  const baseUrl = "https://example.com";

  const staticPages = [
    "",
    "/tentang",
    "/harga",
    "/kontak",
    "/blog",
    "/template"
  ];

  const cityPages = cities.map(
    (c) => `/undangan-digital/${c.slug}`
  );

  const blogPages = [
    "/blog/harga-undangan-digital",
    "/blog/cara-membuat-undangan-digital",
    "/blog/undangan-digital-vs-cetak"
  ];

  const allPages = [...staticPages, ...cityPages, ...blogPages];

  const urls = allPages
    .map(
      (path) => `
<url>
  <loc>${baseUrl}${path}</loc>
</url>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml"
      }
    }
  );
}