-- supabase/migrations/0001_initial_schema.sql

-- Users table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    avatar TEXT,
    role VARCHAR(50),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workflows table
CREATE TABLE workflows (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_id UUID REFERENCES users(id),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    domain_tag VARCHAR(100),
    current_version_id UUID,
    visibility VARCHAR(50) DEFAULT 'private',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workflow versions table
CREATE TABLE workflow_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workflow_id UUID REFERENCES workflows(id) ON DELETE CASCADE,
    version_number INTEGER NOT NULL,
    payload JSONB,
    metadata JSONB,
    generated_by VARCHAR(255),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add foreign key constraint to workflows table
ALTER TABLE workflows
ADD CONSTRAINT fk_current_version
FOREIGN KEY (current_version_id)
REFERENCES workflow_versions(id);

-- Templates table
CREATE TABLE templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(100),
    payload JSONB,
    popularity INTEGER DEFAULT 0,
    created_by UUID REFERENCES users(id)
);

-- Comments table
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    workflow_version_id UUID REFERENCES workflow_versions(id) ON DELETE CASCADE,
    node_id VARCHAR(255),
    user_id UUID REFERENCES users(id),
    text TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Jobs table for background tasks
CREATE TABLE jobs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    type VARCHAR(100),
    status VARCHAR(50),
    payload JSONB,
    result_url TEXT,
    started_at TIMESTAMPTZ,
    finished_at TIMESTAMPTZ
);
