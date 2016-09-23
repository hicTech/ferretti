var path = require("path");
var glob = require("glob");

var ExtractTextPlugin = require("extract-text-webpack-plugin");

var extractStyle = new ExtractTextPlugin("[name].styles.css");
var extractLESS  = new ExtractTextPlugin("[name].less.css");
var extractCSS   = new ExtractTextPlugin("[name].sheets.css");

var entries = []
    //.concat(glob.sync(__dirname+"/MODULES/**/*.js"))
    .concat(glob.sync(__dirname+"/TAGS/**/*.html"))
    //.concat(glob.sync(__dirname+"/MODULES/**/*.css"))
    .concat(glob.sync(__dirname+"/cssPlus/**/*.less"))
    //.concat(glob.sync(__dirname+"/index.js"));

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),




        webpack: {
            build: {
                entry: entries,
                output: {
                    path: path.join(__dirname, "dist"),
                    publicPath: __dirname,
                    filename: '[name].build.js'
                },
                
                module: {
                    loaders: [

                        { test: /\.less$/, loader: extractStyle.extract("raw") },
                        { test: /\.html$/, loader: extractStyle.extract("raw", "raw!style-block") },
                    ]
                },
                
                plugins: [extractStyle,extractCSS, extractLESS]
            }
        },


        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    "dist/main.styles.css": "dist/main.styles.css" // destination file and source file
                }
            }
        },



        purifycss: {
            options: {

            },
            target: {
                src: ['TAGS/app/**/*.html'], // Observe all html files
                css: ['dist/main.styles.css'], // Take all css files into consideration
                dest: 'dist/main.styles.css' // Write to this path
            }
        },


        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/main.styles.css': 'dist/main.styles.css'
                }
            }
        },


        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    'dist/sass/main.css': 'sass/*.scss'       // 'destination': 'source'
                }
            }
        },


        lessToSass: {
            convert: {
                files: [
                    {
                        expand: true,
                        cwd: 'cssPlus/',
                        src: ['core/*.less','global/*.less'],
                        ext: '.scss',
                        dest: 'css_new/components'
                    }
                ]
            }
        }

    });


    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-purifycss');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.loadNpmTasks('grunt-less-to-sass');


    /* purifica il build eliminando i .class non usati nell'app  */
    //grunt.registerTask('default', ['webpack','less','purifycss','cssmin']);

     //grunt.registerTask('default', ['webpack','less','cssmin']);

    grunt.registerTask('sass_test', ['sass']);

    grunt.registerTask('default', ['lessToSass']);



};