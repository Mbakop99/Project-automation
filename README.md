# Project-automation
## Automation Testing mit Playwright

Dieses Projekt ist eine automatisierte Testlösung für eine Webanwendung, die mit **Playwright** in **Visual Studio Code** entwickelt wurde. Es beinhaltet zwei Testfälle, um die Navigation und das Buchungssystem der Anwendung zu überprüfen.

## Projektübersicht

### Testfälle
1. **Überprüfung der Navigationsleiste**  
   - Stellt sicher, dass auf der Startseite **fünf Navigationsmenü-Elemente** vorhanden sind.

2. **Buchungsprozess-Validierung**  
   - Prüft, ob nach dem Klicken auf den **"Buchen"-Button** die **Buchungsformular-Seite** mit einer neuen URL geöffnet wird.
   - Überprüft, ob nach dem **Ausfüllen und Einreichen** des Formulars eine **Buchungsbestätigung** angezeigt wird.

## Technologie-Stack
- **Playwright**: Für das Durchlaufen der automatisierten Tests
- **Visual Studio Code**: Entwicklungsumgebung
- **JavaScript**: Programmiersprache für die Testfälle

## Installation & Setup

1. **Repository klonen:**
   ```sh
   git clone <repository-url>
   cd <projektverzeichnis>
   ```

2. **Abhängigkeiten installieren:**
   ```sh
   npm install
   ```

3. **Playwright-Browser installieren:**
   ```sh
   npx playwright install
   ```

## Tests ausführen

Zum Starten der Tests verwende den folgenden Befehl:
```sh
npx playwright test
```

Für einen bestimmten Test:
```sh
npx playwright test <testdatei>.spec.ts
```

## Kontakt
Falls Fragen oder Probleme auftreten, kannst du mich unter **[deine E-Mail-Adresse]** erreichen.

