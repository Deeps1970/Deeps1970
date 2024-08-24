document.querySelectorAll('header .navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly.');
    this.reset();
});


const chatboxIcon = document.getElementById('chatboxIcon');
const chatboxContainer = document.getElementById('chatboxContainer');
const closeChatbox = document.getElementById('closeChatbox');

chatboxIcon.addEventListener('click', function() {
    chatboxContainer.style.display = 'flex'; // Show the chatbox
    chatboxIcon.style.display = 'none'; // Hide the chat icon
});

closeChatbox.addEventListener('click', function() {
    chatboxContainer.style.display = 'none'; // Hide the chatbox
    chatboxIcon.style.display = 'flex'; // Show the chat icon
});

document.getElementById('chatboxForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const chatboxMessages = document.getElementById('chatboxMessages');
    const chatboxInput = document.getElementById('chatboxInput');
    const message = chatboxInput.value.trim();

    if (message) {
        const msgElement = document.createElement('p');
        msgElement.textContent = message;
        chatboxMessages.appendChild(msgElement);
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        chatboxInput.value = '';
    }
});