//pages/sitemap.xml.js
const EXTERNAL_DATA_URL = "https://jsonplaceholder.typicode.com/posts";

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>https://www.laxmikripaispat.in/</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.in/about</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.in/products</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://www.laxmikripaispat.in/contact</loc>
        <lastmod>2023-05-12T12:34:37+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
  `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
