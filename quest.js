const textInput = document.getElementById('textInput'),
    questButton = document.getElementById('questButton'),
    textField = document.getElementById('textField'),
    clearDataButton = document.getElementById('clearDataButton');

questButton.onclick = () => {
    questButton.textContent = (questButton.textContent === 'Применить' && textInput.value != '') ? 
        (textField.textContent = textInput.value, 'Удалить') : 
        (textField.textContent = '', 'Применить');
};

clearDataButton.onclick = () => {
    if (textInput.value) {
        textInput.value = '';
    }
};