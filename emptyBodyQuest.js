$(document).ready(function() {
    
    // Переменные блоков для создания окошка с квестом
    const $body = $('body');

    const $questWindow = $('<div id="questWindow">'),
        $leftSide = $('<div id="leftSideQuestWindow">'),
        $rightSide = $('<div id="rightSideQuestWindow">');

    const $textField = $('<div id="textField">'),
        $questDialogMenu = $('<div id="questDialogMenu">');

    // Создание окошка с квестом
    $questDialogMenu.append('<button id="clearDataButton" title="Очистить текст"></button>');
    $questDialogMenu.append('<input id="textInput" placeholder="Ввести текст квеста">');
    $questDialogMenu.append('<button id="questButton">Применить</button>');

    $leftSide.append($textField);
    $leftSide.append($questDialogMenu);
    
    $questWindow.append($leftSide);
    $questWindow.append($rightSide);
    
    $body.append($questWindow);
    
    // Переменные для кнопок
    const $textInput = $('#textInput'),
        $questButton = $('#questButton'),
        $clearDataButton = $('#clearDataButton');

    // Функции кнопок
    $questButton.on('click', () => {
        $questButton.text() === 'Применить' && $textInput.val() !== '' ?
            ($textField.text($textInput.val()), $questButton.text('Удалить')) : 
            ($textField.text(''), $questButton.text('Применить'));
    });
    
    $clearDataButton.on('click', () => {
        if ($textInput.val()) {
            $textInput.val('')
        }
    });
});