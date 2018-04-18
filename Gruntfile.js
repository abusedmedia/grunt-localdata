'use strict'

module.exports = function (grunt) {
  grunt.initConfig({
    localdata: {
      test: {
        options: {
        },
        files: [{
          expand: true,
          cwd: 'test/',
          src: ['*.json']
        }]
      }
    },
    testlocaldata: {
      test: {
        options: '<%= localdata %>'
      }
    }
  })

  grunt.registerMultiTask('testlocaldata', function () {
    var opt = this.options()
    console.log(opt)
  })

  grunt.loadTasks('tasks')
  grunt.registerTask('default', ['localdata', 'testlocaldata'])
}
