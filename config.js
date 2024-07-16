const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923284356394";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_44_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDc4LFxuICAgICAgICA5NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDY0LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA4OCxcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDQzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgwLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU0LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA4MSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDIxLFxuICAgICAgICA5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzMsXG4gICAgICAgIDM2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgODksXG4gICAgICAgIDQ3LFxuICAgICAgICA2OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc3LFxuICAgICAgICA4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAzMixcbiAgICAgICAgODgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgODIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzOCxcbiAgICAgICAgODksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA4NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIzdE9qSEp0Nzh1eWhOYzNlRWtYWnFQek5leEFSREp6ZFVZMmJpSERac29JPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIU0xiX2VNclJZLS1VYmJ5RXNYbDhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjczN2RhMDI5LWI3ZDgtNGJkYy1iNGM2LTM4YmE3ZGRkNTdjYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAyNDYsXG4gICAgICAyMDUsXG4gICAgICA2NSxcbiAgICAgIDExLFxuICAgICAgMzAsXG4gICAgICA2NyxcbiAgICAgIDQ0LFxuICAgICAgMjYsXG4gICAgICAxMTEsXG4gICAgICAxOTYsXG4gICAgICAyMzgsXG4gICAgICAyNTQsXG4gICAgICAxMDIsXG4gICAgICAyMDIsXG4gICAgICAxOTgsXG4gICAgICAxOTQsXG4gICAgICAxMDksXG4gICAgICAyNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzEsXG4gICAgICAyMzQsXG4gICAgICAxMjIsXG4gICAgICAxNTQsXG4gICAgICA5MCxcbiAgICAgIDg1LFxuICAgICAgMTE2LFxuICAgICAgMTQwLFxuICAgICAgMjI1LFxuICAgICAgMTY5LFxuICAgICAgMjA2LFxuICAgICAgODEsXG4gICAgICAxMCxcbiAgICAgIDIxMSxcbiAgICAgIDM3LFxuICAgICAgMjE0LFxuICAgICAgMTk2LFxuICAgICAgNDksXG4gICAgICAyMTEsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSTEhGRkU2UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMzU4NDU3Mzk4Mzg1NjozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdmrvwnZqu8J2atfCdkJgg8J2QivCdmrTwnZqv8J2QliDwnZqz8J2atVwiLFxuICAgIFwibGlkXCI6IFwiNDM0Njk3MzMxNDY2NjU6MzVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTTdaNGx3UXM0N2F0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJuNW9wTDg5WFNzRWRjTXpZaG90U2czNldXeVRpbHpHU3BwWnBqNmFKbmdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIi9uTHBPWUpVUDZsS2UyZTFkMTNpa3dlV3FKSmRqWEhwSSswcklVandYNmpjbEhrOWxyeUxYMlVBdFhPMUZZRVpWbmY3N1BGTGRLVEtHK21VdTVQQUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1IU3AvWGRBelpUeDA4VmNQTC9qMjhpZFdMbkhQYXdocUlvK0J2YVl0KzBjbm5rWk91TEJaVUw0Yy94OUxYSXBvbUIxUVZnYnNNUGNCMkM3U3FaMkJnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjM1ODQ1NzM5ODM4NTY6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMTQxMDQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSS83XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJLzcuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Shaibi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
