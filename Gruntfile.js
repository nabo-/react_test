/* ---------------------------------------------
* name: Gruntfile.js format
*
*
* $ npm i
* $ grunt　live : develop
* $ grunt build : build
*
--------------------------------------------- */
module.exports = function (grunt) {

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({

		path: {
			src: 'src',
			build: 'build',
			tmp: 'tmp',
			html_src: 'src/html',
			scss_src: 'src/scss',
			js_src: 'src/js'
		},

		clean: ['**/.DS_Store','**/.sass-cache','<%= path.tmp %>'],

		connect: {
			livereload: {
				options: {
					port: 8000
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compact',
					sourcemap: 'none',
					noCache: true
				},
				files: [
					{
						expand: true,
						cwd: '<%= path.scss_src %>',
						src: ['**/*.scss'],
						dest: '<%= path.tmp %>/css/',
						ext: '.css'
					}
				]
			},
		},

		autoprefixer: {
			options: {
				browsers: ['iOS >= 4','Android >= 2.3','Firefox ESR']
			},
			file: {
				src: '<%= path.tmp %>/css/*.css'
			}
		},

		csso: {
			app: {
				expand: true,
				cwd: '<%= path.tmp %>/css/',
				src: ['**/*.css'],
				dest: '<%= path.build %>/css/',
				options: {
					restructure: false
				}
			}
		},
		browserify: {
			dist: {
				files: {
					'<%= path.build %>/js/index/app.js': '<%= path.js_src %>/index/app.js',
					'<%= path.build %>/js/form/app.js': '<%= path.js_src %>/form/app.js',
					'<%= path.build %>/js/pr/app.js': '<%= path.js_src %>/pr/app.js',
					'<%= path.build %>/js/event/app.js': '<%= path.js_src %>/event/app.js',
					'<%= path.build %>/js/form2/app.js': '<%= path.js_src %>/form2/app.js',
					'<%= path.build %>/js/todo/app.js': '<%= path.js_src %>/todo/app.js',
					'<%= path.build %>/js/flux1/app.js': '<%= path.js_src %>/flux1/app.js'
				}
			}
		},
		assemble: {
			options: {
				layoutdir: '<%= path.html_src %>/layouts/',
				partials: '<%= path.html_src %>/partials/*.hbs',
				helpers: ['handlebars-helper-prettify'],
				prettify: {
					condense: true,
					padcomments: true,
					indent: 4,
					unformatted: ['br', 'strong', 'span', 'a', 'sub', 'sup', 'b', 'i', 'u']
				},
				flatten: true
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/html/pages/',
					src: '**/*.hbs',
					dest: 'build/'
				}]
			}
		},

		watch: {
			css: {
				files: ['<%= path.scss_src %>/**/*.scss'],
				tasks: ['build:css']
			},
			javascript: {
				files: ['<%= path.js_src %>/**/*.{jsx,js}'],
				tasks: ['build:js']
			},
			html: {
				files: ['<%= path.html_src %>/**/*.hbs'],
				tasks: ['build:html']
			},
			options: {
				livereload: true
			}
		}

	});

	grunt.registerTask('build:html', ['assemble']);
	grunt.registerTask('build:css', ['sass', 'autoprefixer', 'csso']);
	grunt.registerTask('build:js', ['browserify']);

	grunt.registerTask('build', ['build:html', 'build:css', 'build:js', 'clean']);

	grunt.registerTask('live', ['connect', 'watch']);

	grunt.registerTask('default', 'build');
};
