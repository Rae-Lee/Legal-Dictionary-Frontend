const path = require('path')
const ghPages = require('gh-pages')
const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/Rae-Lee/Legal-Dictionary-Frontend.git'
}
const callback = err => {
  if (err) {
    console.log(err)
  } else {
    console.log('public success')
  }
}
ghPages.publish(path.resolve(__dirname, './dist'), options, callback)
