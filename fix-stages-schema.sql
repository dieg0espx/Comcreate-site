-- Fix for project_stages table - Add missing estimated_duration column
-- Run this script in your Supabase SQL editor

-- Add estimated_duration column to project_stages table
ALTER TABLE project_stages 
ADD COLUMN estimated_duration INTEGER DEFAULT 0;

-- Update existing stages with default estimated duration
UPDATE project_stages 
SET estimated_duration = 7 
WHERE estimated_duration IS NULL OR estimated_duration = 0;

-- Add comment to document the column
COMMENT ON COLUMN project_stages.estimated_duration IS 'Estimated duration of the stage in days';

-- Verify the column was added
SELECT column_name, data_type, is_nullable, column_default 
FROM information_schema.columns 
WHERE table_name = 'project_stages' 
AND column_name = 'estimated_duration'; 