document.addEventListener('DOMContentLoaded', function () {
    const eventNameInput = document.getElementById('event-name-input');
    const eventDateInput = document.getElementById('event-date-input');
    const countdownScreen = document.getElementById('countdown');
    const eventsList = document.getElementById('events');
    const eventForm = document.getElementById('event-form');

    eventForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const eventName = eventNameInput.value;
        const eventDate = new Date(eventDateInput.value);
        
        if (!eventName || isNaN(eventDate.getTime())) {
            alert('Please enter valid event details.');
            return;
        }

        const newEvent = {
            name: eventName,
            date: eventDate
        };

        // Add the new event to the list
        addEventToList(newEvent);

        // Reset the form inputs
        eventNameInput.value = '';
        eventDateInput.value = '';
    });

    function addEventToList(event) {
        const eventListItem = document.createElement('li');
        eventListItem.textContent = `${event.name} - ${event.date.toDateString()}`;
        eventsList.appendChild(eventListItem);

        // Update the countdown screen with the new event
        updateCountdownScreen(event);
    }

    function updateCountdownScreen(event) {
        const now = new Date();
        const timeDifference = event.date - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownScreen.textContent = `${days} days and ${hours} hours until ${event.name}`;
    }
});
