---
layout: default
title: Kalender
permalink: /kalender/
---

<div class="container">
    <h1>UUGRN Kalender</h1>
    <p>Alle UUGRN Events im Überblick. Der aktuelle Monat ist hervorgehoben.</p>

    <div id="calendar-loading" style="text-align: center; padding: 2rem;">
        <p>Lade Kalender...</p>
    </div>

    <div id="calendar-error" style="display: none; padding: 1rem; background: #ffebee; border: 1px solid #f44336; border-radius: 4px; margin: 1rem 0;">
        <p style="margin: 0; color: #c62828;">Fehler beim Laden des Kalenders. Bitte versuche es später erneut.</p>
    </div>

    <div id="year-calendar" style="display: none;"></div>
</div>

<style>
.year-calendar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.month-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.month-card.current-month {
    border: 2px solid #2196F3;
    box-shadow: 0 4px 8px rgba(33, 150, 243, 0.2);
}

.month-header {
    text-align: center;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #eee;
}

.current-month .month-header {
    color: #2196F3;
    border-bottom-color: #2196F3;
}

.calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    margin-top: 0.5rem;
}

.day-header {
    text-align: center;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0.3rem;
    color: #666;
}

.day-cell {
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    border-radius: 4px;
    position: relative;
    cursor: default;
}

.day-cell.empty {
    background: transparent;
}

.day-cell.has-event {
    background: #e3f2fd;
    font-weight: bold;
    color: #1976D2;
    cursor: pointer;
}

.day-cell.has-event:hover {
    background: #bbdefb;
}

.day-cell.today {
    background: #2196F3;
    color: white;
    font-weight: bold;
}

.day-cell.today.has-event {
    background: #1976D2;
}

.event-indicator {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #2196F3;
    border-radius: 50%;
}

.events-list {
    margin-top: 2rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 8px;
}

.event-item {
    background: white;
    padding: 1rem;
    margin: 0.5rem 0;
    border-left: 4px solid #2196F3;
    border-radius: 4px;
}

.event-title {
    font-weight: bold;
    margin-bottom: 0.3rem;
}

.event-details {
    font-size: 0.9rem;
    color: #666;
}
</style>

<script>
// Simple ICS parser
function parseICS(icsText) {
    const events = [];
    const lines = icsText.split('\n').map(line => line.trim());
    let currentEvent = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

        if (line === 'BEGIN:VEVENT') {
            currentEvent = {};
        } else if (line === 'END:VEVENT' && currentEvent) {
            events.push(currentEvent);
            currentEvent = null;
        } else if (currentEvent) {
            const colonIndex = line.indexOf(':');
            if (colonIndex > 0) {
                let key = line.substring(0, colonIndex);
                let value = line.substring(colonIndex + 1);

                // Handle DTSTART and DTEND with timezone info
                if (key.startsWith('DTSTART')) {
                    currentEvent.startDate = parseICSDate(value);
                } else if (key.startsWith('DTEND')) {
                    currentEvent.endDate = parseICSDate(value);
                } else if (key === 'SUMMARY') {
                    currentEvent.summary = value;
                } else if (key === 'LOCATION') {
                    currentEvent.location = value;
                } else if (key === 'DESCRIPTION') {
                    currentEvent.description = value;
                }
            }
        }
    }

    return events;
}

function parseICSDate(dateStr) {
    // Handle both YYYYMMDD and YYYYMMDDTHHmmss formats
    if (dateStr.length === 8) {
        // YYYYMMDD
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        return new Date(year, parseInt(month) - 1, day);
    } else {
        // YYYYMMDDTHHmmss or YYYYMMDDTHHmmssZ
        const year = dateStr.substring(0, 4);
        const month = dateStr.substring(4, 6);
        const day = dateStr.substring(6, 8);
        const hour = dateStr.substring(9, 11) || '00';
        const minute = dateStr.substring(11, 13) || '00';
        return new Date(year, parseInt(month) - 1, day, hour, minute);
    }
}

function generateYearCalendar(events) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();
    const today = now.getDate();

    const monthNames = [
        'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
        'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
    ];

    const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

    // Group events by date
    const eventsByDate = {};
    events.forEach(event => {
        if (event.startDate) {
            const dateKey = `${event.startDate.getFullYear()}-${event.startDate.getMonth()}-${event.startDate.getDate()}`;
            if (!eventsByDate[dateKey]) {
                eventsByDate[dateKey] = [];
            }
            eventsByDate[dateKey].push(event);
        }
    });

    let html = '<div class="year-calendar-grid">';

    for (let month = 0; month < 12; month++) {
        const isCurrentMonth = (month === currentMonth);
        const firstDay = new Date(currentYear, month, 1);
        const lastDay = new Date(currentYear, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        // Get the day of week (0 = Sunday, 1 = Monday, etc.)
        // Adjust so Monday = 0
        let startDay = firstDay.getDay() - 1;
        if (startDay === -1) startDay = 6;

        html += `<div class="month-card ${isCurrentMonth ? 'current-month' : ''}">`;
        html += `<div class="month-header">${monthNames[month]} ${currentYear}</div>`;
        html += '<div class="calendar-grid">';

        // Day headers
        dayNames.forEach(day => {
            html += `<div class="day-header">${day}</div>`;
        });

        // Empty cells before first day
        for (let i = 0; i < startDay; i++) {
            html += '<div class="day-cell empty"></div>';
        }

        // Days of month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateKey = `${currentYear}-${month}-${day}`;
            const hasEvent = eventsByDate[dateKey] && eventsByDate[dateKey].length > 0;
            const isToday = (isCurrentMonth && day === today);

            let classes = 'day-cell';
            if (hasEvent) classes += ' has-event';
            if (isToday) classes += ' today';

            const eventCount = hasEvent ? eventsByDate[dateKey].length : 0;
            const title = hasEvent ? `${eventCount} Event(s)` : '';

            html += `<div class="${classes}" title="${title}" data-date="${currentYear}-${month + 1}-${day}">`;
            html += day;
            if (hasEvent && !isToday) {
                html += '<div class="event-indicator"></div>';
            }
            html += '</div>';
        }

        html += '</div></div>';
    }

    html += '</div>';

    // Add events list
    const upcomingEvents = events
        .filter(e => e.startDate && e.startDate >= now)
        .sort((a, b) => a.startDate - b.startDate)
        .slice(0, 10);

    if (upcomingEvents.length > 0) {
        html += '<div class="events-list">';
        html += '<h2>Kommende Events</h2>';
        upcomingEvents.forEach(event => {
            const dateStr = event.startDate.toLocaleDateString('de-DE', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            const timeStr = event.startDate.toLocaleTimeString('de-DE', {
                hour: '2-digit',
                minute: '2-digit'
            });

            html += '<div class="event-item">';
            html += `<div class="event-title">${event.summary || 'Event'}</div>`;
            html += `<div class="event-details">📅 ${dateStr} um ${timeStr}</div>`;
            if (event.location) {
                html += `<div class="event-details">📍 ${event.location}</div>`;
            }
            html += '</div>';
        });
        html += '</div>';
    }

    return html;
}

// Fetch and display calendar
async function loadCalendar() {
    try {
        const response = await fetch('https://vorstand.uugrn.org/Kalender/Termine.ics');
        if (!response.ok) throw new Error('Failed to fetch calendar');

        const icsText = await response.text();
        const events = parseICS(icsText);

        document.getElementById('calendar-loading').style.display = 'none';
        document.getElementById('year-calendar').style.display = 'block';
        document.getElementById('year-calendar').innerHTML = generateYearCalendar(events);

    } catch (error) {
        console.error('Error loading calendar:', error);
        document.getElementById('calendar-loading').style.display = 'none';
        document.getElementById('calendar-error').style.display = 'block';
    }
}

// Load calendar when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCalendar);
} else {
    loadCalendar();
}
</script>
