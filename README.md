# genProject

## Node JS CLI application, used to generate generic project templates

## Install

```js
npm i -g genproject
```

### CLI usage

```js
genproject
// or
genproject config-file
// you can use gen-project notation, for example
genproject config-file
// or gen
gen config-file
```

usage command without args, ask you for using technologies create file *genProject-{project_name}.conf.json*
and create your template

commands with args (name of file) only create template of project

### Supported technology

- Frontend

  - TS

  - Vue

  - Sass&Scss

- Helpers

  - Gulp (*default*)

  - Karma+Jasmine

- Backend

  - nodeJS
    - Express.JS
  - Python (Django) will be implemented in next versions
  - PHP

    - Symfony

    - Simple MVC template

- Other

  - GIT (*default*)
  - Doxygen

### Bugs

Please resport every bugs (also with english grammar ;) ) as pull request: [Project's github](https://github.com/Milesq/genproject)