# Front-End Automation: JavaScript

[![Build Status](https://travis-ci.org/stremann/front-end-automation.svg?branch=master)](https://travis-ci.org/stremann/front-end-automation)

> Constructing JavaScript and Front-End Automation [Home Assignment] (https://kb.epam.com/display/GDOKB/Lecture20%3A+JS+and+Front-End+automation)

![front-end-automation](preview.png)

### System requirements:
- Node.js -v 4.2.2
- NPM -v 2.14.7

### Running application:
```sh
$ git clone [git-repo-url] js_mentoring_kyiv_2015
$ cd js_mentoring_kyiv_2015/Module8/Hw20/front-end-automation
$ npm start
$ node server.js
```
> Check how application runs on [localhost](http://localhost:3000/) environment and on [heroku] (https://front-end-automation.herokuapp.com/) platform as well

### Application advantages:
- Production-ready code
- Easy way scalability
- Modular file structure
- Modular code structure
- JavaScript code style
- BEM layout implementation
- Well-designed user interface
- High-quality user experience

### Implemented features:
- EPAM [visual guidelines](https://elements.epam.com/visual-guidelines) recommendations
- Grunt for running tasks
- Karma for running tests
- SASS for CSS preprocessing
- Autoprefixer for CSS postprocessing
- jQuery for easy way inheritance
- Breakpoint for easy way media queries
- EJS for server-side templating
- Express for easy way node development
- Jasmine framework for unit testing
- Sinon.js for easy way stubbing and mocking
- Travis-CI for continuous integration
- Heroku for easy way deploying

### Check list:
- Used CSS preprocessor
- Used CSS postprocessor
- Used JavaScript task runner
- Used JavaScript test runner
- Used Travis to deploy

### Configuration:
- Create repository on GitHub and add remote: 
```sh
$ git remote add origin git@github.com:stremann/front-end-automation.git
```
- Create repository on heroku: 
```sh
$ heroku create front-end-automation
```
- Synchronize GitHub repository with [Travis-CI](https://travis-ci.org/profile/stremann)
- Allow to track `front-end-automation` repository from GitHub on Travis-CI
- Create encrypted token for heroku: 
```sh
$ travis encrypt $(heroku auth:token) --add deploy.api_key
```
- Push changes into GitHub repository
- Open [Travis-CI](https://travis-ci.org/) to see how build goes
- After success build run:
```sh
$ heroku open
```
- Enjoy and have fun with your [application](https://front-end-automation.herokuapp.com/)
