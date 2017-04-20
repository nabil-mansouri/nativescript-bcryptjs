# nativescript-bcrypt.js
A nativescript plugin that integrate bcrypt.js plugin in order to hash, compare passwords...

# Author

* Nabil MANSOURI
* My blog <http://e-devservice.com>

# How to use it
```typescript
import {bcrypt} from ('nativescript-bcryptjs');
let salt = bcrypt.genSaltSync(10);
let hash2 = bcrypt.hashSync("password", salt);
let hash = bcrypt.hashSync("password", 4);
let comp = bcrypt.compareSync("password", hash);
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash("B4c0/\/", salt, (err, hash) => {
        bcrypt.compare("B4c0/\/", hash, function (err, res) {
        });
    });
});
```