require('dotenv').config();
const noblox = require('noblox.js');

(async () => {
    try {
        const currentUser = await noblox.setCookie(process.env.ROBLOSECURITY);
        console.log(`✅ Roblox cookie is valid! Logged in as: ${currentUser.UserName} (ID: ${currentUser.UserID})`);
    } catch (err) {
        console.error('❌ Roblox login failed. Cookie may be invalid or expired.', err);
    }
})();
