/**
 * The questions that the generator will ask.
 */

const _ = require('lodash');
const slugify = require('underscore.string').slugify;

module.exports = function prompts() {
  if (this.skipConfig) return true;

  return this.prompt([{
    type: 'input',
    name: 'bannerName',
    message: 'What is the name of the banner? (kebab-case):',
    default: this.appname,
    filter: answer => slugify(answer)
  }, {
    type: 'input',
    name: 'bannerDesc',
    message: 'Describe the banner:',
    default: 'Welcome to BannerLab!'
  }, {
    type: 'list',
    name: 'bannerType',
    message: 'What type of banner is it?',
    choices: ['DoubleClick Studio', 'Sizmek', 'Adform', 'DCM', 'Atlas', 'Flashtalking', 'IAB', 'Adnet', 'Gemius'],
    default: 'Adform'
  }, {
    type: 'input',
    name: 'bannerRepo',
    message: 'What is the link to the repository?',
    default: 'https://github.com/pyramidium/generator-bannertime'
  }, {
    type: 'confirm',
    name: 'includeOfflineScripts',
    message: 'Include vendor scripts for offline use?',
    default: false
  }]).then((props) => {
    this.props = _.merge(this.props, props);
  });
};
