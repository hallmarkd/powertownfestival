async function loadSections() {
  const container = document.getElementById('sections-container');
  const sectionFiles = ['hero.md', 'testimonial1.md', 'gallery1.md'];

  for (const file of sectionFiles) {
    const res = await fetch(`content/sections/${file}`);
    const text = await res.text();
    const data = jsyaml.load(text);

    let sectionHTML = '';

    if (data.type === 'hero') {
      sectionHTML = `
        <section class="hero">
          <h1>${data.title || '[Hero Title Here]'}</h1>
          <p>${data.text || '[Hero text goes here]'}</p>
          <img src="${data.image || '/images/placeholder.jpg'}" alt="${data.title || 'Hero'}">
        </section>
      `;
    }

    if (data.type === 'testimonial') {
      sectionHTML = `
        <section class="testimonial">
          <h2>${data.title || '[Testimonial Title]'}</h2>
          <p>"${data.text || '[Testimonial text]'}"</p>
          <img src="${data.image || '/images/placeholder.jpg'}" alt="${data.title || 'Testimonial'}">
        </section>
      `;
    }

    if (data.type === 'gallery') {
      sectionHTML = `
        <section class="gallery">
          <h2>${data.title || '[Gallery Title]'}</h2>
          <img src="${data.image || '/images/placeholder.jpg'}" alt="${data.title || 'Gallery'}">
        </section>
      `;
    }

    container.innerHTML += sectionHTML;
  }
}

loadSections();
