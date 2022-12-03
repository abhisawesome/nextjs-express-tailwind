#!/usr/bin/env node
import express from "express";
import * as dotenv from 'dotenv'
import next from "next";
dotenv.config()

const dev = process.env.NODE_ENV === "development";

const hostname = "localhost";
const port = 3000;

const app = next({ dev, hostname, port, customServer: true, dir: __dirname });

const handle = app.getRequestHandler();

(async () => {
  try {
    await app.prepare();
    const server = express();
    server.get("/api", (req, res) => {
      console.log(req.headers.host);
      res.json({ message: "Hello World!" });
    });
    server.all("*", (req, res) => {
      return handle(req, res);
    });
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });
  } catch (error) {
    console.log(error);
  }
})();
