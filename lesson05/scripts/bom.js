const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Reference the unordered list

document.querySelector('button').addEventListener('click', () => {
    const favchapInput = document.getElementById('favchap');
    const favchap = favchapInput.value.trim();
    const message = document.getElementById('message');

    if (favchap !== '') {
        const li = document.createElement('li');
        li.textContent = favchap; // Correct reference to li

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        li.append(deleteButton); // Append the delete button to li

        deleteButton.addEventListener('click', () => {
            list.removeChild(li); // Correct reference to list
            favchapInput.focus();
        });

        list.appendChild(li); // Append the li element to the list
        favchapInput.value = ''; // Clear the input field
        message.textContent = ''; // Clear any previous message
    } else {
        message.textContent = 'Please enter a book and chapter.';
    }
    favchapInput.focus(); // Focus the input field
});