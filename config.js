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
global.readcmds = process.env.READ_COMMAND || "false"
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

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_06_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDExMixcbiAgICAgICAgMjUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTExLFxuICAgICAgICA0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDksXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDYxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNSxcbiAgICAgICAgOCxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODMsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDg0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjksXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTY3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDExLFxuICAgICAgICAzMSxcbiAgICAgICAgMTc5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0LFxuICAgICAgICAzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjUsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm1IYXA4YS9hTVBNU2RIUURoMHBQcjNSbWNhL3lzUkdnOHBoSEczQzQ5UjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlkyR1lvaUhwUjhhTFBzSnk3T2NRcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjcxMGFhMzUtNjJmYS00YmFlLWE1ZTEtOWQ0OTE2NzA4NDU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDE1OCxcbiAgICAgIDg3LFxuICAgICAgNTcsXG4gICAgICAyMzAsXG4gICAgICAxOTAsXG4gICAgICA0MixcbiAgICAgIDQwLFxuICAgICAgNzUsXG4gICAgICAxNTAsXG4gICAgICA4LFxuICAgICAgMTAyLFxuICAgICAgMjEzLFxuICAgICAgOTYsXG4gICAgICAyNDgsXG4gICAgICAxMjAsXG4gICAgICA3NSxcbiAgICAgIDcsXG4gICAgICA4MCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTgsXG4gICAgICAxNzUsXG4gICAgICA3MSxcbiAgICAgIDE5LFxuICAgICAgMTAzLFxuICAgICAgODQsXG4gICAgICAxMDUsXG4gICAgICAyOCxcbiAgICAgIDEyNyxcbiAgICAgIDI4LFxuICAgICAgMTIsXG4gICAgICAyNTEsXG4gICAgICAxMTMsXG4gICAgICAxNjUsXG4gICAgICAxODgsXG4gICAgICAxMyxcbiAgICAgIDIxOCxcbiAgICAgIDI4LFxuICAgICAgMjAyLFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlRMMUs0QkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDExMTg2OTY3OTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1MzkwNjY1NDY4MzMyNDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IeXZ1UUdFSmFBaHJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYmNNTThvZWxhM2RnWDE3dk94NkgzeHg1MDF6b3RQMjFQa0VEdlpGdXVqYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJaQ1BRa1NaODNUNTh3MkpPaUtMQ3doZU5kRXdyaEUxdkF4UkFYTFdSZEc1Q0YzVG43aW1TakdLRWQwc3RsVktqZmNNQ0c5c1hCWEx0emZJT1pwc2xDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ3S254NmxxYVZ4UmNBZnRpT28zTkplZnVjakhrWS82blJKaFFwRVB4dm9XQjBhemFQQTg3aFhwcXpYYmVIQVM3SDlkaTRIRjd6SFAvWHExSTE4bzlqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTE4Njk2Nzk6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MTUxNTc4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTFJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMUk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwRWk1aUREY1BnOW1FY2NtbndIUHR0OHpmcVZwSis4WjBRbFhrNnd1enZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4MjEzNTg0MDAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
