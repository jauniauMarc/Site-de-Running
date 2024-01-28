const panels = document.querySelectorAll('.panel');

function callback(event) {
  panels.forEach(function(panel) {
    panel.classList.remove('active');
  });
  event.target.classList.add('active');
}

panels.forEach(function(panel) {
  panel.addEventListener('click', callback);
});

