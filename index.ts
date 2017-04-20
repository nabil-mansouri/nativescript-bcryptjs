import { isIOS, isAndroid } from "platform";
let Buffer = require('buffer/').Buffer;
import { bcrypt } from "./bcrypt";
if (isIOS) {
    // security
    let randomBytes = (length) => {
        let bytes = NSMutableData.dataWithLength(length);
        SecRandomCopyBytes(null, length, <any>bytes.mutableBytes);
        let buf = new Buffer(bytes.base64EncodedStringWithOptions(0), 'base64');
        return buf;
    };
    bcrypt.setRandomFallback(randomBytes);
} else if (isAndroid) {
    let randomBytes = (length) => {
        let output = Array.create("byte", length);
        new java.security.SecureRandom().nextBytes(output);
        let buf = new Buffer(android.util.Base64.encodeToString(output, android.util.Base64.DEFAULT), 'base64');
        return buf;
    };
    bcrypt.setRandomFallback(randomBytes);
} else {
    throw "unknown platform execution";
}
export { bcrypt };