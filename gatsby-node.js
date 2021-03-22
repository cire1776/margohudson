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

async function createBooks(createPage, graphql, reporter) {
  const pageTemplate = require.resolve(`./src/templates/books.js`);

  createPage({
    path: "books",
    component: pageTemplate,
    context: {},
  });
}

async function createEvents(createPage, graphql, reporter) {
  const pageTemplate = require.resolve(`./src/templates/events.js`);

  createPage({
    path: "events",
    component: pageTemplate,
    context: {},
  });
}

async function createMedia(createPage, graphql, reporter) {
  const pageTemplate = require.resolve(`./src/templates/media.js`);

  createPage({
    path: "media",
    component: pageTemplate,
    context: {},
  });
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  await createLifeStory(createPage, graphql, reporter);
  await createBooks(createPage, graphql, reporter);
  await createEvents(createPage, graphql, reporter);
  await createMedia(createPage, graphql, reporter);
};
