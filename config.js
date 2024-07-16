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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_03_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA3LFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE5LFxuICAgICAgICAzNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgNTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICA2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICA1NixcbiAgICAgICAgMTM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDksXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDk2LFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDUxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTkxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMyxcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICA5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicm9KK1ROZnB3OXZRTVJFb0dsNUxueEVMN3V3aWlrbW9FNURNVWk0RUhOMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTzhUeUdxVFlRQVNnYUg2TXFoVENVQVwiLFxuICBcInBob25lSWRcIjogXCI2ZjNmNGRjNS1hM2UyLTQ5MzktODU4Yi05YWY1OGQzY2VlZDBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgODMsXG4gICAgICAyMzEsXG4gICAgICAxNDksXG4gICAgICAxMDQsXG4gICAgICA4MixcbiAgICAgIDgzLFxuICAgICAgMjAwLFxuICAgICAgMTc1LFxuICAgICAgMTU0LFxuICAgICAgMTU5LFxuICAgICAgMTY1LFxuICAgICAgMjEsXG4gICAgICAxMTksXG4gICAgICA2MyxcbiAgICAgIDYyLFxuICAgICAgMTU5LFxuICAgICAgMjA2LFxuICAgICAgMTc5LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNSxcbiAgICAgIDUsXG4gICAgICAyMzYsXG4gICAgICAxOTksXG4gICAgICAxMSxcbiAgICAgIDEwNCxcbiAgICAgIDE2OCxcbiAgICAgIDUyLFxuICAgICAgMjAsXG4gICAgICAxMDYsXG4gICAgICAxNDUsXG4gICAgICA4LFxuICAgICAgMTQyLFxuICAgICAgMjI4LFxuICAgICAgMTY5LFxuICAgICAgMTY2LFxuICAgICAgMzcsXG4gICAgICAyMjIsXG4gICAgICAxOTksXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOU5EQkUzQzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjM1ODQ1NzM5ODM4NTY6MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZq78J2arvCdmrXwnZCYIPCdkIrwnZq08J2ar/CdkJYg8J2as/CdmrVcIixcbiAgICBcImxpZFwiOiBcIjQzNDY5NzMzMTQ2NjY1OjM3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05EWjRsd1EzOC9hdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibjVvcEw4OVhTc0VkY016WWhvdFNnMzZXV3lUaWx6R1NwcFpwajZhSm5nUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2SEJrRDkzK1d3c01SRFVPcDRpYUpBd2hsOVB0eWNvb012a1RiTndqUHRqSFhyL3E1Mm5WWjdvZHNsRTgyQVpnWStLOU9MYzM5c3pJbmdneGxqbTBEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2NmZ6QTlEK0JzVHl0Umc1TWY2REpEcWN2ekZ1Y1g3QUQ3eVpPTlJNam1rU1dXdFJSeU5WRUlQT3RoREtRb0tkV1hlcVpLcjN4N2xZcFFrRlh4THFCdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIzNTg0NTczOTgzODU2OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE0OTQxMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpBSFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkFILmpzb24iOiAie1wia2V5RGF0YVwiOlwiY2pLOG9PVEs5cHdpV0RVVzU5WFZ3eXRsai9LcVVvUWlaZUdKUGR0WXd6dz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ1NTUwODcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExNDg5NDgwMDhcIn0iCn0="  // PUT your SESSION_ID 


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
