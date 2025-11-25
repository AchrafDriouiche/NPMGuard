import fs from "fs";
import path from "path";

const blacklist = fs.readFileSync("blacklist.txt", "utf-8")
  .split("\n")
  .map(p => p.trim())
  .filter(Boolean);

const pkgPath = path.join(process.cwd(), "package.json");

if (!fs.existsSync(pkgPath)) {
  console.error("❌ package.json not found in the current directory.");
  process.exit(1);
}

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const allDeps = {
  ...pkg.dependencies,
  ...pkg.devDependencies
};

const results = [];

for (const dep in allDeps) {
  if (blacklist.includes(dep)) {
    results.push({
      Package: dep,
      Version: allDeps[dep],
      Risk: "CRITICAL",
      Status: "BLACKLISTED"
    });
  }
}

if (results.length === 0) {
  console.log("✅ SYSTEM CLEAN - No critical packages found");
} else {
  console.table(results);
}
