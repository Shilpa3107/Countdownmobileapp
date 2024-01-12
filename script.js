document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const eventNameElement = document.getElementById('event-name');
    const eventsListElement = document.getElementById('events');
    const eventForm = document.getElementById('event-form');

    let events = [];

    // Function to update the countdown display
    function updateCountdown(event) {
        const now = new Date();
        const eventDate = new Date(event.date);
        const timeDiff = eventDate - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownElement.textContent = `${days} days ${hours} hours`;
    }

    // Function to add a new event to the list
    function addEventToList(event) {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        eventsListElement.appendChild(listItem);
    }

    // Event form submission handler
    eventForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const eventName = document.getElementById('event-name-input').value;
        const eventDate = document.getElementById('event-date-input').value;

        const newEvent = {
            name: eventName,
            date: eventDate
        };

        events.push(newEvent);
        addEventToList(newEvent);

        // Reset input fields
        eventForm.reset();

        // If it's the first event, set it as the active event
        if (events.length === 1) {
            eventNameElement.textContent = eventName;
            setInterval(() => updateCountdown(newEvent), 1000); // Update every second
        }
    });
});
