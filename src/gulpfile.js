//引入
var gulp = require('gulp');
//编译sass
var sass = require('gulp-sass');
//浏览器内核
var autoprefixer = require('gulp-autoprefixer');
//压缩css文件
var cleanCss = require('gulp-clean-css');
//压缩js文件
var jsUglify = require('gulp-uglify');
//合并文件
var jsConcat = require('gulp-concat');

//执行任务
gulp.task('scss', function() {
    //释放
    return gulp.src('scss/index.scss')
        //进行编译
        .pipe(sass())
        // //自动监听浏览器内核
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        //压缩文件css
        .pipe(cleanCss())
        //输出结果路径
        .pipe(gulp.dest('css/'))
});
//监听文件的实时变化,一旦有变化就会改变
gulp.task('watch', function() {
    //文件  任务名称
    gulp.watch('scss/index.scss', gulp.series('scss'))
});
//压缩js
gulp.task('js', function() {
    return gulp.src('scripts/index.js')
        .pipe(jsUglify())
        .pipe(gulp.dest('scripts/'))
});