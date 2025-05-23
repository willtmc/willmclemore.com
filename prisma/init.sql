-- Initialize local development database
-- This file runs when the PostgreSQL container starts for the first time

-- Create extensions that might be useful for the application
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- The database and user are already created by the environment variables
-- This file is for any additional setup needed 