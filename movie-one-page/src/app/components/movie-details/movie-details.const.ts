import {ValueLabel} from "../shared/shared.types";

export const MovieDetailLabels: ValueLabel[] = [
  { property: 'title' },
  { property: 'overview' },
  { label: 'Genres:', property: 'genreString' },

]

export const MoreInfoLabels: ValueLabel[] = [
  { label: 'Visit', property: 'homepage', addLink: true },
  { label: 'Release date:', property: 'release_date', isDate: true },
  { label: 'Produced in:', property: 'productionCountryString' },
  { label: 'Produced by:', property: 'productionCompanyString' },
]
