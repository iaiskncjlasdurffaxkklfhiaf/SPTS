document.addEventListener('DOMContentLoaded', function () {
    var copyButton = document.querySelector('.copy-button');
    var wideInput = document.querySelector('.wide-input');

    copyButton.addEventListener('click', function (e) {
        e.preventDefault();
        var textToCopy = wideInput.value.trim();

        navigator.clipboard.writeText(textToCopy).then(function () {
            copyButton.innerHTML = '<i class="fas fa-check"></i>';
            setTimeout(function () {
                copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            }, 2000);
        }).catch(function (error) {
            console.error('Failed to copy text: ', error);
        });
    });
});
