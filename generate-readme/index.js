'use strict'

const fs = require('fs')
const chalk = require('chalk')
const { resolve } = require('path')
const { devDependencies } = require('../package.json')

function generateDependenciesMarkdownFile () {
  const filePath = resolve(__dirname, '_dependencies.md')
  const data = generateDependenciesText(devDependencies, '## Dependencies versions\n\n')
  createFile(filePath, data)
}

function generateDependenciesText (dependencies, initializer) {
  return Object.keys(dependencies).reduce((acc, dependencie) => {
    const key = dependencie
    if (dependenciesFilter(key)) {
      const val = dependencies[dependencie].replace(/[^\d.]/, '')
      acc += `- **${key}:** ${val}\n`
    }
    return acc
  }, initializer)
}

function dependenciesFilter (key) {
  return !/(@babel\/core|@babel\/preset-env|@babel\/register|eslint-|chalk)/.test(key)
}

function readFile (path) {
  return fs.readFileSync(path, 'utf8')
}

function createFile (filePath, data) {
  fs.writeFile(filePath, data, 'utf-8', (err) => {
    return err ? console.log(err) : null
  })
}

function concatFiles () {
  const files = [
    `${resolve(__dirname)}/_header.md`,
    `${resolve(__dirname)}/_dependencies.md`,
    `${resolve(__dirname)}/_scripts.md`
  ]

  return files.reduce((acc, file, index) => {
    const breakline = index > 0 ? '\n' : ''
    acc += breakline + readFile(file)
    return acc
  }, '')
}

function init () {
  generateDependenciesMarkdownFile()
  setTimeout(() => {
    const filePath = resolve(__dirname, '..', 'README.md')
    const data = concatFiles()
    createFile(filePath, data)
    console.log(chalk.green('README.md generated with success'))
  }, 1000)
}

init()
