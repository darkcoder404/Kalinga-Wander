import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import tourRoute from "./routes/tours.js";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js";
import bookingRoute from "./routes/bookings.js";
import paymentRoutes from "./routes/payment.js";

dotenv.config();
const app = express();
// const whitelist = ['http://localhost:3000', 'http://example2.com'];
// app.options('*', cors());
// const corsOptions = {
//   credentials: true,
//   origin: (origin, callback) => {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// const corsOptions = {
//   origin:'*',
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus:200,
// };
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
 res.setHeader('Access-Control-Allow-Origin', 'https://kalingawandersoriginal.vercel.app')
res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const port = process.env.PORT || 8000;
// const corsOptions = {
//   origin: true,
//   credentials: true,
// };

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connected failed");
  }
};

app.get('/', (req, res) => {
  res.send('Hello World!')
  })
// app.use(cors(corsOptions));
// app.use(cors());
app.use(express.json());

app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/payment/", paymentRoutes);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});

