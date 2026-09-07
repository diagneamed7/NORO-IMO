// Script to measure logos - to be run in browser DevTools console

console.log('=== MEASURING LOGOS ===\n');

// Header logo
const headerImg = document.querySelector('img[alt="NORO IMMO"]');
if (headerImg) {
  const headerData = {
    file: 'Header Logo',
    naturalSize: `${headerImg.naturalWidth}x${headerImg.naturalHeight}`,
    displaySize: `${headerImg.getBoundingClientRect().width.toFixed(0)}x${headerImg.getBoundingClientRect().height.toFixed(0)}`,
    objectFit: window.getComputedStyle(headerImg).objectFit || 'default',
    ratio: (headerImg.naturalWidth / headerImg.naturalHeight).toFixed(2)
  };
  console.table(headerData);
}

// Footer logo
const footerImg = document.querySelector('footer img[alt="NORO IMMO"]');
if (footerImg) {
  const footerData = {
    file: 'Footer Logo',
    naturalSize: `${footerImg.naturalWidth}x${footerImg.naturalHeight}`,
    displaySize: `${footerImg.getBoundingClientRect().width.toFixed(0)}x${footerImg.getBoundingClientRect().height.toFixed(0)}`,
    objectFit: window.getComputedStyle(footerImg).objectFit || 'default',
    ratio: (footerImg.naturalWidth / footerImg.naturalHeight).toFixed(2)
  };
  console.table(footerData);
}

console.log('\nPaste the results into the bug report.');
