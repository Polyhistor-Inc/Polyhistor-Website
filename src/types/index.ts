export interface Tribe {
  tribe_id: string;
  label: string;
  icon: string;
  color: string;
  rule_score: number;
  embedding_score: number;
  final_score: number;
}

export interface PlaceResult {
  id?: string;
  name: string;
  category?: string;
  main_category?: string;
  taxonomy?: {
    primary: string;
    hierarchy: string[];
    alternates: string[] | null;
  };
  latitude: number;
  longitude: number;
  distance_meters?: number;
  vibe_match_score?: number;
  score?: number;
  temporal_state?: string;
  next_transition?: number | null;
  tribe_density?: number;
  tribes?: Tribe[];
  estimated_wait_minutes?: number;
  recommendation?: string;
}

export interface SuggestionCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  queries: { query: string; city: string; cityLabel: string }[];
}

export interface SuggestionsResponse {
  categories: SuggestionCategory[];
  meta: { total_categories: number; total_queries: number };
}
