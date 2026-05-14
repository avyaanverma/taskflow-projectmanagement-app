const app = require('./src/app');
const connectToDb = require('./src/config/db');
const {PORT} = require("./src/config/cred");


app.listen(PORT, () => {
    connectToDb();
    console.log(`Server is running on port http://localhost:${PORT}`)
});