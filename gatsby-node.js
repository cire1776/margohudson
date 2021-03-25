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

async function createGallery(createPage, graphql, reporter) {
  const pageTemplate = require.resolve(`./src/templates/gallery.js`);

  createPage({
    path: "gallery",
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
  await createGallery(createPage, graphql, reporter);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type MarkdownRemark implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      # you may need to adapt this line depending on the node type and key
      # that you want to create the relationship for
      image: File @link(by: "relativePath")
    }`,
  ];
  createTypes(typeDefs);
};
