-- Add title field to invoices table
ALTER TABLE invoices ADD COLUMN title VARCHAR(255);

-- Update existing invoices to have a default title based on invoice number
UPDATE invoices SET title = 'Invoice ' || invoice_number WHERE title IS NULL;

-- Make title required for future invoices
ALTER TABLE invoices ALTER COLUMN title SET NOT NULL; 