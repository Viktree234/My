const { execSync } = require("child_process");

function runCommand(cmd) {
  console.log(`\n👉 Running: ${cmd}`);
  try {
    execSync(cmd, { stdio: "inherit" });
  } catch (err) {
    console.error(`❌ Failed: ${cmd}`);
    process.exit(1);
  }
}

console.log("🚀 Starting production setup...");

// 1️⃣ Install dependencies
runCommand("npm install");

// 2️⃣ Build project for production
runCommand("npm run build");

// 3️⃣ Install PM2 globally
runCommand("npm install -g pm2");

// 4️⃣ Start with PM2 in production mode
runCommand("pm2 start npm --name my-nextjs-app -- run start");

// 5️⃣ Save PM2 state so it restarts after reboot
runCommand("pm2 save");
runCommand("pm2 startup");

console.log("\n✅ Your app is running in PRODUCTION mode!");
console.log("   🌐 Access it at your server's domain or IP");
console.log("   📜 pm2 logs my-nextjs-app   → View logs");
console.log("   🛑 pm2 stop my-nextjs-app   → Stop app");
console.log("   🔄 pm2 restart my-nextjs-app → Restart app");