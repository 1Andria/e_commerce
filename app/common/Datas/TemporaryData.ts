import headphone1 from "../../../Data/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import headphone2 from "../../../Data/product-xx59-headphones/desktop/image-gallery-1.jpg";
import headphone3 from "../../../Data/product-xx59-headphones/desktop/image-gallery-2.jpg";
import headphone4 from "../../../Data/product-xx59-headphones/desktop/image-gallery-3.jpg";
import earphone1 from "../../../Data/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import earphone2 from "../../../Data/product-yx1-earphones/desktop/image-gallery-1.jpg";
import earphone3 from "../../../Data/product-yx1-earphones/desktop/image-gallery-2.jpg";
import earphone4 from "../../../Data/product-yx1-earphones/desktop/image-gallery-3.jpg";
import speaker from "../../../Data/product-zx9-speaker/desktop/image-gallery-1.jpg";
import speaker1 from "../../../Data/product-zx9-speaker/desktop/image-gallery-2.jpg";
import speaker2 from "../../../Data/product-zx9-speaker/desktop/image-gallery-3.jpg";
import speaker3 from "../../../Data/product-zx9-speaker/desktop/image-gallery-1.jpg";

export const temporaryData = [
  {
    id: "xx99-mk2",
    category: "headphones",
    src: headphone1,
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort. The intuitive controls and advanced Active Noise Cancellation let you enjoy crystal-clear sound in any environment. Bluetooth 5.0 and 17-hour battery life provide seamless, wireless freedom.",
    additionalImages: [headphone4, headphone2, headphone3],
    price: 2999,
    inTheBox: [
      { item: "Headphone Unit", quantity: 1 },
      { item: "Travel Bag", quantity: 1 },
      { item: "User Manual", quantity: 1 },
      { item: "3.5mm Audio Cable", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:00:00.000Z"),
  },
  {
    id: "xx99-mk22",
    category: "headphones",
    src: headphone4,
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    features:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort. The intuitive controls and advanced Active Noise Cancellation let you enjoy crystal-clear sound in any environment. Bluetooth 5.0 and 17-hour battery life provide seamless, wireless freedom.",
    additionalImages: [headphone3, headphone1, headphone2],
    price: 2999,
    inTheBox: [
      { item: "Headphone Unit", quantity: 1 },
      { item: "Travel Bag", quantity: 1 },
      { item: "User Manual", quantity: 1 },
      { item: "3.5mm Audio Cable", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:00:00.000Z"),
  },
  {
    id: "yx1-earphones",
    category: "earphones",
    src: earphone1,
    title: "YX1 Wireless Earphones",
    description:
      "The YX1 Wireless Earphones are engineered for people on the go. With premium build quality and compact design, you get amazing audio in a lightweight package.",
    features:
      "Equipped with intuitive touch controls, noise isolation, and USB-C fast charging, YX1 earphones keep up with your lifestyle. Experience 8 hours of continuous playback, with an additional 24 hours provided by the sleek charging case.",
    additionalImages: [earphone2, earphone3, earphone4],
    price: 599,
    inTheBox: [
      { item: "Earphones", quantity: 1 },
      { item: "Charging Case", quantity: 1 },
      { item: "USB-C Cable", quantity: 1 },
      { item: "User Manual", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:10:00.000Z"),
  },
  {
    id: "yx1-earphones2",
    category: "earphones",
    src: earphone3,
    title: "YX1 Wireless Earphones",
    description:
      "The YX1 Wireless Earphones are engineered for people on the go. With premium build quality and compact design, you get amazing audio in a lightweight package.",
    features:
      "Equipped with intuitive touch controls, noise isolation, and USB-C fast charging, YX1 earphones keep up with your lifestyle. Experience 8 hours of continuous playback, with an additional 24 hours provided by the sleek charging case.",
    additionalImages: [earphone1, earphone2, earphone4],
    price: 599,
    inTheBox: [
      { item: "Earphones", quantity: 1 },
      { item: "Charging Case", quantity: 1 },
      { item: "USB-C Cable", quantity: 1 },
      { item: "User Manual", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:10:00.000Z"),
  },
  {
    id: "zx7-speaker",
    category: "speakers",
    src: speaker,
    title: "ZX7 Bluetooth Speaker",
    description:
      "Bring bold sound anywhere with the ZX7 Bluetooth Speaker. Built with durability in mind, it's perfect for both indoor and outdoor use.",
    features:
      "The ZX7 delivers deep bass and crisp highs with dual passive radiators. It offers 20-hour battery life, USB-C fast charging, and supports multipoint Bluetooth connection so you can stay connected on the move.",
    additionalImages: [speaker1, speaker2, speaker3],
    price: 1199,
    inTheBox: [
      { item: "Speaker Unit", quantity: 1 },
      { item: "3.5mm Audio Cable", quantity: 1 },
      { item: "USB-C Charging Cable", quantity: 1 },
      { item: "Quick Start Guide", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:20:00.000Z"),
  },
  {
    id: "zx7-speaker1",
    category: "speakers",
    src: speaker2,
    title: "ZX7 Bluetooth Speaker",
    description:
      "Bring bold sound anywhere with the ZX7 Bluetooth Speaker. Built with durability in mind, it's perfect for both indoor and outdoor use.",
    features:
      "The ZX7 delivers deep bass and crisp highs with dual passive radiators. It offers 20-hour battery life, USB-C fast charging, and supports multipoint Bluetooth connection so you can stay connected on the move.",
    additionalImages: [speaker1, speaker, speaker3],
    price: 1199,
    inTheBox: [
      { item: "Speaker Unit", quantity: 1 },
      { item: "3.5mm Audio Cable", quantity: 1 },
      { item: "USB-C Charging Cable", quantity: 1 },
      { item: "Quick Start Guide", quantity: 1 },
    ],
    createdAt: new Date("2025-06-18T08:20:00.000Z"),
  },
];
