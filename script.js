function updateDateTime() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');
    const currentDate = new Date();
    const options = { weekday: 'long' };

    const formattedDayOfWeek = currentDate.toLocaleDateString('en-US', options);
    const currentUTCTime = currentDate.getTime();

    dayOfWeekElement.textContent = formattedDayOfWeek;
    utcTimeElement.textContent = currentUTCTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
