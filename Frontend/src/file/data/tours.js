import tourImg01 from "../image/Travel-img1.jpg";
import tourImg02 from "../image/Travel-img2.jpg";
import tourImg03 from "../image/Travel-img3.jpg";
import tourImg04 from "../image/Travel-img4.jpg";
import tourImg05 from "../image/Travel-img5.jpg";
import tourImg06 from "../image/Travel-img6.jpg";
import tourImg07 from "../image/Travel-img7.jpg";
import tourImg08 from "../image/Travel-img8.jpg";


const tours = [
  {
    id: "01",
    title: "Cappadocia",
    city: "Turkey",
    distance: 300,
    address: 'Cappadocia,Turkey',
    price: 79200,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
         name: "Karle Bone",
         rating: 5,
       },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Bali",
    city: "Indonesia",
    distance: 400,
    address: 'Bali, Indonesia',
    price: 76800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Bordeaux",
    city: "France",
    distance: 500,
    address: 'France, Bordeaux',
    price: 60800,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Sun Island",
    city: "Maldives",
    distance: 500,
    address: 'Sun Island, Maldives',
    price: 68000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Le Morne",
    city: "Mauritius",
    distance: 500,
    address: 'Le Morne, Mauritius',
    price: 60000,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Ipanema Beach",
    city: "Brazil",
    distance: 500,
    address: 'Ipanema Beach, Brazil',
    price: 70400,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.4,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Lisbon",
    city: "Portuguese",
    distance: 500,
    address: 'Lisbon, Portuguese',
    price: 63200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.7,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Sukhothai",
    city: "Thailand",
    distance: 500,
    address: 'Sukhothai, Thailand',
    price: 79200,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
