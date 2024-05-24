const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list'); //fill in the blank to reference the unord

document.querySelector('button').addEventListener('click', () => {
    const favchapInput = document.getElementById('favchap');
    const favchap = favchapInput.value.trim();
    const message = document.getElementById('message');

    if (favchap !== '') {
        const li = document.createElement('li');
        listItem.textContent = favchap;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);

        deleteButton.addEventListener('click', () => {
            document.getElementById('list').removeChild(listItem);
            favchapInput.focus();
        });

        document.getElementById('list').appendChild(listItem);
        favchapInput.value = ''; // Clear the input field
        message.textContent = ''; // Clear any previous message
    } else {
        message.textContent = 'Please enter a book and chapter.';
    }
    favchapInput.focus(); // Focus the input field
});