---
layout: default
title: Home
---

<div class="hero">
    <div class="container">
        <h1>Unix User Group Rhein-Neckar</h1>
        <p>Unix und Linux User in der Metropolregion Rhein-Neckar seit 1998</p>
    </div>
</div>

<div class="container">
    <!-- Upcoming Events Section -->
    <div class="upcoming-events">
        <h2>📅 Nächste Termine</h2>
        <div class="events-grid">
            <div class="event-card">
                <div class="event-card-left">
                    <iframe src="https://vorstand.uugrn.org/Kalender/next_fixme.html" class="event-info-iframe" scrolling="no" frameborder="0"></iframe>
                </div>
                <div class="event-card-right">
                    <a href="{{ '/fixme/' | relative_url }}" class="btn btn-small">Details →</a>
                </div>
            </div>

            <div class="event-card">
                <div class="event-card-left">
                    <iframe src="https://vorstand.uugrn.org/Kalender/next_stammtisch.html" class="event-info-iframe" scrolling="no" frameborder="0"></iframe>
                </div>
                <div class="event-card-right">
                    <a href="{{ '/stammtisch/' | relative_url }}" class="btn btn-small">Details →</a>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
    <div class="two-col-layout">
        <div class="main-col">
            <div class="card compact">
                <h2>🔧 FIXME - Hands-On Treffen</h2>
                <p>Workshops, Vorträge und praktisches Experimentieren mit Technik. Live-Demos, Support für UUGRN-Dienste, Pizza & Getränke.</p>
                <a href="{{ '/fixme/' | relative_url }}" class="btn btn-small">Mehr Infos →</a>
            </div>

            <div class="card compact">
                <h2>🍺 Stammtisch - Geselliges Treffen</h2>
                <p>Lockerer Austausch in entspannter Atmosphäre. 5-20 Leute plaudern informell, oft bis Mitternacht. Jede/r willkommen, keine Anmeldung nötig.</p>
                <a href="{{ '/stammtisch/' | relative_url }}" class="btn btn-small">Mehr Infos →</a>
            </div>

            <div class="card compact about-section">
                <h2>Über uns</h2>
                <p>
                    Die UUGRN ist seit 1998 eine offene Community in der Metropolregion Rhein-Neckar für Unix- und Linux-Enthusiasten
                    (FreeBSD, BSD, Unix, Linux, Open Source). Die Teilnahme ist nicht an eine Mitgliedschaft gekoppelt – alle sind willkommen!
                </p>
                <a href="{{ '/about/' | relative_url }}" class="btn btn-small">Mehr erfahren →</a>
            </div>
        </div>

        <div class="sidebar-col">
            <div class="card compact community-links">
                <h2>💬 Community</h2>
                <ul class="link-list">
                    <li><a href="{{ site.mastodon }}" target="_blank">📱 Mastodon</a></li>
                    <li><a href="{{ site.telegram }}" target="_blank">💬 Telegram</a></li>
                    <li><a href="{{ site.reddit }}" target="_blank">🔗 Reddit</a></li>
                    <li><a href="{{ site.irc }}" target="_blank">💻 IRC</a></li>
                    <li><a href="https://lists.uugrn.org" target="_blank">📧 Mailingliste</a></li>
                    <li><a href="https://wiki.uugrn.org" target="_blank">📚 Wiki</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
