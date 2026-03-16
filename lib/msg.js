const smd = require("team-bandaheali");

const conn = smd.conn;
const mek = smd.mek;

async function msg() {
  try {
    // plugins load
    smd.loadPlugins();

    if (!mek || !mek.message) return;

    const from = mek.key.remoteJid;
    const sender = mek.key.participant || mek.key.remoteJid;

    console.log("📩 Message From:", sender);

  } catch (err) {
    console.error("Msg Handler Error:", err);
  }
}

module.exports = msg;
