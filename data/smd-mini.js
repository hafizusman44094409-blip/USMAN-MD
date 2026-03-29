const smd = require("team-bandaheali");
const db = smd.db;

async function connectDb() {
  try {
    await db.connect();
    console.log("USMAN-MD database connected");
  } catch (err) {
    console.error("Database connection failed:", err);
  }
}

module.exports = connectDb;
