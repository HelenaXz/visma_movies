export interface MovieCardItem {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  release_date: string;
  title: string;
}
export interface MovieDetailsItem {
  backdrop_path: string;
  title: string;
  overview: string;
  genres: Genre[];
  production_countries: ProdCountry[];
  production_companies: ProdCompany[];
  homepage: string;
  release_date: string;
  genreString?: string;
  productionCountryString?: string;
  productionCompanyString?: string;
}

export interface Genre {
  id: number;
  name: string;
}
interface ProdCountry {
  ProdCountry: string;
  name: string;
}
interface ProdCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ValueLabel {
  property: string;
  label?: string;
  addLink?: boolean;
  isDate?: boolean;
}

export interface SearchResults {
  results: MovieCardItem[];
  page: number;
  total_pages: number;
  total_results: number;
}
