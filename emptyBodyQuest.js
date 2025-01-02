const app = document.getElementById('app');
if (app) {
  const fragment = document.createDocumentFragment();
  const container = document.createElement('div');
  container.className = 'quest-window';
  container.innerHTML = (`
      <div class="left-side">
          <div class="text"></div>
          <div class="controls">
              <input type="text" placeholder="Ввести текст квеста">
              <button type="button" class="clear hidden" title="Очистить текст">&times;</button>
          </div>
      </div>
      <div class="right-side"></div>
  `);

  fragment.appendChild(container);
  app.append(fragment);

  const controls = document.querySelector('.controls');
  if (controls) {
    const result = document.querySelector('.text');
    const input = controls.querySelector('input[type="text"]');
    const clearButton = controls.querySelector('.clear');
    if (input) {       
      input.onkeyup = (e) => {
        const text = e.target.value;
        result.textContent = text;

        text.length && clearButton?.classList?.contains('hidden') && clearButton.classList.remove('hidden');

        !text && !clearButton?.classList?.contains('hidden') && clearButton.classList.add('hidden');
      };

      if (clearButton) {
        clearButton.onclick = () => {
          input.value = '';
          result.textContent = '';
        };
      }
    }
  }
}


