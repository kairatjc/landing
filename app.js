// Site configuration.
// Edit these two values to update every Telegram link, the displayed handle,
// and the price shown across the page. The HTML already contains sensible
// defaults, so the page still works correctly if JavaScript is disabled.
const CONFIG = {
  telegram: "@skairat",
  price: "15 000 \u0441\u043e\u043c / \u043c\u0435\u0441\u044f\u0446", // "15 000 сом / месяц"
};

document.addEventListener("DOMContentLoaded", () => {
  const handle = CONFIG.telegram;
  const link = "https://t.me/" + handle.replace(/^@/, "");

  document.querySelectorAll("[data-tg]").forEach((a) => { a.href = link; });
  document.querySelectorAll("[data-tg-handle]").forEach((el) => { el.textContent = handle; });
  document.querySelectorAll("[data-price]").forEach((el) => { el.textContent = CONFIG.price; });
});
