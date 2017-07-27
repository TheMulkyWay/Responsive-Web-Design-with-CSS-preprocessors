# Getting Started With Gulp


Responsive Web Design with CSS preprocessors

In depth demonstration for front end developers of 
mobile first development using media queries and CSS preprocessing.

This includes a custom built Gulp automation pipeline
for client side continuous development.

Built with Visual Studio Code the development uses Git locally 
and Github and will demonstrate using both tools during the process.

Semantic Markup, Sass features and Testing (HTML and CSS validation) 
and page speed will also be described.

Advanced CSS, SASS variables and Colour Modification and graceful degradation for older client browsers will be shown.


You will see how to solve the mobile phone font resize problem and how to ensure all devices use the same box model to ensure margin and padding is consistent across all browser device types.


Development will involve multiple CSS files and a CSS Reset,
reset.css
small.css
medium.css
large.css

The four different CSS files are combined and minified into one
by the development pipeline continuously running in the background and become style.css


Media queries should not be used in the reset or the small screen rules, use only a min-width for the medium size and large screen rules.


Starting without a .git folder ( delete it if you have) select initialize repository from within visual code or type 

git remote -v    show me all my remotes

git init            from the command line , then
git add .           then install the Github
npm i -g gh

gh repo -h               
this hows what you can do wi this cmd line github tools

gh repo --new President          create a repo on Github !!!!












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

5th clean-up any temp directories & files              --- http://gulpjs.org/recipes/delete-files-folder.html
