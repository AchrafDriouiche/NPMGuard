# Blacklist Analyzer 🔍

A Node.js tool to scan your project's `package.json` against a **blacklist of npm packages**.  
Detects whether blacklisted packages are **used**, **not used**, or **not installed**.

---

## 🚀 Features

- Line-by-line reporting of blacklisted packages
- Detects usage in JS/TS source files
- Fetch blacklist dynamically from Pastebin
- Supports CommonJS & ES Modules
- Lightweight & easy to integrate in CI/CD

---

## 🛠️ Requirements

- Node.js ≥ 18
- Project with `package.json`
- Internet connection to fetch blacklist (or local file option)
- Optional (for Node <18):
```bash
npm install node-fetch
```

---

## ⚡ Installation

1. Clone or download the repository  
2. Create `analyzer.js` in your project root with the provided code  
3. Ensure `package.json` includes:
```json
{
  "type": "module"
}
```

---

## ▶️ Usage

```bash
node analyzer.js
```

**Example output:**
```
🔍 BLACKLIST USAGE REPORT

🚫 package [@asyncapi/diff] not installed  X
✅ package [posthog-core] used
🚫 package [@ensdomains/blacklist] not used  X
```

**Legend:**
- ✅ `used` → Installed and imported/required  
- 🚫 `not used X` → Installed but **not imported**  
- 🚫 `not installed X` → Blacklisted but not in `package.json`

---

## ⚙️ Configuration

- **Blacklist source**:  
```js
const blacklistUrl = "https://pastebin.com/raw/z3Ue2gmN";
```
- Scans files: `.js`, `.ts`, `.jsx`, `.tsx`  
- Ignores: `node_modules`, `.git`

---

## 💡 Tips

- Run before deployment to catch unsafe packages  
- Redirect output to a file:
```bash
node analyzer.js > blacklist-report.txt
```
- Integrate with Git pre-commit hooks or CI/CD pipelines

---

## 🔮 Advanced (Optional)

- Detect dynamic imports: `import('package')`  
- Export report to JSON/CSV  
- Auto-remove unused blacklisted packages  

---

## 📄 License

MIT License © YourName

