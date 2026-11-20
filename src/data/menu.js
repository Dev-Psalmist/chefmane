export const heroImage =
  "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/9b2b214d3_generated_ff9bc423.png";

export const photos = {
  fishPlatter:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/5698d67f6_generated_a92235f5.png",
  fishBoard:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/8bffb4809_generated_5ea85679.png",
  shrimp:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/1268c5c1f_generated_3774de51.png",
  shawarmaSub:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/8ff7888cd_generated_60a02da3.png",
  shakes:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/9abe952e2_generated_b08073ba.png",
  glazed:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/6a290d2c3_generated_8b033149.png",
  burger:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/4e16030ea_generated_0d15c8d0.png",
  clubChicken:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/8d89747cb_generated_12379033.png",
  club:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/1aa17b762_generated_97b8ec0b.png",
  greenSmoothie:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/7b3aa033a_generated_04267225.png",
  jollof:
    "https://media.base44.com/images/public/6aff6206936eebb5f25d12c1/d0e4166cd_generated_ce502f86.png",
};

export const signatures = [
  {
    name: "Whole Grilled Fish Platter",
    vibe: "The house signature",
    desc: "Whole fish charred hard over open flame with a pepper-garlic rub, plated with coleslaw, cucumber, a basket of fries and house pepper sauce.",
    tags: ["Wood-fired", "Shareable", "Spicy"],
    image: photos.fishPlatter,
  },
  {
    name: "Smokey Jollof Rice",
    vibe: "Comfort, upgraded",
    desc: "Long-grain rice cooked down in a charred tomato-pepper base until it catches smoke, served with grilled chicken and sweet fried plantain.",
    tags: ["Smokey", "Family size", "House favourite"],
    image: photos.jollof,
  },
  {
    name: "Chefmane Chicken Burger",
    vibe: "The lunch-break hero",
    desc: "Crispy chicken thigh, aged cheddar, crisp lettuce and smoked burger sauce stacked in a toasted sesame bun. Fries included.",
    tags: ["Crispy", "Fast serve", "Student pick"],
    image: photos.burger,
  },
];

export const courses = [
  {
    id: "fire",
    name: "From the Fire",
    blurb: "Open flame, smoke and a slow pepper burn.",
    items: [
      {
        name: "Whole Grilled Fish Platter",
        desc: "Whole croaker grilled on the bone, pepper-garlic rub, coleslaw, cucumber, fries and pepper sauce.",
        tags: ["Signature", "Spicy"],
        image: photos.fishPlatter,
      },
      {
        name: "Grilled Fish & Fries",
        desc: "Butterflied fish seared crisp on the skin, served with golden fries and a sharp pepper dip.",
        tags: ["Wood-fired", "Premium"],
        image: photos.fishBoard,
      },
      {
        name: "Glazed Grill Plate",
        desc: "Slow-glazed meat with onions, sweet peppers, sesame and star anise, with fresh cabbage and lime.",
        tags: ["Glazed", "Rich"],
        image: photos.glazed,
      },
      {
        name: "Smokey Jollof Rice",
        desc: "Charred tomato-pepper rice with grilled chicken and plantain. Comes in a single or family bowl.",
        tags: ["Smokey", "Value plate"],
        image: photos.jollof,
      },
      {
        name: "Peppered Shrimp Sauté",
        desc: "Shrimp tossed with bell peppers, carrots, sweetcorn and scallions in a glossy pepper butter.",
        tags: ["Seafood"],
        image: photos.shrimp,
      },
    ],
  },
  {
    id: "wraps",
    name: "Shawarma & Wraps",
    blurb: "Rolled tight, sauced heavy, ready in minutes.",
    items: [
      {
        name: "Beef Shawarma Sub",
        desc: "Toasted sub loaded with spiced beef, cabbage slaw and two sauces, with thick-cut fries on the side.",
        tags: ["Best seller"],
        image: photos.shawarmaSub,
      },
      {
        name: "Chicken Shawarma Wrap",
        desc: "Grilled chicken, pickled onions and garlic cream rolled in a warm flatbread.",
        tags: ["Quick bite"],
      },
      {
        name: "Suya-Spiced Beef Wrap",
        desc: "Charred beef strips dusted in suya spice with red onion, cucumber and lime yoghurt.",
        tags: ["Spicy", "Late night"],
      },
    ],
  },
  {
    id: "burgers",
    name: "Burgers & Sandwiches",
    blurb: "Stacked, toasted and built for two hands.",
    items: [
      {
        name: "Chefmane Chicken Burger",
        desc: "Crispy chicken thigh, aged cheddar, lettuce and smoked burger sauce on a sesame bun.",
        tags: ["Crispy"],
        image: photos.burger,
      },
      {
        name: "Chefmane Club Sandwich",
        desc: "Triple-stacked toast with egg, tomato, lettuce and grilled chicken, pinned and cut to share.",
        tags: ["Classic"],
        image: photos.club,
      },
      {
        name: "Club & Crispy Chicken",
        desc: "Our club sandwich with a pile of golden fried chicken and a wire basket of fries.",
        tags: ["Feeds two"],
        image: photos.clubChicken,
      },
    ],
  },
  {
    id: "fresh",
    name: "Salads & Sides",
    blurb: "The green side of the grill — fresh, cold, crunchy.",
    items: [
      {
        name: "Chefmane Garden Slaw",
        desc: "Shredded cabbage, carrot and sweetcorn in a light citrus dressing.",
        tags: ["Fresh", "Vegan"],
      },
      {
        name: "Avocado & Greens Salad",
        desc: "Avocado, crisp leaves, cucumber and toasted seeds finished with lime.",
        tags: ["Fresh", "Light lunch"],
      },
      {
        name: "Golden Fries",
        desc: "Twice-fried, salted while hot, with our house pepper dip.",
        tags: ["Sides"],
      },
      {
        name: "House Pepper Sauce",
        desc: "Slow-cooked scotch bonnet and onion relish. Ask for extra — most people do.",
        tags: ["Spicy"],
      },
    ],
  },
  {
    id: "drinks",
    name: "Shakes & Drinks",
    blurb: "Cold, thick and made to cool the fire.",
    items: [
      {
        name: "Caramel Cream Milkshake",
        desc: "Thick vanilla shake, whipped cream and a caramel drizzle.",
        tags: ["Sweet"],
        image: photos.shakes,
      },
      {
        name: "Green Avocado Smoothie",
        desc: "Creamy avocado blended light and cold, finished with mint and grapes.",
        tags: ["Fresh", "Creamy"],
        image: photos.greenSmoothie,
      },
      {
        name: "Berry Blush Smoothie",
        desc: "Deep berry blend with lime and mint — the coldest thing on the menu.",
        tags: ["Fruity"],
      },
      {
        name: "Zobo & Chapman",
        desc: "House-brewed hibiscus zobo or a proper Nigerian Chapman over ice.",
        tags: ["Local"],
      },
    ],
  },
];

export const gallery = [
  { src: photos.fishPlatter, title: "Whole Grilled Fish", note: "Wood-fired · pepper-garlic rub" },
  { src: photos.jollof, title: "Smokey Jollof", note: "Charred pepper base · grilled chicken" },
  { src: photos.burger, title: "Chicken Burger", note: "Crispy thigh · aged cheddar" },
  { src: photos.shawarmaSub, title: "Beef Shawarma Sub", note: "Two sauces · cabbage slaw" },
  { src: photos.glazed, title: "Glazed Grill Plate", note: "Star anise · sweet peppers" },
  { src: photos.clubChicken, title: "Club & Crispy Chicken", note: "Basket fries · scallion" },
  { src: photos.shrimp, title: "Peppered Shrimp", note: "Pepper butter · sweetcorn" },
  { src: photos.fishBoard, title: "Fish & Fries Board", note: "Chargrilled · house sauce" },
  { src: photos.club, title: "The Club", note: "Egg · tomato · grilled chicken" },
  { src: photos.shakes, title: "Shakes & Smoothies", note: "Caramel cream · berry blush" },
  { src: photos.greenSmoothie, title: "Green Avocado", note: "Mint · lime · ice cold" },
];