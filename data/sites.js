export const sites = [
  // Flights
  { id: "skyscanner", name: "Skyscanner", url: "https://www.skyscanner.net", description: "**Compares** flights across airlines and booking sites to find the cheapest.", region: "Global", category: "flights" },
  { id: "kayak", name: "KAYAK", url: "https://www.kayak.com", description: "**Compares** hundreds of travel sites with price alerts and predictions.", region: "Global", category: "flights" },
  { id: "google-flights", name: "Google Flights", url: "https://www.google.com/travel/flights", description: "**Compares** flight prices with date grid and price tracking tools.", region: "Global", category: "flights" },
  { id: "booking-flights", name: "Booking.com Flights", url: "https://www.booking.com/flights", description: "**Books** flights alongside hotels on the same platform.", region: "Global", category: "flights" },
  { id: "expedia-flights", name: "Expedia", url: "https://www.expedia.com", description: "**Bundles** flights with hotels and cars for extra savings.", region: "Global", category: "flights" },
  { id: "trip-flights", name: "Trip.com", url: "https://www.trip.com", description: "**Books** flights to ~5,000 cities plus hotels and trains.", region: "Global", category: "flights" },
  { id: "makemytrip-flights", name: "MakeMyTrip", url: "https://www.makemytrip.com/flights", description: "India's **go-to** for domestic and international flight booking.", region: "India", category: "flights" },

  // Buses
  { id: "redbus", name: "redBus", url: "https://www.redbus.in", description: "**Books** bus tickets with live tracking across 5,200+ operators.", region: "India / Global", category: "buses" },
  { id: "flixbus", name: "FlixBus", url: "https://www.flixbus.com", description: "Europe's **cheapest** intercity buses, now in India and US.", region: "Europe / US / India", category: "buses" },
  { id: "busbud", name: "Busbud", url: "https://www.busbud.com", description: "**Searches** 2.3 million bus routes across 80+ countries.", region: "Global", category: "buses" },

  // Trains
  { id: "omio-trains", name: "Omio", url: "https://www.omio.com/trains", description: "**Compares** train tickets across Europe, UK, US, and Japan.", region: "Western Regions", category: "trains" },
  { id: "trainline", name: "Trainline", url: "https://www.thetrainline.com", description: "**Books** UK and Europe train tickets with live times and e-tickets.", region: "UK / Europe", category: "trains" },
  { id: "raileurope", name: "Rail Europe", url: "https://www.raileurope.com", description: "**Books** tickets directly from major European national railways.", region: "Europe", category: "trains" },

  // Hotels
  { id: "booking-hotels", name: "Booking.com", url: "https://www.booking.com", description: "World's **largest** selection of hotels, apartments, and hostels.", region: "Global", category: "hotels" },
  { id: "agoda", name: "Agoda", url: "https://www.agoda.com", description: "Best **prices** for hotels across Asia-Pacific plus global coverage.", region: "Global / Asia", category: "hotels" },
  { id: "hostelworld", name: "Hostelworld", url: "https://www.hostelworld.com", description: "**Backpacker** hostels worldwide with social vibes and events.", region: "Global", category: "hotels" },

  // Vacation Rentals
  { id: "airbnb", name: "Airbnb", url: "https://www.airbnb.com", description: "8M+ **local** stays from treehouses to beach villas hosted by real people.", region: "Global", category: "vacation-rentals" },
  { id: "vrbo", name: "Vrbo", url: "https://www.vrbo.com", description: "Whole **family** vacation homes: beach houses, cabins, and villas.", region: "Global", category: "vacation-rentals" },

  // Packages
  { id: "thomas-cook", name: "Thomas Cook India", url: "https://www.thomascook.in/holidays", description: "**Ready-made** holiday packages for domestic and international trips from India.", region: "India / Global", category: "packages" },
  { id: "tourradar", name: "TourRadar", url: "https://www.tourradar.com", description: "**Guided** multi-day group tours and bus trips in 160+ countries.", region: "Global", category: "packages" },

  // Cruises
  { id: "cruisebound", name: "Cruisebound", url: "https://www.cruisebound.com", description: "**Compares** prices across all major cruise lines in one search.", region: "Global", category: "cruises" },

  // Car Rentals
  { id: "rentalcars", name: "Rentalcars.com", url: "https://www.rentalcars.com", description: "**Compares** car rental deals from all major providers worldwide.", region: "Global", category: "car-rentals" },

  // Insurance
  { id: "insuremytrip", name: "InsureMyTrip", url: "https://www.insuremytrip.com", description: "**Compares** trip insurance plans from all top providers.", region: "Global", category: "insurance" },

  // eSIM
  { id: "airalo", name: "Airalo", url: "https://airalo.com", description: "**eSIM** data plans for 200+ countries, no roaming fees, instant setup.", region: "Global", category: "esim" },

  // Airport Services
  { id: "priority-pass", name: "Priority Pass", url: "https://www.prioritypass.com", description: "**Access** to 1,800+ airport lounges with any airline, any ticket.", region: "Global", category: "airport-services" }
];

export const categories = [
  { id: "flights", name: "Flights", icon: "MdFlight", slug: "flights", description: "Search and compare airline prices across the globe for your next trip.", color: "text-red-400/80" },
  { id: "buses", name: "Buses", icon: "MdDirectionsBus", slug: "buses", description: "Book tickets for 5,000+ operators with live tracking and easy routes.", color: "text-blue-400/80" },
  { id: "trains", name: "Trains", icon: "MdTrain", slug: "trains", description: "Compare rail tickets across Europe, UK, and Asia with e-ticket support.", color: "text-purple-400/80" },
  { id: "hotels", name: "Hotels", icon: "MdHotel", slug: "hotels", description: "Largest selection of hotels, rooms, and backpacker hostels worldwide.", color: "text-green-400/80" },
  { id: "vacation-rentals", name: "Vacation Rentals", icon: "MdHome", slug: "vacation-rentals", description: "Local stays from cabins to beach villas hosted by real people.", color: "text-pink-400/80" },
  { id: "packages", name: "Packages", icon: "MdCardTravel", slug: "packages", description: "Ready-made holiday packages with flights and hotels bundled.", color: "text-amber-400/80" },
  { id: "cruises", name: "Cruises", icon: "MdDirectionsBoat", slug: "cruises", description: "Compare prices across all major cruise lines in a single search.", color: "text-cyan-400/80" },
  { id: "car-rentals", name: "Car Rentals", icon: "MdDirectionsCar", slug: "car-rentals", description: "Global deals from top providers to get you on the road quickly.", color: "text-indigo-400/80" },
  { id: "insurance", name: "Insurance", icon: "MdSecurity", slug: "insurance", description: "Compare trip insurance plans to protect your international travels.", color: "text-orange-400/80" },
  { id: "esim", name: "eSIM", icon: "MdSimCard", slug: "esim", description: "Digital data plans for 200+ countries to avoid roaming fees.", color: "text-teal-400/80" },
  { id: "airport-services", name: "Airport Services", icon: "MdLocalAirport", slug: "airport-services", description: "Access airport lounges and premium services on any ticket.", color: "text-yellow-400/80" }
];
