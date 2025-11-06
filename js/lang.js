function setLanguage(lang) {
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.dataset[lang];
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'ja';
  setLanguage(lang);
});