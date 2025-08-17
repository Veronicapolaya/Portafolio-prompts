[...document.querySelectorAll('a[href]')].forEach(a => {
  fetch(a.getAttribute('href'))
    .then(r => {
      if (!r.ok) console.warn('⚠️ Link roto:', a.outerHTML, 'status:', r.status);
      else console.log('OK', a.getAttribute('href'));
    })
    .catch(e => console.warn('⚠️ Link con error:', a.outerHTML, e.message));
});
