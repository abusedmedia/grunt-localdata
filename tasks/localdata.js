'use strict'

module.exports = function (grunt) {
  var path = require('path')
  var _ = require('lodash')
  var ob = {_: _} // inject lodash

  grunt.registerMultiTask('localdata', '', function () {
    this.files.forEach(function (filePair) {
      console.log(filePair)
      var f = filePair.orig.cwd
      var p = filePair.src[0]
      console.log('localdata', p)
      var src = grunt.file.readJSON(p)
      var filename = path.parse(p).name
      var diff = path.relative(f, path.parse(p).dir)
      if (diff) {
        var frags = diff.split('/')
        var res = ob
        frags.forEach(d => {
          res[d] = (!res[d]) ? {} : res[d]
          res = res[d]
        })
        res[filename] = src
      } else {
        ob[filename] = src
      }
    })
    grunt.config('localdata', ob)
  })
}
