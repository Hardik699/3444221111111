import serverless from "serverless-http";
import { createServer } from "../server";

// Wrap the express app with serverless-http so Vercel can run it as a function
const handler = serverless(createServer());

export default handler;
