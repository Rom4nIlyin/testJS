$(document).ready(function() {
    $('body').append(`
        <div class="centerSide">
            <div class="questWindow">
                <div class="leftSideQuestWindow">
                    <div class="textField"></div>
                    <div class="questDialogMenu">
                        <button class="clearDataButton" title="Очистить текст"></button>
                        <input class="textInput" placeholder="Ввести текст квеста">
                        <button class="questButton">Применить</button>
                    </div>
                </div>
                <div class="rightSideQuestWindow"></div>
            </div>
            <button class="linkButtonToOtherHmtl">< Страница index</button>
        </div>
    `);

    const $textField = $('.textField'),
          $textInput = $('.textInput'),
          $questButton = $('.questButton');

    $questButton.on('click', () => {
        const text = $questButton.text() === 'Применить' ? $textInput.val() : '';
        $textField.html(text);
        $questButton.text(text ? 'Удалить' : 'Применить');
    });

    $('.clearDataButton').click(() => $('.textInput').val(''));
    $('.linkButtonToOtherHmtl').click(() => window.location.href = 'index.html');
});