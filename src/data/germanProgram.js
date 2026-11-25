import { germanTours } from "@/data/germanTours";

export const germanTourUi = {
  back: "Erlebnisse", experience: "Das Erlebnis", consult: "Erlebnis anfragen", route: "Ablauf ansehen",
  relatedEyebrow: "Weitere Möglichkeiten", relatedTitle: "Weitere Erlebnisse in Tambopata.",
  whatsapp: "Über WhatsApp anfragen",
  titles: Object.fromEntries(Object.entries(germanTours).map(([slug, tour]) => [slug, tour.title])),
};

export const germanProgram = {
  back: "Erlebnisse", eyebrow: "Komplettes Programm · Tambopata", title: "Vier Tage im Amazonasgebiet.",
  intro: "Eine Reise über vier Tage und drei Nächte zu Flüssen, Seen, Wald, Baumkronen und Lehmlecken mit einem englischsprachigen Naturguide.",
  consult: "Programm anfragen", itinerary: "Reiseverlauf ansehen", experience: "Das Erlebnis",
  overviewTitle: "Ein vielseitiger Blick auf den Amazonas.",
  overview: ["Das Programm verbindet Bootsfahrten, Wanderungen und Tierbeobachtung in den Ökosystemen von Tambopata.", "Verfügbarkeit, Preis und Einzelheiten werden für Ihre Termine bestätigt. Die geplante Unterkunft ist Cocos House Tambopata."],
  facts: [["Dauer", "4 Tage / 3 Nächte"], ["Schwierigkeit", "Mittel"], ["Unterkunft", "Privatzimmer"], ["Verpflegung", "Vom Mittagessen an Tag 1 bis zum Frühstück an Tag 4"], ["Begleitung", "Englischsprachiger Naturguide"], ["Gruppe", "Je nach Verfügbarkeit"]],
  journeyTitle: "Jeder Tag bringt neue Eindrücke.",
  journeyCopy: "Zeiten können sich wegen Wetter, Wasserstand, Betrieb und Tieraktivität ändern.",
  info: "Klare Informationen", infoTitle: "Alles Wichtige vor der Buchung.",
  includedTitle: "Im Programm enthalten", excludedTitle: "Nicht enthalten",
  lodgeEyebrow: "Unterkunft", lodgeTitle: "Cocos House Tambopata.",
  lodgeCopy: "Eine von Regenwald umgebene Lodge nahe dem Tambopata-Fluss, in der Sie sich zwischen den Aktivitäten erholen können.",
  photoNote: "Aktuelle Zimmerfotos erhalten Sie auf Anfrage.",
  lodgeNote: "Der Zimmertyp hängt von Gruppengröße und Verfügbarkeit ab.", lodgeButton: "Unterkunft anfragen",
  prepEyebrow: "Vor der Reise", prepTitle: "Bereiten Sie sich auf den Regenwald vor.",
  prepIntro: "Nach der Buchung erhalten Sie Empfehlungen für die Jahreszeit und Ihre Termine.",
  relatedEyebrow: "Mehr entdecken", relatedTitle: "Erlebnisse des Programms.",
  cta: "Möchten Sie das vollständige Programm?", ctaCopy: "Senden Sie uns Reisedaten und Gruppengröße. Die persönliche Betreuung erfolgt auf Englisch.", whatsapp: "Über WhatsApp anfragen",
  days: [
    ["Tag 01", "Ankunft und Flussfahrt bei Sonnenuntergang", "Empfang, Transfer zur Lodge, Bootsfahrt bei Sonnenuntergang und nächtliche Suche nach Kaimanen."],
    ["Tag 02", "Sandoval-See und nächtlicher Regenwald", "Wanderung und Kanufahrt auf dem Sandoval-See, danach eine geführte Nachtwanderung."],
    ["Tag 03", "Baumkronen, Brücken und Leben am Wasser", "Aussichtsturm, Hängebrücken und bei passenden Bedingungen ein Ausflug zum Yacumama-See."],
    ["Tag 04", "Papageien-Lehmlecke und Abschied", "Besuch der Lehmlecke vor Sonnenaufgang, Frühstück und abschließender Transfer."],
  ].map(([number, title, copy]) => ({ number, title, copy })),
  included: ["Transfer vom und zum Flughafen oder Busbahnhof", "Flusstransport und Kanufahrt", "Drei Nächte im Privatzimmer", "Mahlzeiten laut Reiseverlauf", "Englischsprachiger Naturguide", "Eintritt und Sicherheitsausrüstung"],
  excluded: ["Nationale und internationale Flüge", "Alkoholische Getränke", "Persönliche Ausgaben und Trinkgeld", "Reiseversicherung", "Nicht in der Bestätigung genannte Leistungen"],
};

export const germanProgramPrep = [
  ["Wetter und Kleidung", "Rechnen Sie mit Hitze, Feuchtigkeit und Regen. Bringen Sie leichte lange Kleidung, Regenschutz und geschlossene Schuhe mit."],
  ["Persönlicher Schutz", "Packen Sie Insektenschutz, Sonnencreme, Hut, Trinkflasche und Taschenlampe ein."],
  ["Gesundheit", "Informieren Sie uns über Allergien und besondere Bedürfnisse. Lassen Sie sich medizinisch zu Impfungen beraten."],
  ["Geld und Verbindung", "Nehmen Sie Bargeld in Soles mit. Mobilfunk und Internet können eingeschränkt sein."],
  ["Gepäck", "Reisen Sie leicht und schützen Sie Dokumente und Kamera vor Feuchtigkeit."],
  ["Voraussetzungen", "Sie sollten unebene Wege gehen und Boote besteigen können."],
];

export const germanProgramServices = ["Privatzimmer", "Eigenes Bad", "Warmwasser", "Strom", "Restaurant", "Täglich frisch zubereitete Mahlzeiten"];
