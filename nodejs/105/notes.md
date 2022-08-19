# NodeJS 105

## **package.json** manages third-party modules found at [npm's repository](https://www.npmjs.com)

### What is npm?
[Docs](https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/)
- it is an online repository for the publishing of open-source Node.js projects
- it is a command-line utilit for interacting with said repository that aids in package installation, version management, and dependency management

### Open-source software
- free to use as per a specific license
- developers are not compensated
- not guaranteed to work all times

### Synonyms
#### all refer to code at npm, that is bundled for use
- library
- module
- package
- dependency

### npm commands
- `npm -v` (version)
- `npm install -g <someModule>` (global install, not recommended)
- `npm install <someModule>` (local install, preffered)
- `npm init -y` ( creates **package.json*** with default values)

### package.json
- "dependencies" list production libraries
- "devDependencies" list the libraries used to write the code itself
- is created by `npm init -y`
- determines the contents of **node-modules/**

### node-modules/
- contains all third party modules installed with `npm`
- each module has its own  **package.json**,  so this directory can be quite large
- do not ever modify the code within this directory

### Executing commans(if applicable)
using `cowsay` as an example
- node_modules/.bin/cowsay JavaScript FTW!
- npx cowsay Javascript FTW!
```

 ________________
< JavaScript FTW >
 ----------------
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||
```

