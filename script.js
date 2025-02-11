// Get the elements
const feelingButtons = document.querySelectorAll('.feeling-button');
const closeButton = document.getElementById('close-envelope');
const letterImage = document.querySelector('.letter-image');
const messageElement = document.getElementById('message');
const feelingSelect = document.querySelector('.feeling-select');
const closeEnvelopeDiv = document.querySelector('.close-envelope');

// Define the messages for each feeling
const messages = {
    happy: [
        'I hope this message brightens your day!',
        'Wishing you endless happiness today!',
        'Sending you all my love and positive energy!',
        'You are amazing, and I hope this brings a smile to your face!'
    ],
    sad: [
        'I wish I could be there to cheer you up.',
        'I’m sending you a big hug and all the support you need.',
        'I know things are tough, but you’re stronger than you think.',
        'I’m here for you whenever you need me.'
    ],
    'miss-you': [
        'I miss you so much and can\'t wait to be together.',
        'Every moment without you feels incomplete.',
        'Counting down the days until I can see you again.',
        'You’re always in my heart, even when we’re apart.'
    ],
    default: [
        'I\'m here for you!',
        'No matter what, I’ve got your back.',
        'You’re not alone, I’m here for you always.',
        'Let me know if there’s anything I can do to make you smile.'
    ]
};

// Function to get a random message from an array
function getRandomMessage(feeling) {
    const feelingMessages = messages[feeling] || messages.default;
    const randomIndex = Math.floor(Math.random() * feelingMessages.length);
    return feelingMessages[randomIndex];
}

// Add event listener to the feeling buttons to set the message and open the envelope
feelingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the feeling from the button's data attribute
        const selectedFeeling = button.getAttribute('data-feeling');

        // Get a random message based on the selected feeling
        const message = getRandomMessage(selectedFeeling);

        // Set the message text
        messageElement.textContent = message;

        // Hide the feeling buttons
        feelingSelect.style.display = 'none';

        // Show the close button and the envelope
        closeEnvelopeDiv.style.display = 'block';
        letterImage.classList.add('active');
    });
});

// Add event listener to close the envelope
closeButton.addEventListener('click', () => {
    // Hide the envelope
    letterImage.classList.remove('active');

    // Show the feeling buttons again
    feelingSelect.style.display = 'block';

    // Hide the close button
    closeEnvelopeDiv.style.display = 'none';

    // Clear the message
    messageElement.textContent = '';
});