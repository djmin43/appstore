
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---gatsby-theme-example-workspaces-src-pages-theme-page-js": preferDefault(require("/Users/dongjoonmin/Desktop/dev/gatsby-playground/gatsby-theme-dev/gatsby-theme-example-workspaces/src/pages/theme-page.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dongjoonmin/Desktop/dev/gatsby-playground/gatsby-theme-dev/example/src/pages/index.js"))
}

