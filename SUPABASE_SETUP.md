# Supabase Setup Instructions

## 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new account or sign in
2. Create a new project
3. Wait for the project to be set up (this may take a few minutes)

## 2. Get Your Project Credentials

1. Go to your project dashboard
2. Navigate to Settings > API
3. Copy your Project URL and anon/public key

## 3. Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials.

## 4. Set Up Database Schema

1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Copy and paste the entire contents of `database-schema.sql`
4. Run the SQL script

This will create:
- All necessary tables (projects, stages, updates, notes, invoices, users, etc.)
- Row Level Security (RLS) policies
- Sample data for testing
- Indexes for performance

## 5. Configure Authentication (Optional)

If you want to add user authentication:

1. Go to Authentication > Settings in your Supabase dashboard
2. Configure your authentication providers (email, Google, etc.)
3. Set up email templates if needed

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/admin-dashboard` to test the admin dashboard
3. Navigate to `/client-dashboard` to test the client dashboard

## Database Schema Overview

### Tables Created:
- **projects**: Main project information
- **project_stages**: Project development stages
- **project_updates**: Real-time project updates
- **project_notes**: Internal project notes
- **project_deliverables**: Project deliverables
- **invoices**: Project invoices and payments
- **users**: User accounts and profiles
- **client_projects**: Relationship between clients and projects

### Features:
- Row Level Security (RLS) for data protection
- Automatic timestamps and updates
- Foreign key relationships
- Performance indexes
- Sample data for testing

## Troubleshooting

### Common Issues:

1. **"Invalid API key" error**
   - Check that your environment variables are correctly set
   - Restart your development server after adding environment variables

2. **"Table doesn't exist" error**
   - Make sure you've run the database schema SQL script
   - Check that all tables were created successfully

3. **"Permission denied" error**
   - Check that RLS policies are correctly configured
   - Verify user authentication if using auth features

4. **Data not loading**
   - Check browser console for errors
   - Verify Supabase connection in Network tab
   - Ensure environment variables are accessible

### Support:
- Check Supabase documentation: https://supabase.com/docs
- Review the database service functions in `lib/database.js`
- Check the Supabase dashboard for any error logs 