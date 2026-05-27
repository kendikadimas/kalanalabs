/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kalanalabs.com',
  generateRobotsTxt: true,
  outDir: 'out', // Tempat menyimpan sitemap.xml & robots.txt pasca static export
  generateIndexSitemap: false, // Menghasilkan satu file sitemap saja, bukan sitemap-index
}
