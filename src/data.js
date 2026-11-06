export const partner = {
  name: "Kaustav Pal",
  vehicle: "Bike · WB 02 AK 4471",
};

export const initialOrders = [
  { id: "ZM4821", restaurant: "Biryani Blues", area: "Salt Lake, Sector V", items: 3, distance: 2.4, payout: 68, tip: 10, status: "new", time: "7:42 PM" },
  { id: "ZM4819", restaurant: "Mamma Mia Pizzeria", area: "New Town, Action Area 1", items: 2, distance: 4.1, payout: 92, tip: 20, status: "accepted", time: "7:31 PM" },
  { id: "ZM4815", restaurant: "Kolkata Rolls Co.", area: "Park Street", items: 4, distance: 1.8, payout: 54, tip: 0, status: "picked", time: "7:18 PM" },
  { id: "ZM4809", restaurant: "Sweet Tooth Bakery", area: "Ballygunge", items: 1, distance: 3.2, payout: 61, tip: 15, status: "delivered", time: "6:50 PM" },
  { id: "ZM4802", restaurant: "Burger Barn", area: "Gariahat", items: 2, distance: 2.9, payout: 58, tip: 0, status: "delivered", time: "6:22 PM" },
  { id: "ZM4796", restaurant: "Chai & Chaat", area: "Dum Dum", items: 5, distance: 5.6, payout: 104, tip: 30, status: "delivered", time: "5:48 PM" },
  { id: "ZM4788", restaurant: "Wok This Way", area: "Salt Lake, City Centre", items: 2, distance: 1.5, payout: 46, tip: 5, status: "delivered", time: "5:10 PM" },
];

export const weekly = [
  { day: "Mon", amount: 820 },
  { day: "Tue", amount: 640 },
  { day: "Wed", amount: 910 },
  { day: "Thu", amount: 735 },
  { day: "Fri", amount: 980 },
  { day: "Sat", amount: 1240 },
];

export const metrics = [
  { label: "Acceptance rate", value: 92, suffix: "%" },
  { label: "On-time deliveries", value: 96, suffix: "%" },
  { label: "Customer rating", value: 4.8, suffix: "/5" },
  { label: "Avg. delivery time", value: 24, suffix: " min" },
];
