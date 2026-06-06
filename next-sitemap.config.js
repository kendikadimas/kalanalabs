/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kalanalabs.com',
  generateRobotsTxt: true,
  outDir: 'public',
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    // Custom priority per page
    const custom = {
      '/': 1.0,
      '/artikel/jasa-pembuatan-website-purwokerto/': 0.9,
      '/layanan/': 0.9,
      '/layanan/landing-page/': 0.8,
      '/layanan/company-profile/': 0.8,
      '/layanan/ecommerce/': 0.8,
      '/layanan/sistem-informasi/': 0.8,
      '/layanan/ui-ux-design/': 0.8,
      '/layanan/website-portofolio/': 0.8,
      '/layanan/mobile-app/': 0.8,
      '/kontak/': 0.8,
      '/about/': 0.6,
      '/portofolio/': 0.6,
    }
    return {
      loc: path,
      changefreq: 'daily',
      priority: custom[path] ?? 0.5,
      lastmod: new Date().toISOString(),
    }
  },
}
