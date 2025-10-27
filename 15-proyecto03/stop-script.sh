#!/bin/zsh

echo "🛑 Stopping dev environment..."

# --- Function: Stop process by keyword ---
stop_process() {
  local keyword=$1
  local label=$2

  echo ""
  echo "🔍 Checking for $label processes..."
  local pids=$(pgrep -f "$keyword")

  if [[ -n "$pids" ]]; then
    echo "⚙️  Found $label processes:"
    ps -p $pids -o pid,comm | sed '1d' | awk '{print "   PID: "$1" → "$2}'
    echo "💥 Killing $label..."
    pkill -f "$keyword"
    echo "✅ $label stopped."
  else
    echo "🟢 No running $label processes found."
  fi
}

# --- 1. Stop frontend ---
stop_process "npm run dev" "Frontend (React/Vite)"

# --- 2. Stop backend ---
stop_process "npm start" "Backend (Node API)"

# --- 3. Stop MongoDB service (Homebrew) ---
echo ""
echo "🧱 Stopping MongoDB service..."
brew services stop mongodb-community

echo ""
echo "🏁 All dev processes stopped."
