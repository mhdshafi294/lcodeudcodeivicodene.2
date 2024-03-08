import cover from "../assets/cover2.jpg";

import rings0 from "../assets/rings0.jpg";
import bracelets0 from "../assets/bracelets0.jpg";
import Necklaces0 from "../assets/Necklaces0.jpg";
import Earrings0 from "../assets/Earrings0.jpg";

import collection0 from "../assets/Rectangle-13.jpg";
import collection1 from "../assets/collection1.jpg";
import collection2 from "../assets/collection2.jpg";
import collection3 from "../assets/explore2.jpg";

import blackR from "../assets/blackR.jpg";
import blackL from "../assets/blackL.jpg";

import ringGold1 from "@/assets/products/ringGold1.jpg";
import ringGold2 from "@/assets/products/ringGold2.png";
import ringGold3 from "@/assets/products/ringGold3.jpg";
import ringGold4 from "@/assets/products/ringGold4.jpg";
import ringGoldCover from "@/assets/products/ringGoldCover.jpg";
import ringSilver1 from "@/assets/products/ringGold2.png";
import ringSilverCover from "@/assets/products/ringSilverCover.jpg";

export const NAV_LINKS = [
  {
    label: "Necklaces",
    value: "/rings" as const,
  },
  {
    label: "Earrings",
    value: "/rings" as const,
  },
  {
    label: "Rings",
    value: "/rings" as const,
  },
  {
    label: "Bracelets",
    value: "/rings" as const,
  },
  {
    label: "Our Story",
    value: "/our-Story" as const,
  },
  {
    label: "Collections",
    value: "/rings" as const,
  },
];

export const HERO_IMGS = [
  {
    label: "hero1",
    value: "../assets/hero.jpg" as const,
  },
  {
    label: "hero1",
    value: cover,
  },
];

export const CATEGORIES = [
  {
    label: "Rings",
    image: rings0,
    href: "/rings",
  },
  {
    label: "Bracelets",
    image: bracelets0,
    href: "/rings",
  },
  {
    label: "Necklaces",
    image: Necklaces0,
    href: "/rings",
  },
  {
    label: "Earrings",
    image: Earrings0,
    href: "/rings",
  },
];

export const Collection_items = [
  {
    label: "Rings",
    description: "Beautifully embodying transformation, the Graff Butterfly ",
    image: collection0,
    href: "/rings",
  },
  {
    label: "Bracelets",
    description: "Beautifully embodying transformation, the Graff Butterfly ",
    image: collection1,
    href: "/rings",
  },
  {
    label: "Necklaces",
    description: "Beautifully embodying transformation, the Graff Butterfly ",
    image: collection2,
    href: "/rings",
  },
  {
    label: "Earrings",
    description: "Beautifully embodying transformation, the Graff Butterfly ",
    image: collection3,
    href: "/rings",
  },
];

export const FOOTER_LINKS = [
  [
    {
      label: "CLIENT SERVICES",
      value: "/services",
    },
    {
      label: "BOOK AN APPOINTMENT",
      value: "/book",
    },
    {
      label: "CONTACT US",
      value: "/contact",
    },
    {
      label: "SIZE GUIDE",
      value: "/sizes",
    },
  ],
  [
    {
      label: "PRIVACY POLICY",
      value: "/privacy",
    },
    {
      label: "TERMS OF USE",
      value: "/terms",
    },
    {
      label: "COOKIE POLICY",
      value: "/cookie-policy",
    },
    {
      label: "COOKIE PREFERENCES",
      value: "/cookie-preferences",
    },
    {
      label: "ANTI-SLAVERY STATEMENTS",
      value: "/anti-slavery",
    },
  ],
];

export const ELEGANCE = [
  {
    label: "Rings",
    image: blackR,
    description:
      "Discover our exemplary jewellery creations at your nearest Ludivine boutique",
  },
  {
    label: "Bracelet",
    image: blackL,
    description:
      "Discover our exemplary jewellery creations at your nearest Ludivine boutique",
  },
];

export const rings = [
  {
    id: "0",
    topSeller: true,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold1, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "1",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold2, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "2",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold3, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "3",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold4, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "4",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold1, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "5",
    topSeller: true,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold2, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "6",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold3, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
  {
    id: "7",
    topSeller: false,
    name: "Name of The Ring",
    length: 0.8,
    Gemstone: "Alpha System",
    gold: {
      price: 529.0,
      imgs: [ringGold4, ringGoldCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
    silver: {
      price: 120.0,
      imgs: [ringSilver1, ringSilverCover],
      description:
        "Rhodium-plated matte silver: rhodium-plated surface. The rhodium is applied using an electroplating process to prevent the piece from rusting. Avoid scrapes and scratches, as the plating is applied only to the surface of the piece. Clean with water, pH-neutral soap and a small brush. 24 K gold-plated matte metal: 24 K gold-plated surface.",
    },
  },
];
