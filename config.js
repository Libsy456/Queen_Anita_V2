//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347059459985";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpBTUM1QUpBQzVaK2locXRrYnVvV3U0MTdMdUJpcThKbFFiM0dUUDNXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWJWc21tZXovVndOUHpPNWx3UkdGTzQrSnNPZCtnRzY4aXFlSHc1YVVFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTjNvdUZrSjg4TXNVVE8yc1VzeHFYcU1MZ25VR2QvV1ZlL3NBdENMSG1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4cXpqQ2tWTUM2VERSVmc0ZGtoMXU2ekVhZjIvQy9nVWI3VTMzR3hCTUU4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDcFl2UnZ3SjZjZTd3UjF1dERUU0orVkQxU0E0bWhueVFZL291L0JHRWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd6UnJqWTR0am1YT1Z5NW94c0djMWttV3JtTlhUYUJqYUZmRld4d0lYMHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU5uS3RVbDNZc2VicnMrRDVISUJIdUc3YnpObTIyajdIVERIOGxnZFhrOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0tOdVZ5WXcxMnZBUVZTTUJ3NmYxUkZFR2JwMmZQMmhpY0phaTc1OE0zOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img1VmFqbHlUWlQ5ajI5NTBDWDdRSUY4d28yRmR6bGpRalIxU1ZMS3NuZk4vMnVtUDRVZVF2K0UyVGRvVDgxRlZsem8yQlhhQjBXMjEvMWltREVSMmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQzLCJhZHZTZWNyZXRLZXkiOiJsTVFwdi9jamY1dTZKQ0Rja1R5S0pTSXFwRng2aWtnOU1Fam9BaHAyVnNBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNTk0NTk5ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkFDREVERjAzNkZENzdGMDIyOTU0RjVGMzM5QTcwM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzU1NjkyMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN1pOS3Z6ZGNURHlpSDVwV0R0STh0ZyIsInBob25lSWQiOiJiZGJmZGYyYy02NDg5LTRiYmItYjk0ZS0zZDY4NDIxOWZmZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWk9tdXA1WTFKQk5OcVJwaFRrSk1kU1IxeW9FPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZrRTNMb0F6ZFBIeENUekNEUHJ0L2QzMnEvcz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJTM0daWkxGNCIsIm1lIjp7ImlkIjoiMjM0NzA1OTQ1OTk4NToyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOL3NrdE1IRUtYMXo3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJCOVkvZUJOQnBHVGJQUkhTd2didmhDNDN4UnlBSXNleWhiNWorbGNPN21ZPSIsImFjY291bnRTaWduYXR1cmUiOiJZZWVFTU5nMUpDU2NXcEIrZElxT1l2ZTZ6YU5uNWhtMEhzQys1dDFjVFU0cWpvdFM1T1E3WldYNEpDV3FpRmNNQzJ5a3VMUlQ3cVNDb1A5dGVOUXRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidlZUdXY0UGVLa2ljRnBONFIrbC9EbEtPbjVxekdmMlYwNXYydEtPWkl2eUQyQXFiYndjQXVNMk5LWDZzTjJpbzZDRVM2dEs2czl3NDBWM2RJSEdUamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDU5NDU5OTg1OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUWZXUDNnVFFhUmsyejBSMHNJRzc0UXVOOFVjZ0NMSHNvVytZL3BYRHU1bSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzU1NjkxNn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
