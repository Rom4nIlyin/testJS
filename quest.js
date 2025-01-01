$(document).ready(function() {
    $('.questButton').click(function() {
        const textContent = $(this).text() === 'Применить' ? $('.textInput').val() : '';
            $('.textField').text(textContent);
            $(this).text(textContent ? 'Удалить' : 'Применить');
    });

    $('.clearDataButton').click(() => $('.textInput').val(''));
});
