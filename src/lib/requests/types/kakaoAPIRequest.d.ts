interface LocalKeywordSearchResponse {
  documents: DocumentData[];
  meta: Meta;
}

interface Meta {
  is_end: boolean;
  pageable_count: number;
  same_name: Samename;
  total_count: number;
}

interface Samename {
  keyword: string;
  region: any[];
  selected_region: string;
}

interface DocumentData {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}
