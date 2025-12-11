-- Search optimization and caching tables
CREATE TABLE IF NOT EXISTS search_cache (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  normalized_query TEXT NOT NULL,
  results JSONB NOT NULL,
  result_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP + INTERVAL '24 hours',
  hit_count INT DEFAULT 1,
  UNIQUE(normalized_query)
);

CREATE TABLE IF NOT EXISTS search_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  query TEXT NOT NULL,
  normalized_query TEXT NOT NULL,
  result_count INT,
  clicked_product_id TEXT,
  clicked_position INT,
  session_id TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, query, created_at)
);

CREATE TABLE IF NOT EXISTS search_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  query TEXT NOT NULL,
  normalized_query TEXT NOT NULL,
  search_count INT DEFAULT 1,
  click_through_rate DECIMAL(5,2) DEFAULT 0,
  average_result_position DECIMAL(5,2) DEFAULT 0,
  last_searched TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  trending_score DECIMAL(8,2) DEFAULT 0
);

CREATE TABLE IF NOT EXISTS product_search_metadata (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id TEXT NOT NULL UNIQUE,
  search_keywords TEXT[] NOT NULL,
  semantic_tags TEXT[] NOT NULL,
  color TEXT[],
  size TEXT[],
  style TEXT[],
  use_case TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS search_suggestions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text TEXT NOT NULL UNIQUE,
  type TEXT DEFAULT 'search', -- search, trending, brand, category
  popularity_score INT DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_search_cache_expires ON search_cache(expires_at);
CREATE INDEX idx_search_cache_hit_count ON search_cache(hit_count DESC);
CREATE INDEX idx_search_history_user_id ON search_history(user_id, created_at DESC);
CREATE INDEX idx_search_history_normalized ON search_history(normalized_query);
CREATE INDEX idx_product_search_metadata_keywords ON product_search_metadata USING gin(search_keywords);
CREATE INDEX idx_product_search_metadata_tags ON product_search_metadata USING gin(semantic_tags);
CREATE INDEX idx_search_analytics_trending ON search_analytics(trending_score DESC);
CREATE INDEX idx_search_suggestions_popularity ON search_suggestions(popularity_score DESC);

-- Enable full-text search
ALTER TABLE product_search_metadata ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_cache ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_suggestions ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Anyone can read search suggestions" ON search_suggestions FOR SELECT USING (true);
CREATE POLICY "Anyone can read search cache" ON search_cache FOR SELECT USING (true);
CREATE POLICY "Anyone can read product search metadata" ON product_search_metadata FOR SELECT USING (true);

CREATE POLICY "Users can read own search history" ON search_history 
  FOR SELECT USING (user_id = auth.uid());
CREATE POLICY "Users can insert own search history" ON search_history 
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Read own analytics" ON search_analytics FOR SELECT USING (true);
