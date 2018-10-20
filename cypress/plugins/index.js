// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const path = require("path");
module.exports = (on, config) => {
  // workaround for click() error
  // https://github.com/cypress-io/cypress/issues/2037#issuecomment-407898194
  on("before:browser:launch", (browser = {}, args) => {
    if (browser.name === "chrome") {
      args.push("--disable-blink-features=RootLayerScrolling");
      return args;
    }
  });
  /* Ignore files with path for cross-platform compatibility (e.g. win OS)  */

  config.ignoreTestFiles = path.join("**", "examples", "**");
  return config;
};
