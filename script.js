document.getElementById('check-btn').addEventListener('click', function() {
    let text = document.getElementById('text-input').value;
    
    if (!text) {
        alert('Please input a value');
        return;
    }

    let resultDiv = document.getElementById('result');
    let cleanedText = text.toLowerCase().replace(/[\W_]/g, '');
    let reversedText = cleanedText.split('').reverse().join('');

    if (cleanedText === reversedText) {
        resultDiv.textContent = `${text} is a palindrome`;
    } else {
        resultDiv.textContent = `${text} is not a palindrome`;
    }
});
