async function createLifeStory(createPage, graphql, reporter) {
  const pageTemplate = require.resolve(`./src/templates/life-story.js`);

  createPage({
    path: "life-story",
    component: pageTemplate,
    context: {
      slug: "life-story",
    },
  });
}

async function createBooks(createPage, graphql, reporter) {}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await createLifeStory(createPage, graphql, reporter);
  await createBooks(createPage, graphql, reporter);
};
