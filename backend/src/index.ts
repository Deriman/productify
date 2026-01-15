import express  from "express";
import cors from 'cors';
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(cors({
    origin: ENV.FRONTEND_URL,
}))
app.use(clerkMiddleware()); // auth middleware object will be attached to req
app.use(express.json()); // parses JSON requests bodies
app.use(express.urlencoded({ extended: true })); // parses form data (like HTML forms)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(ENV.PORT, () => {
    console.log('Server is running on http://localhost:' + ENV.PORT);
});