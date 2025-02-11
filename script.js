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
        'You are amazing, and I hope this brings a smile to your face!',
        'Your happiness is contagious, and I’m grateful for you.',
        'I’m so lucky to know someone as wonderful as you.',
        'Let’s make today as bright as your beautiful smile!',
        'May your day be filled with love and laughter.',
        'Just wanted to remind you how amazing you are!',
        'Your joy is my joy, and I hope you’re feeling it today!',
        'The world is a better place with you in it.',
        'May today bring you everything you’ve been dreaming of!',
        'Here’s to a day full of sunshine and smiles!',
        'Keep shining, the world needs your light.',
        'Sending you a little sparkle and a lot of love!',
        'Your happiness makes the world more beautiful.',
        'Stay happy, stay positive, and keep spreading joy!',
        'I hope today brings you nothing but good vibes.',
        'May every moment today bring you closer to your dreams.',
        'You deserve all the happiness this world has to offer!'
    ],
    sad: [
        'I wish I could be there to cheer you up.',
        'I’m sending you a big hug and all the support you need.',
        'I know things are tough, but you’re stronger than you think.',
        'I’m here for you whenever you need me.',
        'Even in hard times, remember you are loved and appreciated.',
        'It’s okay to feel down, just know I’m by your side.',
        'I may not have all the answers, but I’m here to listen.',
        'Take it one step at a time, you’ll get through this.',
        'You’re not alone; I’m always here for you.',
        'Sending you all my love and positive energy during this time.',
        'When things seem tough, I hope you find comfort in knowing you’re not facing them alone.',
        'You’re stronger than you realize, and I believe in you.',
        'It’s okay to take your time; I’m here when you need me.',
        'Even though I can’t be there in person, my thoughts are with you.',
        'Take a deep breath. You’ll make it through this.',
        'Remember, I’m just a message away whenever you need me.',
        'I’m sending you all the warmth and support to get through this.',
        'Your strength is inspiring, and I know you’ll overcome this.',
        'I wish I could be there to hold you and comfort you.',
        'I’m thinking of you, and I know brighter days are ahead.'
    ],
    'miss-you': [
        'I miss you so much and can’t wait to be together.',
        'Every moment without you feels incomplete.',
        'Counting down the days until I can see you again.',
        'You’re always in my heart, even when we’re apart.',
        'The distance may be far, but my love for you is closer than ever.',
        'I can’t wait to be in your arms again.',
        'Life isn’t the same without you by my side.',
        'Every minute without you feels like forever.',
        'My heart aches to be near you once again.',
        'I’m constantly thinking about you and how much I miss you.',
        'You’re always in my thoughts, and I miss you dearly.',
        'I look forward to the day when we no longer have to be apart.',
        'My world is a little dimmer without you in it.',
        'I miss the sound of your voice and the warmth of your presence.',
        'I can’t wait for the day when we don’t have to say goodbye.',
        'You make everything better, and I miss that more than anything.',
        'Every time I close my eyes, I see you, and I miss you even more.',
        'The distance between us only makes me appreciate you more.',
        'I miss everything about you—the little things and the big ones.',
        'The days feel longer without you here, but I’m holding on.'
    ],
    default: [
        'I’m here for you!',
        'No matter what, I’ve got your back.',
        'You’re not alone, I’m here for you always.',
        'Let me know if there’s anything I can do to make you smile.',
        'You are stronger than you think.',
        'I’m always just a call or text away if you need anything.',
        'Whenever you need someone to talk to, I’ll be there.',
        'I’m sending positive vibes your way.',
        'You’re doing better than you realize, keep going.',
        'You have the strength to handle whatever comes your way.',
        'I believe in you, and I know you’ll get through this.',
        'I’m here to listen, anytime you need to talk.',
        'Take it easy and remember, you’re loved.',
        'Sometimes the hardest moments lead to the greatest growth.',
        'You’re not alone on this journey; I’m with you.',
        'Don’t forget to be kind to yourself during tough times.',
        'I’ve got you—always and forever.',
        'No matter what happens, we’ll face it together.',
        'I’ll be right here, cheering you on.',
        'You are enough, just as you are.'
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