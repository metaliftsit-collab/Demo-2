import fs from "node:fs";
import path from "node:path";

const srcClient = path.resolve("dist/client");
const destPublic = path.resolve("public");
const srcServer = path.resolve("dist/server");
const destApi = path.resolve("api");

// Handle Public Assets
if (fs.existsSync(srcClient)) {
  if (fs.existsSync(destPublic)) {
    fs.rmSync(destPublic, { recursive: true, force: true });
  }
  fs.mkdirSync(destPublic, { recursive: true });
  fs.cpSync(srcClient, destPublic, { recursive: true });
  console.log("Successfully copied dist/client to public");
}

// Handle API Server
if (fs.existsSync(srcServer)) {
  // We don't want to delete api/index.js, so we copy files individually or just skip the index.js
  const files = fs.readdirSync(srcServer);
  for (const file of files) {
    const srcPath = path.join(srcServer, file);
    const destPath = path.join(destApi, file);
    if (fs.lstatSync(srcPath).isDirectory()) {
      fs.cpSync(srcPath, destPath, { recursive: true });
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
  console.log("Successfully copied dist/server to api");
} else {
  console.error("Source directory dist/server does not exist!");
  process.exit(1);
}
