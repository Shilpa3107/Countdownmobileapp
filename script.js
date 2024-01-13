document.addEventListener('DOMContentLoaded', function () {
    const countdownElement = document.getElementById('countdown');
    const eventNameElement = document.getElementById('event-name');
    const eventsListElement = document.getElementById('events');
    const eventListContainer = document.getElementById('events-list');
    const addEventForm = document.getElementById('add-event-form');
    const addEventButton = document.getElementById('add-event-button');
    const eventForm = document.getElementById('event-form');
    let events = [];
    let activeEventIndex = null;
    // Function to update the countdown display
    function updateCountdown() {
        if (activeEventIndex !== null) {
            const now = new Date();
            const eventDate = new Date(events[activeEventIndex].date);
            const timeDiff = eventDate - now;
            if (timeDiff > 0) {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
                let countdownText = '';
                if (days > 0) {
                    countdownText += `${days} days `;
                }
                if (hours > 0 || days > 0) {
                    countdownText += `${hours} hours `;
                }
                if (minutes > 0 || hours > 0 || days > 0) {
                    countdownText += `${minutes} minutes `;
                }
                countdownText += `${seconds} seconds`;
                countdownElement.textContent = countdownText;
            } else {
                countdownElement.textContent = 'Event has passed';
            }
        }
    }
    // Function to add a new event to the list
    function addEventToList(event, index) {
        const listItem = document.createElement('li');
        listItem.textContent = `${event.name} - ${event.date}`;
        listItem.addEventListener('click', function () {
            // Set the selected event as the active event
            activeEventIndex = index;
            // Display the countdown for the selected event
            eventNameElement.textContent = event.name;
            updateCountdown();
        });
        eventsListElement.appendChild(listItem);
        // Adjust the max-height of the event list container to show scrollbar
        eventListContainer.style.maxHeight = 50;
    }
    // Event form submission handler
    eventForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const eventNameInput = document.getElementById('event-name-input');
        const eventDateInput = document.getElementById('event-date-input');
        const eventName = eventNameInput.value;
        const eventDate = eventDateInput.value;
        const newEvent = {
            name: eventName,
            date: eventDate
        };
        events.push(newEvent);
        addEventToList(newEvent, events.length - 1);
        // Reset input fields
        eventNameInput.value = '';
        eventDateInput.value = '';
        // If it's the first event, set it as the active event
        if (events.length === 1) {
            activeEventIndex = 0;
            eventNameElement.textContent = eventName;
            setInterval(updateCountdown, 1000); // Update every second
        }
    });
    
});