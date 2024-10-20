import request from "supertest";
import express from "express";

test("test server is running ok", async () => {
    const app = express();
    
    app.get("/", (req, res) => {
        res.send("OK");
    });

    const result = await request(app).get('/');
    expect(result.text).toBe("OK");
});