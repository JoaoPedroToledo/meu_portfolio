document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');

    if (!targetId || targetId === '#') {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('.tecnologia-icon').forEach((image) => {
  const showFallback = () => {
    const fallback = document.createElement('span');
    const label = image.alt || 'Tecnologia';
    const initials = label
      .split(/\s+/)
      .map((word) => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase();

    fallback.className = 'tecnologia-icon-fallback';
    fallback.textContent = initials;
    fallback.setAttribute('aria-hidden', 'true');
    image.replaceWith(fallback);
  };

  image.addEventListener('error', showFallback, { once: true });

  if (image.complete && image.naturalWidth === 0) {
    showFallback();
  }
});
