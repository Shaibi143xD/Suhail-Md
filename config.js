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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_51_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjksXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1MyxcbiAgICAgICAgNSxcbiAgICAgICAgOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MCxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzksXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNSxcbiAgICAgICAgOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMixcbiAgICAgICAgMTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUxLFxuICAgICAgICA1MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICA5MixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICA5NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUxLFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NyxcbiAgICAgICAgODEsXG4gICAgICAgIDU0LFxuICAgICAgICA5OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIweTRHU2V1ZWtqczdMaWpIUER5ZHNtQmV2R3hWT09lbTBTOVVMVGZOS3pNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExNzIwMjEyM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMEM5QzlFM0E4RDAzNTRGRjk2QkY3RkQ3NjJFNTgwRDRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTY4Njg2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdQY2ZENHJWUkJHR0liczFzMk80U2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGU1OTY2N2UtMTg3Mi00OWM2LWI2OTQtNTRhYTA0YjZhYTY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MSxcbiAgICAgIDE2NyxcbiAgICAgIDY3LFxuICAgICAgMTYwLFxuICAgICAgMzcsXG4gICAgICA3MyxcbiAgICAgIDE1OSxcbiAgICAgIDExNyxcbiAgICAgIDIxNSxcbiAgICAgIDEyNixcbiAgICAgIDIxNCxcbiAgICAgIDEzMCxcbiAgICAgIDgxLFxuICAgICAgMjE1LFxuICAgICAgMTU4LFxuICAgICAgOTAsXG4gICAgICAxNjAsXG4gICAgICA2MyxcbiAgICAgIDI0LFxuICAgICAgMTUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgNjcsXG4gICAgICAxMTYsXG4gICAgICA5NyxcbiAgICAgIDIzMCxcbiAgICAgIDEzLFxuICAgICAgMTYzLFxuICAgICAgMTc0LFxuICAgICAgMTYyLFxuICAgICAgMTU4LFxuICAgICAgMTYwLFxuICAgICAgMTM3LFxuICAgICAgMjE5LFxuICAgICAgOTEsXG4gICAgICAxMjIsXG4gICAgICAyMDgsXG4gICAgICAxMzQsXG4gICAgICAyOSxcbiAgICAgIDE2NSxcbiAgICAgIDE5MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJUWkxMTFdBUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTE3MjAyMTIzOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjgzMzAxMjQzMDY0MzUxOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwi8J2XmfCdl7bwnZeu8J2YhyDwnZeV8J2XlDU28J+HtfCfh7Dwn5GRXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkRRMlo0SEVPZkx6N1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXQWhaNjgyaHovbzFnTk1nMkEra1diMHV6bTlZTTM1SzFFcndSUXRhdHpBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlc5UHM3QjJicHBoUjZtamR1d1NOS0ZqOXovNEVjNThhbUZsUXBaanczNkk5dGcyVWdEb1FiRi9mayt1cjBrU0lKK0xVMi85bUZGWFVnWld3U1RQZUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkpWdGpEcENlUFNnN0FYZ1dvLzJPWkZsOXduNm91N1BJK2FEU1lnayszaDVFWGFRaHlpWlhCYzY3MGo3OWVEMUs2T2pQMmZSWlBkaTA4ZExXUkxiZkJRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzExNzIwMjEyMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk2ODY4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUg2NFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSDY0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwibjdTSmdFTVpJMDljNWdTbWV6ZHFSbmZGQlg1U2ZPNEJTS3FmbmlsQVVKND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQzNDMxMjQ3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
