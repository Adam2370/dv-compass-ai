/**
 * Manual fixes for country, display name, and search aliases (keyed by State Dept post code).
 * Merged after import; wins over scraped link text for name/city/country/aliases/notes.
 */
export const MANUAL_POST_OVERRIDES = [
  {
    postCode: 'RDJ',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    name: 'U.S. Consulate General Rio de Janeiro',
    aliases: ['Brazil', 'Rio', 'Rio de Janeiro', 'RDJ'],
  },
  {
    postCode: 'YDE',
    city: 'Yaoundé',
    country: 'Cameroon',
    name: 'U.S. Embassy Yaoundé',
    aliases: ['Cameroon', 'Yaoundé', 'Yaounde', 'YDE'],
  },
  {
    postCode: 'PRS',
    city: 'Paris',
    country: 'France',
    name: 'U.S. Embassy Paris',
    aliases: ['France', 'Paris', 'PRS'],
  },
  {
    postCode: 'ABJ',
    city: 'Abidjan',
    country: "Côte d'Ivoire",
    name: 'U.S. Embassy Abidjan',
    aliases: ["Côte d'Ivoire", "Cote d'Ivoire", 'Ivory Coast', 'Abidjan', 'ABJ'],
  },
  {
    postCode: 'CRO',
    city: 'Cairo',
    country: 'Egypt',
    name: 'U.S. Embassy Cairo',
    aliases: ['Egypt', 'Cairo', 'CRO'],
  },
  {
    postCode: 'DHK',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'U.S. Embassy Dhaka',
    aliases: ['Bangladesh', 'Dhaka', 'DHK'],
  },
  {
    postCode: 'ABD',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    name: 'U.S. Embassy Abu Dhabi',
    aliases: ['UAE', 'United Arab Emirates', 'Abu Dhabi', 'Dubai', 'ABD'],
  },
  {
    postCode: 'FRN',
    city: 'Frankfurt',
    country: 'Germany',
    name: 'U.S. Consulate General Frankfurt',
    aliases: ['Germany', 'Berlin', 'Frankfurt', 'FRN'],
    notes: 'Germany immigrant visa post instructions are listed under Frankfurt in this dataset.',
  },
]
