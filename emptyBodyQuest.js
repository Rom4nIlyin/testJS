$(document).ready(function() {
    // Переменные для создания страницы
    const $body = $('body'),
        $centerSide = $('<div class="centerSide">'),
        $questWindow = $('<div class="questWindow">'),
        $leftSide = $('<div class="leftSideQuestWindow">'),
        $rightSide = $('<div class="rightSideQuestWindow">'),
        $textField = $('<div class="textField">'),
        $questDialogMenu = $('<div class="questDialogMenu">');

    // Создание окошка с квестом
    $questDialogMenu.append('<button class="clearDataButton" title="Очистить текст"></button>',
                            '<input class="textInput" placeholder="Ввести текст квеста">',
                            '<button class="questButton">Применить</button>');

    $leftSide.append($textField, $questDialogMenu);
    $questWindow.append($leftSide, $rightSide);
    $centerSide.append($questWindow, '<button class="linkButtonToOtherHmtl">< Страница index</button>');
    $body.append($centerSide);

    // Функции кнопок
    $('.questButton').click(function() {
        const textContent = $(this).text() === 'Применить' ? $('.textInput').val() : '';
        $textField.text(textContent);
        $(this).text(textContent ? 'Удалить' : 'Применить');
    });

    $('.clearDataButton').click(() => $('.textInput').val(''));
    $('.linkButtonToOtherHmtl').click(() => window.location.href = 'index.html');
});