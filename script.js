const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
 
// Copy email to clipboard
const copyBtn = document.getElementById('copy-email');
if (copyBtn) {
  const originalLabel = copyBtn.textContent;
  const email = copyBtn.dataset.email;
 
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyBtn.textContent = 'Copied!';
    } catch (err) {
      // Clipboard API unavailable — fall back to opening a mail client
      window.location.href = `mailto:${email}`;
      return;
    }
    setTimeout(() => {
      copyBtn.textContent = originalLabel;
    }, 1500);
  });
}