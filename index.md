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
            <div class="card compact about-section">
                <h2>Über uns</h2>
                <p>
                    Die UUGRN ist seit 1998 eine offene Community in der Metropolregion Rhein-Neckar für Unix- und
                    Linux-Enthusiasten (FreeBSD, BSD, Unix, Linux, Open Source). Was als kleine Gruppe von Unix-Begeisterten
                    begann, hat sich über mehr als zwei Jahrzehnte zu einer lebendigen Community entwickelt.
                </p>
                <p>
                    Unsere Geschichte beginnt in den späten 1990er Jahren, als sich die ersten Unix- und Linux-Anwender in der
                    Region zusammenfanden. Damals waren Linux und BSD noch echte Nischensysteme, und der Austausch von Wissen
                    war essentiell. Heute umfasst unsere Community Mitglieder von Anfängern bis zu erfahrenen Systemadministratoren,
                    Entwicklern und IT-Profis.
                </p>
                <p>
                    Die Teilnahme ist nicht an eine Mitgliedschaft gekoppelt – alle sind willkommen! Wir leben von der Offenheit
                    und dem freiwilligen Engagement unserer Teilnehmer. Ob du gerade erst mit Linux anfängst oder seit Jahren
                    BSD-Systeme administrierst, bei uns findest du Gleichgesinnte und spannende Diskussionen.
                </p>
                <a href="{{ '/about/' | relative_url }}" class="btn btn-small">Mehr erfahren →</a>
            </div>

            <div class="card compact">
                <h2>🔧 FIXME - Hands-On Treffen</h2>
                <p>
                    FIXME ist unser monatliches Hands-On Event für alle, die gerne praktisch mit Technik arbeiten.
                    Jeden ersten Freitag im Monat ab 19:00 Uhr im Dezernat 16 in Heidelberg treffen sich Tinkerer, Maker
                    und IT-Enthusiasten zum gemeinsamen Experimentieren, Lernen und Austausch.
                </p>
                <p>
                    Die Teilnehmer präsentieren informelle Demonstrationen und Vorträge im "Show and Tell"-Stil. Themen werden
                    über das FIXME-Wiki koordiniert, aber auch spontanes hands-on arbeiten an technischen Projekten gehört dazu.
                    Die Veranstaltung ist kostenlos, Getränke und Essen werden selbst bezahlt. Pizza wird oft gemeinsam bestellt.
                </p>
                <p>
                    Von Linux-Administration über Programmierung bis zu Hardware-Projekten – wir organisieren Live-Demos neuer
                    Technologien, bieten Support für UUGRN-Dienste und diskutieren aktuelle Entwicklungen in der Open-Source-Welt.
                    Newcomer sind immer dabei, du bist also in guter Gesellschaft! Keine Anmeldung erforderlich.
                </p>
                <a href="{{ '/fixme/' | relative_url }}" class="btn btn-small">Mehr Infos →</a>
            </div>

            <div class="card compact">
                <h2>🍺 Stammtisch - Geselliges Treffen</h2>
                <p>
                    Unser legendärer Stammtisch ist das Herzstück der UUGRN. Jeden dritten Montag im Monat ab 18:30 Uhr
                    treffen sich regelmäßig 5-20 Unix- und Linux-Begeisterte zum lockeren Austausch in Restaurant-Atmosphäre.
                    Die Gespräche reichen von technischen Diskussionen über neue Distributionen bis zu Alltäglichem – oft
                    plaudern wir bis Mitternacht oder länger.
                </p>
                <p>
                    Der Stammtisch findet aktuell in der METROPOLIS Lounge in Walldorf statt und bietet die perfekte Gelegenheit,
                    die Community kennenzulernen. Die Teilnehmerzahl variiert je nach Jahreszeit und Wetter. Neue Gesichter sind
                    immer herzlich willkommen! Es gibt keine Agenda, keine Vorträge – nur gute Gespräche bei einem Getränk.
                </p>
                <p>
                    Im Gegensatz zum FIXME steht hier das gesellige Beisammensein im Vordergrund, nicht die technische Arbeit.
                    Jede/r ist willkommen, eine Anmeldung ist nicht nötig. Einfach vorbeikommen, dazusetzen und mitmachen.
                    Viele langjährige Freundschaften sind an unserem Stammtisch entstanden. Newcomer sind immer dabei – du bist in guter Gesellschaft!
                </p>
                <a href="{{ '/stammtisch/' | relative_url }}" class="btn btn-small">Mehr Infos →</a>
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
                    <li><a href="{{ '/kalender/' | relative_url }}">📅 Kalender</a></li>
                    <li><a href="{{ '/artwork/' | relative_url }}">🎨 Artwork</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
