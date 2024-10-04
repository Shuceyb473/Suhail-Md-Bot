const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111869679";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "aztec_md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "its me shuceyb",

  sessionName:process.env.SESSION_ID || "SUHAIL_04_10_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDMyLFxuICAgICAgICAxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQwLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNixcbiAgICAgICAgNDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMixcbiAgICAgICAgMTc5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgsXG4gICAgICAgIDI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDkxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImdDeStZU0l5MDJYVWdRL3R4Rm9RaS9panBrZWR0MlhzOG8vaTl2cEVTM1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhtSDRybzh0UUltcnVXUzRHUGVUUUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDBmZWNmNjctYmNiMC00NzJlLTkzMjItMTNjYmRiZjg4MTIxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAxODgsXG4gICAgICAxNCxcbiAgICAgIDE4NixcbiAgICAgIDIyMixcbiAgICAgIDM0LFxuICAgICAgMTE4LFxuICAgICAgMTk5LFxuICAgICAgMTcyLFxuICAgICAgNzYsXG4gICAgICAxLFxuICAgICAgMTIzLFxuICAgICAgMjAsXG4gICAgICAxMTksXG4gICAgICAxMzEsXG4gICAgICAyMTIsXG4gICAgICA3MCxcbiAgICAgIDE0MSxcbiAgICAgIDI0MyxcbiAgICAgIDk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NSxcbiAgICAgIDExOSxcbiAgICAgIDQ5LFxuICAgICAgMjUxLFxuICAgICAgMTI5LFxuICAgICAgMTYxLFxuICAgICAgMTMsXG4gICAgICAxNDYsXG4gICAgICA2NSxcbiAgICAgIDIxNSxcbiAgICAgIDE5OSxcbiAgICAgIDI4LFxuICAgICAgODUsXG4gICAgICAxNjksXG4gICAgICAxMzQsXG4gICAgICAyMTAsXG4gICAgICAxNDgsXG4gICAgICA5OSxcbiAgICAgIDI1LFxuICAgICAgMzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVRDNlhHNFdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMTg2OTY3OTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzkwNjY1NDY4MzMyNDo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01EeXZ1UUdFSkRWL2JjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmNNTThvZWxhM2RnWDE3dk94NkgzeHg1MDF6b3RQMjFQa0VEdlpGdXVqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuRGs3RmtmOStJaE0zMlVBWjZIMUU3VGtIVlFIaGhZbzJwSGJSVlVsYmJtMG9mc0FFTXZtZlRXM2RXODBpZEhIVEtOOThtUjlUZWlndTRYMTNuVE1DQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLUDRYUFhlZmFicUJtcFM1MWl4RUNNbXV0WTNieEQwTUx3WUtsVUNPS21iRU1QR0R4M3Nvc2JkRFVqMFhST0VvS2tNVW54S1pVcmh6UXc4ZXQwUm9oUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTE4Njk2Nzk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDE0OTk2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwRWk1aUREY1BnOW1FY2NtbndIUHR0OHpmcVZwSis4WjBRbFhrNnd1enZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MjEzNTg0MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyODAxNTAwMDAxNVwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
