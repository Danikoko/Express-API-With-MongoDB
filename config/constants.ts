/** Import your MONGODB_PASSWORD */
import __SENSITIVE_DATA__ from "./sensitiveData";
const { MONGODB_PASSWORD } = __SENSITIVE_DATA__;
/** Import your MONGODB_PASSWORD */

// Or add here
// const MONGODB_PASSWORD: string = 'ENTER_PASSWORD_HERE';
const MONGODB_URI: string = `mongodb+srv://root:${MONGODB_PASSWORD}@danikokoapi.d5xg6bc.mongodb.net/?retryWrites=true&w=majority`;

const __CONSTANTS__ = {
    MONGODB_PASSWORD,
    MONGODB_URI
}

export default __CONSTANTS__;