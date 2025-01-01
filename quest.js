$(document).ready(function() {
    $('.questButton').click(function() {
        const $textField = $('.textField');

        const textContent = $(this).text() === 'Применить' ? $('.textInput').val() : '';
            $textField.text(textContent);
            $(this).text(textContent ? 'Удалить' : 'Применить');
    });

    $('.clearDataButton').click(() => {
        $('.textInput').val('');
    });
});
