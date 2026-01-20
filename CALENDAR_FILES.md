# Calendar Files for vorstand.uugrn.org

Place these files in `/Kalender/` directory on vorstand.uugrn.org

## next_fixme.html
Full event details displayed on the left side of the card

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #333;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        p { margin: 0.25rem 0; }
        strong { color: #2c3e50; }
    </style>
</head>
<body>
<p><strong>Datum:</strong> Friday, 07.02.2026</p>
<p><strong>Uhrzeit:</strong> 19:00 Uhr</p>
<p><strong>Ort:</strong> Dezernat 16, Emil-Maier-Str. 16, 69115 Heidelberg</p>
</body>
</html>
```

## next_fixme_compact.html
Compact info displayed in the badge on the right side

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #666;
            font-size: 0.85rem;
            text-align: center;
        }
    </style>
</head>
<body>
19:00 Uhr · Dezernat 16, Heidelberg
</body>
</html>
```

## next_stammtisch.html
Full event details displayed on the left side of the card

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #333;
            font-size: 0.9rem;
            line-height: 1.6;
        }
        p { margin: 0.25rem 0; }
        strong { color: #2c3e50; }
    </style>
</head>
<body>
<p><strong>Datum:</strong> Monday, 17.02.2026</p>
<p><strong>Uhrzeit:</strong> 18:30 Uhr</p>
<p><strong>Ort:</strong> METROPOLIS Lounge Walldorf, Impexstr. 1, 69190 Walldorf</p>
</body>
</html>
```

## next_stammtisch_compact.html
Compact info displayed in the badge on the right side

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            color: #666;
            font-size: 0.85rem;
            text-align: center;
        }
    </style>
</head>
<body>
18:30 Uhr · METROPOLIS Lounge, Walldorf
</body>
</html>
```

## Update Instructions

To update event dates:
1. Edit the date/time/location in each file
2. Keep the HTML structure and styling intact
3. The files will be loaded via iframes on the website
4. Changes will appear immediately on the site
