const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')

fs.readFile('src/app.css', (err, css) => {
  postcss([autoprefixer])
    .process(css, { from: 'styles/index.css', to: 'build/styles.css' })
    .then(result => {
      fs.writeFile('build/styles.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('build/styles.css.map', result.map.toString(), () => true)
      }
    })
})