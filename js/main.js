async function loadSections() {
  const container = document.getElementById('sections-container');
  const sectionFiles = ['hero.md', 'testimonial1.md', 'gallery1.md'];

  for (const file of sectionFiles) {
    const res = await fetch(`content/sections/${file}`);
    const text = await res.text();
    const data = jsyaml.load(text);

    let sectionHTML = '';

    if (data.type === 'hero') {
      sectionHTML = `<section class="hero"><h1>${data.title}</h1><p>${data.text}</p><img src="${data.image}" alt="${data.title}"></section>`;
    }

    if (data.type === 'testimonial') {
      sectionHTML = `<section class="testimonial"><h2>${data.title}</h2><p>"${data.text}"</p><img src="${data.image}" alt="${data.title}"></section>`;
    }

    if (data.type === 'gallery') {
      sectionHTML = `<section class="gallery"><h2>${data.title}</h2><img src="${data.image}" alt="${data.title}"></section>`;
    }

    container.innerHTML += sectionHTML;
  }
}

loadSections();