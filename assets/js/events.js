// Dynamically load next event dates from UUGRN calendar
document.addEventListener('DOMContentLoaded', function() {
    loadNextFixme();
    loadNextStammtisch();
});

async function loadNextFixme() {
    try {
        const response = await fetch('https://vorstand.uugrn.org/Kalender/next_fixme.html', {
            mode: 'cors',
            cache: 'no-cache'
        });
        if (response.ok) {
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.body.textContent.trim();

            if (content) {
                updateEventDate('fixme', content);
            }
        }
    } catch (error) {
        console.log('Could not load FIXME date:', error);
        // Keep static fallback date - CORS might block external requests
    }
}

async function loadNextStammtisch() {
    try {
        const response = await fetch('https://vorstand.uugrn.org/Kalender/next_stammtisch.html', {
            mode: 'cors',
            cache: 'no-cache'
        });
        if (response.ok) {
            const html = await response.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const content = doc.body.textContent.trim();

            if (content) {
                updateEventDate('stammtisch', content);
            }
        }
    } catch (error) {
        console.log('Could not load Stammtisch date:', error);
        // Keep static fallback date - CORS might block external requests
    }
}

function updateEventDate(eventType, dateString) {
    // Parse the date string (format might be like "07.02.2025" or similar)
    const parts = dateString.match(/(\d{1,2})\.(\d{1,2})\.(\d{4})/);

    if (parts) {
        const day = parts[1].padStart(2, '0');
        const month = parts[2].padStart(2, '0');
        const year = parts[3];

        // Create date object
        const date = new Date(year, month - 1, day);

        // Get day name in German
        const dayNames = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        const monthNames = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

        const dayName = dayNames[date.getDay()];
        const monthName = monthNames[date.getMonth()];

        // Update the badge with animation
        const badge = document.querySelector(`[data-event="${eventType}"] .event-date-badge`);
        if (badge) {
            badge.style.opacity = '0.5';
            setTimeout(() => {
                badge.querySelector('.event-day').textContent = dayName;
                badge.querySelector('.event-num').textContent = day;
                badge.querySelector('.event-month').textContent = monthName;
                badge.style.opacity = '1';
            }, 150);
        }
    }
}
