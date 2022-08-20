const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query HarmonyMain {
      allContentfulHarmonyMain {
        edges {
          node {
            id
            mainTitle
            node_locale
            mainButtonLink
            mainButton
            mainDescription
          }
        }
      }
    }
  `);

  data.allContentfulHarmonyMain.edges.forEach((edge) => {
    actions.createPage({
      path: "/" + edge.node.node_locale,
      component: path.resolve("./src/pages/index.tsx"),
      context: {
        nodeLocale: edge.node.node_locale,
      },
    });
  });
};
