'use strict'

const FS = require('fs')
const PATH = require('path')
const SVGO = require('../node_modules/svgo')

const svgFolderPath = '../src/svg/original'

// Generate array of icons names
const isFile = fileName => {
  return FS.lstatSync(fileName).isFile()
}

const svgfiles = p => FS.readdirSync(p).filter(f => FS.statSync(PATH.join(p, f)).isFile())

const svgfilesArr = svgfiles('src/svg/original').filter(f => f.endsWith('.svg')) // => ['icon-facebook.svg', 'icon-twitter.svg', 'icon-flipboard.svg'] (note: starts from root)
const promisesArr = []

// Loop through icon names
svgfilesArr.forEach(iconName => {
  // Find icon to optimize and set plugin values
  let filepath = PATH.resolve(__dirname, `${svgFolderPath}/${iconName}`),
    svgo = new SVGO({
      plugins: [
        {
          removeViewBox: false
        },
        {
          addClassesToSVGElement: {
            className: `icon icon--${iconName.slice(0, -4)}` // remove .svg at the end
          }
        },
        {
          removeDimensions: true,
        },
        {
          addAttributesToSVGElement: {
            attributes: [
              'fill="currentColor"',
              'width="200"',
            ],
          },
        },
        {
          inlineStyles: {
            onlyMatchedOnce: false
          }
        },
        {
          cleanupIDs: {
            prefix: `${iconName.slice(0, -4)}-` // remove last string part '.svg'
          }
        },
      ]
    })
    // Read svg file content
    const svgData = FS.readFileSync(filepath, 'utf8', function (err) {
      if (err) {
        throw err
      }
    })

    // Optimize svg
    const svgoPromise = svgo.optimize(svgData, {
      path: filepath
    })
    .then(result => {
      FS.writeFile(`src/svg/svgo/${iconName}`, result.data, function (err) {
        if (err) {
          return console.log(err)
        }
      })
    })
    .then(result => {
      console.log(`${iconName} was saved!`)
    })

    // Save an array of promises to know when the optimization is completed
    promisesArr.push(svgoPromise)
})

// If all SVGs have been optimized, then print in console the output message
Promise.all(promisesArr).then(values => {
  console.log('\x1b[36m%s\x1b[0m', `Icons optimized and saved in 'src/icons/svgo' folder!`)
})