#!/bin/zsh

# --- CONFIGURATION ---
BACKEND_PATH="/Users/ordenador12/Repositorios/Master en React/api-rest-node"
FRONTEND_PATH="/Users/ordenador12/Repositorios/Master en React/15-proyecto03"

echo "🚀 Launching dev environment..."

# --- 1. Ensure MongoDB is running ---
if brew services list | grep -q "mongodb-community.*started"; then
  echo "🟢 MongoDB is running."
else
  echo "🟡 Starting MongoDB service..."
  brew services start mongodb-community
fi

# --- 2. Open both projects in one Terminal window with tabs ---
osascript <<EOF
tell application "Terminal"
  activate
  # first tab: backend
  do script "cd '$BACKEND_PATH' && npm start"
  delay 1
  # second tab: frontend
  tell application "System Events" to tell process "Terminal" to keystroke "t" using command down
  do script "cd '$FRONTEND_PATH' && npm run dev" in selected tab of front window
end tell
EOF

echo "✅ Backend and frontend launched!"
