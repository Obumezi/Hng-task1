function updateDateTime() {
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');
    const currentDate = new Date();

    // Format day of the week
    const options = { weekday: 'long' };
    const formattedDayOfWeek = new Intl.DateTimeFormat('en-US', options).format(currentDate);

    // Format UTC time with milliseconds
    const utcOptions = { timeZone: 'UTC', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 };
    const formattedUTCTime = new Intl.DateTimeFormat('en-US', utcOptions).format(currentDate);

    dayOfWeekElement.textContent = formattedDayOfWeek;
    utcTimeElement.textContent = formattedUTCTime;
}

// Update the date and time every millisecond (for milliseconds)
setInterval(updateDateTime, 1);

// Initial update
updateDateTime();
