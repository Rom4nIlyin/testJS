// jQuery

const textInput = $('#textInput'),
    questButton = $('#questButton'),
    textField = $('#textField'),
    clearDataButton = $('#clearDataButton');

questButton.on('click', () => {
    questButton.text() === 'Применить' && textInput.val() !== '' ?
        (textField.text(textInput.val()), questButton.text('Удалить')) : 
        (textField.text(''), questButton.text('Применить'));
});

clearDataButton.on('click', () => {
    if (textInput.val()) {
        textInput.val('')
    }
});

/* JavaScript

const textInput = document.getElementById('textInput'),
    questButton = document.getElementById('questButton'),
    textField = document.getElementById('textField'),
    clearDataButton = document.getElementById('clearDataButton');

questButton.onclick = () => {
    questButton.textContent = (questButton.textContent === 'Применить') && textInput.value !== '' ? 
        (textField.textContent = textInput.value, 'Удалить') : 
        (textField.textContent = '', 'Применить');
};

clearDataButton.onclick = () => {
    if (textInput.value) {
        textInput.value = '';
    }
};
*/

