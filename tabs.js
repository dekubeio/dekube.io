// shared terminal tab switcher
// TODO: replace relative path with https://dekube.io/tabs.js when domains are live
document.querySelectorAll('.terminal-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.terminal-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.terminal-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add('active');
  });
});
