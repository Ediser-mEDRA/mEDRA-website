---
title: Was ist der DOI
description: Der Digital Object Identifier (DOI) ist eine dauerhafte
  Dokumentenkennung, die zur Zitierung und Verlinkung von elektronischen
  Dokumenten (Texte, aber auch Bild- oder Audio-Dokumente) in einem digitalen
  Netzwerk verwendet wird. Über den DOI sind dem Dokument aktuelle und
  strukturierte Metadaten zugeordnet.
weight: 20
draft: true
date: 2026-09-16T12:25:00.000+02:00
author: Jehu Procore Njikonga
---
![mEDRA Logo](/images/medra-logo.png "mEDRA – DOI Registration Agency")

# Was ist der DOI

- [Was versteht man unter einem DOI?](#was-versteht-man-unter-einem-doi)
- [Was kann durch einen DOI identifiziert werden?](#was-kann-durch-einen-doi-identifiziert-werden)
- [Wie sieht die DOI-Struktur aus?](#wie-sieht-die-doi-struktur-aus)
- [Was bedeutet DOI-Auflösung?](#was-bedeutet-doi-auflösung)
- [Was sind Metadaten und wie stehen sie in Verbindung mit dem DOI?](#was-sind-metadaten-und-wie-stehen-sie-in-verbindung-mit-dem-doi)
- [Wer ist die Internationale DOI Foundation?](#wer-ist-die-internationale-doi-foundation)
- [Was sind DOI-Agenturen?](#was-sind-doi-agenturen)
- [Welche Vorteile hat es, wenn man DOIs registriert?](#welche-vorteile-hat-es-wenn-man-dois-registriert)
- [Wie starte ich mit der Registrierung von DOIs?](#wie-starte-ich-mit-der-registrierung-von-dois)

> Weitere ausführliche Informationen zu den meisten der oben angesprochenen Themen finden Sie im [DOI Handbuch](http://www.doi.org) der International DOI Foundation.

---

## Was versteht man unter einem DOI?

Der **Digital Object Identifier (DOI)** ist eine dauerhafte Dokumentenkennung, die zur Zitierung und Verlinkung von elektronischen Dokumenten (Texte, aber auch Bild- oder Audio-Dokumente) in einem digitalen Netzwerk verwendet wird. Über den DOI sind dem Dokument aktuelle und strukturierte Metadaten zugeordnet.

DOIs werden bezeichnet als der **„Barcode des geistigen Eigentums"**: wie der körperliche Barcode ist der DOI ein unverwechselbares Instrument zur Identifizierung innerhalb der gesamten Supply Chain und stellt somit ein Rationalisierungsmittel dar.

Ein DOI unterscheidet sich von anderen, gewöhnlich im Internet verwendeten Verweissystemen wie der URL, weil er dauerhaft mit dem Objekt als Entität verknüpft ist und nicht lediglich mit dem Ort, an dem das Objekt platziert ist. Der DOI identifiziert eine Entität direkt und unmittelbar, also nicht eine Eigenschaft des Objekts (eine Adresse ist lediglich eine Eigenschaft des Dokuments, die verändert werden und dann ggf. nicht mehr zur Identifikation des Objekts herangezogen werden kann).

Ein DOI unterscheidet sich von sonstigen Identifizierern von geistigem Eigentum wie standardisierten bibliografischen Identifizierern (ISBN, ISRC etc.) auch deshalb, weil er in bestimmte Dienste eingebunden werden und in einem Netzwerk direkt und dauerhaft genutzt werden kann.

## Was kann durch einen DOI identifiziert werden?

Ein DOI kann auf jegliche Form geistigen Eigentums angewandt werden, welches über irgendein digitales System verfügbar gemacht wird.

Der Begriff „Geistiges Eigentum" (Intellectual Property) umfasst sowohl physikalische und digitale Manifestationen, Aufführungen als auch Werke und Abstraktionen: DOIs können verwendet werden, um Texte, Bilddaten, Audio- oder Video-Daten, Software usw. zu identifizieren.

Eine Entität kann auf jeder beliebigen Ebene der Granularität identifizierbar gemacht werden. Dies bedeutet, dass z. B. DOIs eine gesamte Zeitschrift, eine spezielle Ausgabe einer Zeitschrift, einen speziellen Artikel in einer Zeitschrift oder eine einzelne Tabelle in diesem Artikel identifizieren können.

## Wie sieht die DOI-Struktur aus?

Der DOI besteht aus einer eindeutigen alphanumerischen Zeichenfolge, die in zwei Teile, einen **Präfix** und einen **Suffix**, gegliedert ist.

Zum Beispiel ist:

```
10.1392/roma081203
```

ein kompletter DOI. Er setzt sich zusammen aus:

- `10.1392` — dem **Präfix**, welches aus der DOI-Kennung (`10`) und der Verlagsnummer (`1392` im Beispiel) besteht
- `roma081203` — dem **Suffix**, welches das einzelne digitale Objekt identifiziert

Das Präfix wird von der DOI-Agentur vergeben. Das Suffix vergibt der registrierte Verlag (Produzent). Es muss innerhalb eines Präfixes eindeutig sein. Es kann andere Standard-Identifizierer wie ISBN oder ISSN enthalten: dies bedeutet, dass der DOI andere bereits verwendete Standard-Identifizierer integrieren kann.

Präfix und Suffix werden durch einen Schrägstrich `/` voneinander getrennt.

Ein DOI ist **case insensitive**, d. h. im Textstring wird nicht zwischen Groß- und Kleinschreibung unterschieden (z. B. ist `10.1392/roma081203` das gleiche wie `10.1392/ROMA081203`). Ein DOI ist lediglich eine einfache Zeichenfolge, außer seiner Verwendung im DOI-System kann nichts von ihm abgeleitet werden.

## Was bedeutet DOI-Auflösung?

Allgemein gesprochen beschreibt Auflösung den Prozess, wenn ein Identifizierer (einer Entität) einem Netzwerkdienst übergeben wird und die mit dem Identifizierer verknüpfte Information zurückübermittelt wird.

Z. B. bedeutet Auflösung in Zusammenhang mit dem Domainname-System (DNS), dass der Domainname (z. B. `www.doi.org`) zu einer bestimmten IP-Adresse (z. B. `132.151.1.146`), die zur Kommunikation mit dem Internet-Host benutzt wird, aufgelöst wird.

Die DOI-Auflösung erfolgt von einem DOI zu einer oder mehreren Einheiten von im Netz verfügbaren Daten: zu URLs, die verschiedene Instanzen eines Objekts repräsentieren, zu Diensten wie E-Mail oder zu Elementen der Metadaten.

„Was der DOI identifiziert" und „was der DOI auflöst" sind zwei verschiedene Konzepte: Es ist möglich, dass ein DOI nicht direkt auf die identifizierte Entität verweist, sondern gemäß dem Wunsch des Verlags auf Informationen, die mit dem Objekt in Verbindung stehen.

Die DOI-Auflösung wird durch die von CNRI entwickelte **Handle-System-Technologie** ermöglicht.

Um einen DOI aufzulösen, wird einfach in die Adress-Eingabezeile eines beliebigen Browsers der Textstring `http://dx.medra.org/`, gefolgt von dem DOI, eingegeben.

Um beispielsweise den DOI `10.1392/mdm_broeng` aufzulösen, geben Sie in Ihrem Browser ein:

```
http://dx.medra.org/10.1392/mdm_broeng
```

Alternativ hierzu können Sie unseren Service Proxy Server benutzen.

## Was sind Metadaten und wie stehen sie in Verbindung mit dem DOI?

Jeder DOI ist verknüpft mit einer Reihe von Metadaten, einem Satz von bibliografischen und kommerziellen Informationen, die den Content betreffen (Titel, Autor, Erscheinungsdatum, Copyright, Preis usw.) und seine Position innerhalb des Verlagsangebotes (die Zugehörigkeit eines Titels zu einer Reihe, eines Artikels zu einer Zeitschrift, die Verfügbarkeit einer Publikation in mehreren Ausgabeformaten und/oder über verschiedene Medien etc.).

Mittels der Metadaten stellt der DOI nicht nur einfach einen Identifizierungsstring dar, sondern wird zu einem starken und eindeutigen Tool für Datenhaltung und Datenaustausch.

Die Metadaten sowie der DOI selbst, dem sie zugeordnet sind, sind dauerhaft mit dem digitalen Objekt verknüpft, welches sie beschreiben. Daher können sie leicht Anwendung finden in den Produktions- und Verteilungsprozessen und für den Produzenten von Content die Möglichkeiten des elektronischen Handels verbessern.

Weiterhin bilden Metadaten das Schlüsselelement für die Entwicklung von DOI-basierten Dienstleistungen, wie transnationale Datenbanken und Suchmaschinen für unterschiedliche Arten von Content.

Die Feststellung, dass Metadaten dauerhaft sind, schließt ihre Modifizierbarkeit nicht aus: Verlage und Produzenten können jederzeit und beliebig oft die ihre Content beschreibenden Metadaten ändern (wenn sich Daten der Publikation geändert haben, wenn die primäre URL, in die der DOI aufgelöst wird, modifiziert wird etc.).

## Wer ist die Internationale DOI Foundation?

Die **Internationale DOI Foundation (IDF)**, als gemeinnützige Stiftung 1998 gegründet, ist die leitende Institution für das DOI-System und zuständig für die Anwendung und korrekte Einhaltung des DOI-Standards.

Die IDF unterstützt die Entwicklung und Förderung des Digital Object Identifier Systems als die gemeinsame Infrastruktur für das Content Management. Sie stellt sicher, dass Weiterentwicklungen des DOI-Systems jedem DOI-Nutzer im Rahmen des Standards uneingeschränkt zur Verfügung stehen.

Die IDF wird von einem Vorstand geführt, der von den Mitgliedern der Stiftung gewählt wird. Der vom Vorstand ernannte Direktor ist verantwortlich für die Koordination und Planung der Aktivitäten.

Über den gewählten Vorstand werden die Tätigkeitsfelder der Stiftung letztlich von den Mitgliedern kontrolliert.

Die Mitgliedschaft steht allen Organisationen offen, die im Bereich Electronic Publishing oder den damit verbundenen Technologien tätig sind.

## Was sind DOI-Agenturen?

Eine **DOI-Registrationsagentur (RA)** ist eine von der IDF anerkannte Organisation, deren Hauptaufgabe das Angebot von DOI-Dienstleistungen ist: Vergabe von DOI-Präfixen, Bereitstellung der erforderlichen technischen Infrastruktur zur Registrierung von DOIs sowie der Eingabe und Verwaltung von Metadaten.

DOI-Agenturen haben weiterhin die Aufgabe, für die Verbreitung des DOI zu sorgen, in Kooperation mit der IDF das DOI-System weiterzuentwickeln und für spezielle Nutzergruppen DOI-basierte Services anzubieten.

> Hier finden Sie eine [Liste aller DOI-Agenturen](http://www.doi.org).

## Welche Vorteile hat es, wenn man DOIs registriert?

Die Teilnahme am DOI-System bietet drei hauptsächliche Vorteile:

1. **Dauerhafte Identifikation** — jeder DOI identifiziert eindeutig und permanent das ihm zugeordnete Objekt.
2. **Verfügbarkeit der Information im Netz** — durch die Technologie des Handle-Systems verweist jeder DOI auf eine oder mehrere Web-Seiten, die durch den Verlag zugeordnet werden.
3. **Semantische Interoperabilität** — die dem DOI zugeordneten Metadaten ermöglichen ein eindeutiges Kommunizieren, mit jedem Benutzer, von jedem Ort, an jedem Punkt der Produktions-/Distributions-Kette, bezogen auf jede Information über die miteinander in Beziehung stehenden Objekte.

## Wie starte ich mit der Registrierung von DOIs?

Die Nutzung der Dienstleistungen zur DOI-Registrierung ist kostenpflichtig: Es entsteht eine **Einmalgebühr** für die Zuteilung eines DOI-Präfix und eine **jährliche Teilnahmegebühr**, deren Höhe durch die Anzahl der registrierten DOIs bestimmt wird.

Einige weiterführende Informationen zur Registrierung von DOIs und Metadaten können dem Bereich [Wie man DOIs registriert](https://www-medra-dev.medra.org/de/guide.htm) entnommen werden.
