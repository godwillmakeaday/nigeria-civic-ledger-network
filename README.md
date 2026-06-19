# Nigeria Civic Ledger Network

A complete Next.js App Router website showing how Nasarawa Heartland can scale into a national civic records and state development observatory network.

## Termux

```bash
mkdir -p ~/projects
cd ~/projects
unzip /sdcard/Download/nigeria-civic-ledger-network.zip -d .
cd nigeria-civic-ledger-network
npm install
npm run dev
```

Open `http://localhost:3000/network`.

## GitHub

```bash
git init
git add .
git commit -m "Nigeria Civic Ledger network prototype"
git branch -M main
gh repo create nigeria-civic-ledger-network --public --source=. --remote=origin --push
```
