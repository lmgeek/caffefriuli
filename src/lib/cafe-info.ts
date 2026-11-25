export const cafeInfo = {
  name: 'Caffè Friuli',
  city: 'Latina',
  country: 'Italia',
  streetAddress: 'Corso della Repubblica 299',
  postalCode: '04100',
  phones: ['+39 338 172 4875', '+39 333 177 3333'],
  email: 'info@caffefriuli.it',
  openingHours: 'Lunedì – Giovedì: 07:00 – 21:00\nVenerdì: 07:00 – 23:00\nSabato: 07:00 – 01:00\nDomenica: 15:00 – 21:00',
  whatsappNumber: '+39 338 172 4875',
  instagramUrl: 'https://www.instagram.com/cafffefriuli_latina/',
  facebookUrl: 'https://www.facebook.com/caffefriuli/?rf=138237256224231',
  legalDetails: '',
  privacyUrl: '',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caff%C3%A8%20Friuli%2C%20Corso%20della%20Repubblica%20299%2C%2004100%20Latina',
};

export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: cafeInfo.name,
  telephone: cafeInfo.phones[0],
  email: cafeInfo.email,
  sameAs: [cafeInfo.facebookUrl, cafeInfo.instagramUrl],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '07:00', closes: '21:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '07:00', closes: '23:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '07:00', closes: '01:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '15:00', closes: '21:00' },
  ],
  address: { '@type': 'PostalAddress', streetAddress: cafeInfo.streetAddress, postalCode: cafeInfo.postalCode, addressLocality: cafeInfo.city, addressCountry: 'IT' },
};