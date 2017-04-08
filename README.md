# nativescript-bcrypt.js
A nativescript plugin that integrate bcrypt.js plugin in order to hash, compare passwords...

# Author

* Nabil MANSOURI
* My blog <http://e-devservice.com>

# How to use it
```typescript
require('nativescript-bcryptjs');
let bcrypt = require('bcryptjs');
bcrypt.hashSync("PASSWORD", 4)
```