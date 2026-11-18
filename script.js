const btn = document.getElementById("theme-toggle");

// اگه قبلاً حالت تاریک انتخاب شده بود، دوباره اعمالش کن
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  btn.textContent = "☀️ حالت روشن";
}

btn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  btn.textContent = isDark ? "☀️ حالت روشن" : "🌙 حالت تاریک";
});
