let currentLang = 'es';

async function setLang(lang) {
  currentLang = lang;
  const res = await fetch(`assets/i18n/${lang}.json`);
  const dict = await res.json();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.innerHTML = dict[key];
  });
}

setLang('es');