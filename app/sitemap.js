export default function sitemap() {
  return [
    {
      url: "https://axicons.md",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://axicons.md/confidentialitate",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}