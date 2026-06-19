import cities from "./cities.json";

export const internalLinks = {
  blog: [
    { title: "Harga Undangan Digital", url: "/blog/harga-undangan-digital" },
    { title: "Cara Membuat Undangan Digital", url: "/blog/cara-membuat-undangan-digital" },
    { title: "Undangan Digital vs Cetak", url: "/blog/undangan-digital-vs-cetak" }
  ],

  cities: cities.map((c) => ({
    title: c.city,
    url: `/undangan-digital/${c.slug}`
  }))
};