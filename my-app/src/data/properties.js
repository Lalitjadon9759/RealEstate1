const properties = [
  {
    id: "abc123",
    title: "Modern 3BHK near City Park",
    price: 12500000,
    currency: "₹",
    status: "Available",
    address: "112 Park Lane, Indore, MP",
    bedrooms: 3,
    bathrooms: 3,
    areaSqft: 1650,
    amenities: ["Gym", "Swimming Pool", "Basement Parking", "24x7 Security"],
    description:
      "Sunlit corner apartment with south-facing balconies, modular kitchen, and smart home automation.",
    location: { lat: 22.7196, lng: 75.8577 },
    media: {
      images: [
        { url: "https://www.freepik.com/free-photo/analog-landscape-city-with-buildings_31261387.htm#fromView=keyword&page=1&position=0&uuid=18fefee8-5ddb-409d-83ee-978fc7efd077&query=Real+estate", alt: "Front elevation" },
        { url: "", alt: "Living room" },
        { url: "/media/p3.png", alt: "Kitchen" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "def456",
    title: "Luxury Villa with Private Pool",
    price: 32500000,
    currency: "₹",
    status: "Available",
    address: "45 Palm Residency, Bhopal, MP",
    bedrooms: 5,
    bathrooms: 6,
    areaSqft: 4200,
    amenities: ["Private Pool", "Garden", "Home Theater", "Solar Power"],
    description:
      "Elegant villa with Italian marble flooring, landscaped garden, and smart lighting.",
    location: { lat: 23.2599, lng: 77.4126 },
    media: {
      images: [
        { url: "https://www.freepik.com/free-photo/office-buildings_1242862.htm#fromView=keyword&page=1&position=39&uuid=18fefee8-5ddb-409d-83ee-978fc7efd077&query=Real+estate", alt: "Villa front view" },
        { url: "/media/villa2.webp", alt: "Private pool" },
        { url: "/media/villa3.png", alt: "Master bedroom" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=abc123xyz",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "ghi789",
    title: "Cozy 2BHK Apartment Downtown",
    price: 8500000,
    currency: "₹",
    status: "Pending",
    address: "78 MG Road, Indore, MP",
    bedrooms: 2,
    bathrooms: 2,
    areaSqft: 980,
    amenities: ["Lift", "Security", "Covered Parking"],
    description:
      "Compact apartment with modern interiors, ideal for working professionals.",
    location: { lat: 22.724, lng: 75.876 },
    media: {
      images: [
        { url: "https://www.freepik.com/free-ai-image/modern-residential-district-with-green-roof-balcony-generated-by-ai_40970640.htm#fromView=keyword&page=1&position=2&uuid=18fefee8-5ddb-409d-83ee-978fc7efd077&query=Real+estate", alt: "Building exterior" },
        { url: "/media/apt2.webp", alt: "Living room" },
        { url: "/media/apt3.png", alt: "Bedroom" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=def456uvw",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "jkl012",
    title: "Elegant Penthouse with Rooftop Garden",
    price: 45000000,
    currency: "₹",
    status: "Sold",
    address: "12 Skyline Towers, Indore, MP",
    bedrooms: 4,
    bathrooms: 5,
    areaSqft: 5200,
    amenities: ["Rooftop Garden", "Infinity Pool", "Private Elevator", "Home Office"],
    description:
      "Exclusive penthouse with panoramic city views, fully furnished, and premium interiors.",
    location: { lat: 22.73, lng: 75.862 },
    media: {
      images: [
        { url: "/media/penthouse1.jpg", alt: "Rooftop garden" },
        { url: "/media/penthouse2.webp", alt: "Infinity pool" },
        { url: "/media/penthouse3.png", alt: "Luxury interiors" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=ghi789rst",
          provider: "youtube",
        },
      ],
    },
  },
  // ✅ New properties added below
  {
    id: "mno345",
    title: "Spacious 4BHK Duplex in Prime Location",
    price: 28000000,
    currency: "₹",
    status: "Available",
    address: "55 Green Valley, Indore, MP",
    bedrooms: 4,
    bathrooms: 4,
    areaSqft: 3100,
    amenities: ["Clubhouse", "Gym", "Power Backup", "Indoor Games"],
    description:
      "Premium duplex with high ceilings, modular kitchen, and access to luxury clubhouse.",
    location: { lat: 22.725, lng: 75.88 },
    media: {
      images: [
        { url: "/media/duplex1.jpg", alt: "Front view of duplex" },
        { url: "/media/duplex2.webp", alt: "Modern kitchen" },
        { url: "/media/duplex3.png", alt: "Spacious living area" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=jkl012mno",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "pqr678",
    title: "Affordable Studio Apartment",
    price: 3500000,
    currency: "₹",
    status: "Available",
    address: "201 Sunrise Apartments, Indore, MP",
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 450,
    amenities: ["Lift", "Security", "Power Backup"],
    description:
      "Compact and affordable studio perfect for students or bachelors.",
    location: { lat: 22.731, lng: 75.865 },
    media: {
      images: [
        { url: "/media/studio1.jpg", alt: "Studio interior" },
        { url: "/media/studio2.webp", alt: "Compact kitchen" },
        { url: "/media/studio3.png", alt: "Bedroom setup" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=pqr678stu",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "stu901",
    title: "Luxury Farmhouse on Outskirts",
    price: 60000000,
    currency: "₹",
    status: "Available",
    address: "Farm Lane, Indore Bypass, MP",
    bedrooms: 6,
    bathrooms: 7,
    areaSqft: 8500,
    amenities: ["Private Garden", "Swimming Pool", "Servant Quarters", "Solar Power"],
    description:
      "Expansive farmhouse with lush greenery, large pool, and organic farming space.",
    location: { lat: 22.745, lng: 75.89 },
    media: {
      images: [
        { url: "/media/farmhouse1.jpg", alt: "Farmhouse entrance" },
        { url: "/media/farmhouse2.webp", alt: "Swimming pool" },
        { url: "/media/farmhouse3.png", alt: "Garden area" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=stu901vwx",
          provider: "youtube",
        },
      ],
    },
  },
  {
    id: "vwx234",
    title: "Compact 1BHK near IT Park",
    price: 4800000,
    currency: "₹",
    status: "Pending",
    address: "Tech Residency, Indore, MP",
    bedrooms: 1,
    bathrooms: 1,
    areaSqft: 600,
    amenities: ["Lift", "Security", "Covered Parking"],
    description:
      "Perfect for IT professionals, close to major companies, with easy connectivity.",
    location: { lat: 22.738, lng: 75.87 },
    media: {
      images: [
        { url: "/media/itpark1.jpg", alt: "Building exterior" },
        { url: "/media/itpark2.webp", alt: "Living space" },
        { url: "/media/itpark3.png", alt: "Bedroom" },
      ],
      videos: [
        {
          url: "https://www.youtube.com/watch?v=vwx234yz",
          provider: "youtube",
        },
      ],
    },
  },
];

export default properties;
