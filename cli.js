#!/usr/bin/env node

var concat = require('concat-stream')
var minimist = require('minimist')
var slashes = require('slashes')
var assert = require('assert')

var argv = minimist(process.argv.slice(2))
var value2 =  slashes.strip(argv._[1] || argv._[0])
var compare = argv._.length === 2 ? argv._[0] : 'deepEqual'
  
process.stdin.setEncoding('utf-8')

process.stdin
  .pipe(concat(function (value1) {
    assert[compare](value1, value2)
    console.log('ok')
  }))