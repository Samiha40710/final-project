export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Foods",
    submenu: [
      { label: "Burgers", href: "/burgers" },
      { label: "Pizzas", href: "/pizzas" },
      { label: "Drinks", href: "/drinks" },
    ],
  },
  {
    title: "Services",
    submenu: [
      { label: "Delivery", href: "/delivery" },
      { label: "Catering", href: "/catering" },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default navLinks;
