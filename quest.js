$(document).ready(function() {
    const $textField = $('.textField'),
          $textInput = $('.textInput'),
          $questButton = $('.questButton');

    $questButton.on('click', () => {
        const text = $questButton.text() === 'Применить' ? $textInput.val() : '';
        $textField.html(text);
        $questButton.text(text ? 'Удалить' : 'Применить');
    });
    
    $('.clearDataButton').click(() => $('.textInput').val(''));
});
