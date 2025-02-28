/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  newbieSidebar: [{type: 'autogenerated', dirName: 'getting-started'}],

  devSidebar: [{type: 'autogenerated', dirName: 'dev-course'}],

  supportSidebar: [{type: 'autogenerated', dirName: 'dev-resources'}],

  web3Sidebar: [{type: 'autogenerated', dirName: 'ic-web3'}],

  introSidebar: [{type: 'autogenerated', dirName: 'intro-ic'}],

  appSidebar: [{type: 'autogenerated', dirName: 'apps-guide'}],

  ecoSidebar: [{type: 'autogenerated', dirName: 'ecosystem-guide'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
