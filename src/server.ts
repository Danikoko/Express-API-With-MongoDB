import express, { Application } from 'express';
import mongoose from 'mongoose';
import routes from '../config/routes';
import __CONSTANTS__ from '../config/constants';

const { MONGODB_URI } = __CONSTANTS__;

const app: Application = express();

/** Indicate Express app can accept JSON */
app.use(express.json());
/** Indicate Express app can accept JSON */

/** Indicate Express app can accept form data */
app.use(express.urlencoded({
    extended: false
}));
/** Indicate Express app can accept form data */

/** Routes */
app.use('/', routes);
/** Routes */

/** MongoDB connection */
mongoose
.connect(MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB successfully.');
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000.');
    });
})
.catch((ERROR) => {
    console.log(ERROR);
});
/** MongoDB connection */