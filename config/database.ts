import mongoose from 'mongoose';
import __CONSTANTS__ from '../config/constants';

const { MONGODB_URI } = __CONSTANTS__;

/** MongoDB connection */
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB successfully.');
})
.catch((ERROR) => {
    console.log(ERROR);
});
/** MongoDB connection */

export default mongoose.connection;