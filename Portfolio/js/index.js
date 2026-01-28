function updateDateTime() {
    const now = new Date();
    
    // Time Format (HH:MM:SS)
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);
    
    // Date Format (DD Month, YYYY)
    const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);

    document.getElementById('current-time').innerText = timeString;
    document.getElementById('current-date').innerText = dateString;
}

// Protiti second-e update hobe
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call