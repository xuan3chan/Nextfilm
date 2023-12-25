const Express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//import routes
const authUsersRoute = require("./Routes/authUsersRoute");
const authAdminRoute = require("./Routes/authAdminRoute");
const categoryRoute = require("./Routes/categoryRoute");
const adminRoute = require("./Routes/adminRoute");
const userRoute = require("./Routes/userRoute");

dotenv.config();
//mongoDB connection
connectDB();

const app = Express();
app.use(cors());
app.use(Express.json());
//Routes
app.use("/api/authuser", authUsersRoute);
app.use("/api/authadmin", authAdminRoute);
app.use("/api/category",categoryRoute);
app.use("/api/admin",adminRoute);
app.use("/api/user",userRoute);
//tạo 1 superadmin defaut
app.get("/", (req, res) => {
    res.send("Hello World!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}/`);
});
