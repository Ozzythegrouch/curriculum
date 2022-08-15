# NodeJS 104
## Modules make it easier to scale and maintain node application

### Modules
- compartmentalize code
- act as building blocks in an application

### Types
- core
- local - you define as a developer
- third-party - modules found elsewhere, ex: npm

### Import
```javascript
const someModule = require('someModule')
```

### Export
```javascript
function someFunction() {
    //code here
}

module.exports = someFunction; 
```

#### nodejs.org/api/