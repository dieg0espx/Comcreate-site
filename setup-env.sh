#!/bin/bash

echo "Setting up Supabase environment variables..."
echo ""

# Check if .env.local already exists
if [ -f ".env.local" ]; then
    echo "⚠️  .env.local already exists. Backing up to .env.local.backup"
    cp .env.local .env.local.backup
fi

# Create .env.local with the provided URL
cat > .env.local << EOF
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://qwojdjrtgrlfdgkfjoej.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here

# Note: Replace 'your_anon_key_here' with your actual anon key from Supabase dashboard
# Go to Settings > API in your Supabase dashboard to find the anon/public key
EOF

echo "✅ .env.local file created!"
echo ""
echo "📋 Next steps:"
echo "1. Go to your Supabase dashboard: https://supabase.com/dashboard"
echo "2. Navigate to Settings > API"
echo "3. Copy the 'anon public' key (not the service role key)"
echo "4. Replace 'your_anon_key_here' in .env.local with the actual anon key"
echo "5. Restart your development server: npm run dev"
echo ""
echo "🔗 Your Supabase project URL: https://qwojdjrtgrlfdgkfjoej.supabase.co" 