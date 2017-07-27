# Getting Started With Gulp


START BY RUNNING GULP IN FOLDER ROOT (from command prompt)

open http://localhost:8090/index.html


npm install --save-dev gulp-cssm   //https://www.npmjs.com/package/gulp-cssmin
npm install --save-dev gulp del    //http://gulpjs.org/recipes/delete-files-folder.html



Gulp example app for the tutorial


http://localhost:8090/index.html


run gulp AS is here to fire up server and other tasks


>> N.B.  using mobile first and @media queries design approach
i.e. (reset.scss, small.scss, medium.scss , large.scss).

Step 0


Step 1
compile all .scss files into one equivalent .css files - create & place in tempcss folder
Step 2
concate all the .css files into main.css in same folder
Step 3 
minify the main.cs file into main.min.cs and place in dest/dist/asset folder





2nd then sass the main.scss file into one main.css

3rd then minify the main.css file into main.min.cs

4th copy to distribution

5th clean-up any temp direcotries & files              --- http://gulpjs.org/recipes/delete-files-folder.html
