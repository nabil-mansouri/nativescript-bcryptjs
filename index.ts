import { isIOS, isAndroid } from "platform";
let Buffer = require('buffer/').Buffer;
let bcrypt = require('bcryptjs');
if (isIOS) {
    // security
    let randomBytes = (length, cb) => {
        let bytes = NSMutableData.dataWithLength(length);
        SecRandomCopyBytes(null, length, <any>bytes.mutableBytes);
        let buf = new Buffer(bytes.base64EncodedStringWithOptions(0), 'base64');
        if (cb) {
            cb(null, buf);
        } else {
            return buf;
        }
    };
    bcrypt.setRandomFallback(randomBytes);
} else if (isAndroid) {
    let randomBytes = (length, cb) => {
        let output = Array.create("byte", length);
        new java.security.SecureRandom().nextBytes(output);
        let buf = new Buffer(android.util.Base64.encodeToString(output, android.util.Base64.DEFAULT), 'base64');
        if (cb) {
            cb(null, buf);
        } else {
            return buf;
        }
    };
    bcrypt.setRandomFallback(randomBytes);
} else {
    throw "unknown platform execution";
}