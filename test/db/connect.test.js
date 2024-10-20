import { db } from "../../src/database";

describe("Connect Database", () => {
    test("test connect database", async () => {
        await db.$connect();
        await db.$disconnect();
    });
})