---
title: Wie man DOIs registriert
description: Wenn Sie mit der Registrierung von DOIs über mEDRA beginnen
  möchten, umfasst der Prozess einige klar definierte Schritte. mEDRA stellt
  verschiedene Werkzeuge zur Verfügung, die sich an Organisationen mit
  unterschiedlichen technischen Kenntnissen und Anforderungen an die
  Automatisierung richten.
weight: 21
draft: true
date: 2026-09-16T14:52:00.000+02:00
author: Jehu Procore Njikonga
---
# 📝 Leitfaden zur DOI-Registrierung

Die folgenden Abschnitte enthalten die wichtigsten Informationen, die Sie benötigen, um auf den **mEDRA DOI-Registrierungsservice** zuzugreifen und DOI-Namen korrekt zu registrieren.

## 🧭 Registrierungsleitfaden

- 🔐 [**Möchten auch Sie das mEDRA-System nutzen?**](https://www-medra-dev.medra.org/de/guide.htm#guide1)
- 🏷️ [**Was muss ich bei der Bildung von DOI-Suffixen beachten?**](https://www-medra-dev.medra.org/de/guide.htm#guide2)
- 📋 [**Was ist das ONIX DOI Metadaten-Schema?**](https://www-medra-dev.medra.org/de/guide.htm#guide3)
- 📚 [**Was sind die Metadaten-Spezifikationen?**](https://www-medra-dev.medra.org/de/guide.htm#guide4)
- 📤 [**Wie kann ich Metadaten an mEDRA übermitteln?**](https://www-medra-dev.medra.org/de/guide.htm#guide5)
- 📊 [**Wie kann ich den Status meiner DOI-Registrierungen überprüfen?**](https://www-medra-dev.medra.org/de/guide.htm#guide6)

> 💡 **Weitere Informationen**  
> Sollten Sie weitere Informationen oder Erläuterungen benötigen, füllen Sie bitte das [**Kontaktformular**](https://www-medra-dev.medra.org/de/contact.htm) aus. Wir setzen uns anschließend mit Ihnen in Verbindung.

---

## 🔐 Möchten auch Sie das mEDRA-System nutzen?

Um DOI-Namen über mEDRA zu registrieren, gehen Sie bitte wie folgt vor:

### 1. 📝 Benutzerkonto beantragen

Füllen Sie das Online-Formular zur [**Beantragung einer Nutzerkennung**](https://www-medra-dev.medra.org/de/req_account.htm) aus und senden Sie es ab.

Im Feld **„Nachricht“** können Sie angeben, für welche Arten von Dokumenten Sie DOI-Namen registrieren möchten.

Zum Beispiel:

> DOIs für Zeitschriftenartikel, die online über meine Website www.xyz.org angeboten werden.

### 2. 🤝 Teilnahme am DOI-Registrierungssystem

Nach Eingang Ihres Antrags werden wir uns mit Ihnen in Verbindung setzen, um Ihre Anforderungen zu klären und Ihnen die Unterlagen für die Teilnahme am DOI-Registrierungssystem zur Verfügung zu stellen.

Preise und wesentliche Vertragsbedingungen finden Sie in den [**Geschäftsbedingungen**](https://www-medra-dev.medra.org/de/terms.htm).

### 3. 🔑 DOI-Präfix und Zugangsdaten erhalten

Nach Bestätigung und Rücksendung der Vereinbarung erhalten Sie:

- 🔢 Ihr **DOI-Präfix**
- 👤 Ihre **Zugangskennung**
- 🔒 Ihr **Passwort**

Mit diesen Zugangsdaten können Sie auf den **Bereich für registrierte Kunden** der mEDRA-Website zugreifen.

### 4. 🏷️ Ihre ersten DOI-Namen registrieren

Anschließend können Sie mit der Registrierung Ihrer DOI-Namen beginnen.

Dazu:

1. 🏷️ vergeben Sie ein geeignetes [**DOI-Suffix**](https://www-medra-dev.medra.org/de/guide.htm#guide2);
2. 📋 stellen Sie die Metadaten zusammen, die das zu identifizierende Objekt beschreiben;
3. 📚 beachten Sie dabei das [**ONIX DOI Metadaten-Schema**](https://www-medra-dev.medra.org/de/guide.htm#guide3);
4. 🧾 verwenden Sie je nach Art des zu identifizierenden Objekts die entsprechende [**Metadaten-Spezifikation**](https://www-medra-dev.medra.org/de/guide.htm#guide4);
5. 📤 übermitteln Sie die Metadaten über eines der verfügbaren [**Registrierungsverfahren**](https://www-medra-dev.medra.org/de/guide.htm#guide5).

### 5. 📧 Registrierungsergebnis überprüfen

Nach jeder Übermittlung erhalten Sie eine **E-Mail vom mEDRA-System**, die das Ergebnis der Registrierung enthält.

Über die [**Kontroll-Übersicht**](https://www-medra-dev.medra.org/de/guide.htm#guide6) können Sie außerdem:

- 📊 den Status Ihrer DOI-Registrierungen überprüfen;
- 📈 Ihre DOI-Statistiken einsehen;
- 🧾 die zu Ihren DOIs registrierten Metadaten anzeigen.

---

## 🏷️ Was muss ich bei der Bildung von DOI-Suffixen beachten?

Das **DOI-Präfix** wird Ihrer Organisation von mEDRA für die DOI-Registrierung zugeteilt.

Das **DOI-Suffix** wird von Ihnen vergeben und muss die folgenden Regeln und Empfehlungen berücksichtigen.

### ✅ Obligatorische Richtlinien

#### 🔢 Eindeutigkeit

Jedes DOI-Suffix muss **innerhalb des jeweiligen DOI-Präfixes eindeutig** sein.

#### 🔤 Groß- und Kleinschreibung

Bei DOI-Suffixen wird **nicht zwischen Groß- und Kleinschreibung unterschieden**.

Beispielsweise sind:

`10.1392/dironix`

und

`10.1392/DIRONIX`

derselbe DOI.

#### 🌐 UTF-8-Zeichenkodierung

Für DOI-Suffixe ist die **UTF-8-Zeichenkodierung** erforderlich.

UTF-8 basiert auf dem international standardisierten Unicode-Zeichensatz und ermöglicht die Verwendung von Zeichen aus praktisch allen heute gebräuchlichen Schriftsystemen.

Das zugrunde liegende **Handle System**, das die Auflösungstechnologie des DOI Systems bereitstellt, verwendet UTF-8.

#### 🔣 Sonderzeichen

Sonderzeichen können entweder:

- direkt in UTF-8, z. B. `β`, oder
- als XML-Entity, z. B. `&#x03B2;`

übermittelt werden.

Beide Formen werden vom mEDRA-Registrierungssystem korrekt verarbeitet.

#### 🔗 Zeichen mit besonderer Bedeutung in URLs

Werden DOI-Namen in URLs eingebettet und enthalten sie Zeichen mit einer besonderen Bedeutung in der **URI-Syntax**, müssen diese Zeichen hexadezimal codiert werden.

Beispielsweise beim Verlinken des DOI-Auflösungssystems:

`https://dx.doi.org/10.1000/182`

Weitere Informationen finden Sie in der [**URI-Syntax-Spezifikation**](http://www.ietf.org/rfc/rfc2396.txt).

---

### 💡 Empfehlungen

#### 🧩 Einheitliches DOI-Vergabeschema

Ihre Organisation sollte ein **konsistentes DOI-Vergabeschema** festlegen.

Dabei können beispielsweise bereits vorhandene interne Kennungen Ihrer Organisation berücksichtigt werden.

#### ✂️ Prägnante DOI-Suffixe

Das DOI-Suffix sollte **so kurz und präzise wie möglich** sein.

DOIs werden sowohl online als auch in gedruckten Publikationen dargestellt und müssen gegebenenfalls von Nutzern manuell eingegeben oder erneut erfasst werden.

#### ⚠️ Nicht empfohlene Zeichen

Es wird empfohlen, die folgenden Zeichen in DOI-Suffixen **nicht zu verwenden**:

| Zeichen | Zeichen | Zeichen | Zeichen | Zeichen | Zeichen | Zeichen |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `;` | `/` | `?` | `:` | `@` | `&` | `=` |
| `+` | `$` | `,` | `*` | `"` | `%` | `#` |
| `<` | `>` | `'` | `}` | `{` | `\|` | `\` |
| `^` | `[` | `]` | `` ` `` | **LEERZEICHEN** | | |

---

## 📋 Was ist das ONIX DOI Metadaten-Schema?

mEDRA verwaltet DOI-Metadaten nach zwei grundlegenden Prinzipien:

### 📚 ONIX-Syntax

Die Metadaten werden gemäß der **ONIX-Syntax** codiert.

**ONIX (Online Information Exchange)** ist ein strukturierter Metadatenstandard zur Beschreibung von Inhalten im Verlagswesen. Der ONIX-Standard wird von [**EDItEUR**](http://www.editeur.org) betreut und kontinuierlich weiterentwickelt.

### 🧾 XML-Dateiformat

Die Metadaten werden im **XML-Format** übermittelt.

XML hat sich als weit verbreitetes Format für den strukturierten Austausch und die Verarbeitung von Metadaten etabliert.

### 🔗 Das ONIX DOI Metadaten-Schema

Auf Grundlage dieser beiden Anforderungen hat mEDRA das [**ONIX DOI Metadaten-Schema**](https://www-medra-dev.medra.org/de/schema.htm) entwickelt.

Das Schema wurde von EDItEUR als offizielles **ONIX-Schema für die DOI-Registrierung** anerkannt und bildet die Grundlage für **alle Anfragen zur Registrierung und Aktualisierung von DOI-Namen**.

---

## 📚 Was sind die Metadaten-Spezifikationen?

Um DOI-Namen für die verschiedenen vom ONIX DOI Metadaten-Schema unterstützten Objekttypen vergeben zu können, hat mEDRA gemeinsam mit EDItEUR entsprechende **Subsets des Schemas** definiert und dazugehörige [**Metadaten-Spezifikationen**](https://www-medra-dev.medra.org/de/metadata_td.htm) entwickelt.

Diese Dokumente unterstützen Benutzer bei der korrekten Erstellung der XML-Dateien für die DOI-Registrierung.

Die Spezifikationen umfassen:

- 📖 **Monografische Werke**
- 📦 **Monografische Produkte**
- 📑 **Monografische Kapitel** – als Werke oder Produkte
- 📰 **Fortsetzungstitel** – als Werke oder Produkte
- 📕 **Fortsetzungsausgaben** – als Werke oder Produkte
- 📄 **Fortsetzungsartikel** – als Werke oder Produkte

### 🧠 Werk oder Produkt?

Wird ein DOI für ein digitales Objekt als **Werk (Abstraktion)** registriert, bezieht sich der DOI auf den **Inhalt selbst**, unabhängig von dessen unterschiedlichen Publikationsformen.

In diesem Fall können beispielsweise die **Print-, PDF- und HTML-Versionen desselben Artikels** denselben DOI verwenden.

Wird ein DOI dagegen für ein Objekt als **Produkt (Manifestation)** vergeben, erhält **jede unterschiedliche Publikationsform** des Inhalts einen eigenen DOI.

> **Werk / Abstraktion** → identifiziert den Inhalt unabhängig vom Publikationsformat  
> **Produkt / Manifestation** → identifiziert eine bestimmte Publikationsform des Inhalts

---

## 📤 Wie kann ich Metadaten an mEDRA übermitteln?

Für die DOI-Registrierung stehen verschiedene Möglichkeiten zur Übermittlung von Metadaten zur Verfügung.

### 🖥️ Einfacher Online-Editor

Der **Einfache Online-Editor** ermöglicht die Registrierung einzelner DOI-Namen für **Zeitschriftenartikel und Monografien**.

Die Benutzeroberfläche steht auf Deutsch, Englisch und Italienisch zur Verfügung.

### 📄 XML-Upload

Über den **XML-Upload** können einzelne DOI-Namen oder **mehrere DOI-Namen als Batch** registriert werden.

Die Metadaten werden dabei als XML-Datei über den mEDRA Upload-Service übermittelt.

mEDRA stellt außerdem ein [**Java-Programm**](https://www-medra-dev.medra.org/de/utilities.htm) zur Verfügung, mit dem XML-Dateien automatisch über **HTTPS POST** übertragen werden können.

### 🔌 B2B-Webservice

Der **B2B-Webservice** ermöglicht die automatisierte Übermittlung von XML-Dateien.

Weitere Informationen finden Sie in der entsprechenden [**Dokumentation**](https://www-medra-dev.medra.org/de/ws.htm).

### 📰 OJS-Plugin

Das [**mEDRA OJS-Plugin**](https://github.com/pkp/medra) für **Open Journal Systems (OJS)** ermöglicht den automatischen Export von Metadaten und die DOI-Registrierung mit mEDRA.

---

## 📧 Ergebnis der Registrierung

Unabhängig vom gewählten Verfahren erhalten Sie nach der Übermittlung der Metadaten eine **E-Mail vom mEDRA-System mit dem Ergebnis der Registrierung**.

---

## 🧾 Unterstützte XML-basierte Metadatenformate

mEDRA akzeptiert DOI-Registrierungen in den folgenden **XML-basierten Metadatenformaten**:

### 📋 ONIX for DOI

Das [**ONIX DOI Metadaten-Schema**](https://www-medra-dev.medra.org/de/schema.htm) gemäß den entsprechenden [**Metadaten-Spezifikationen**](https://www-medra-dev.medra.org/de/metadata_td.htm).

### 📰 JATS

**JATS (Journal Publishing Tag Suite)** wird ausschließlich über den **B2B-Webservice** und nur für **Zeitschriftenartikel** unterstützt.

Spezifikationen und Empfehlungen für JATS erhalten Sie auf Anfrage bei mEDRA.

---

## 🌐 Metadaten und Content Negotiation

Die registrierten Metadaten stehen über **[Content Negotiation](http://data.medra.org)** in verschiedenen Formaten zur Verfügung, darunter:

- `RDF`
- `JSON`
- `ONIX`
- formatierte Textzitate
- weitere unterstützte Darstellungsformate

---

## 📊 Wie kann ich den Status meiner DOI-Registrierungen überprüfen?

Nach der Registrierung Ihrer DOI-Namen können Sie über die **Kontroll-Übersicht** den Status Ihrer Registrierungen überprüfen und auf die zugehörigen Informationen zugreifen.

### 🔐 Kontoverwaltung

Im Bereich für registrierte Kunden können Sie unter anderem:

- 🔑 Ihr **Passwort ändern**;
- ➕ zusätzliche **DOI-Präfixe beantragen**;
- 👤 Ihre Kontoinformationen verwalten.

### 📈 DOI-Aktivitäten überwachen

Sie können Ihre DOI-Aktivitäten jederzeit überprüfen, einschließlich:

- 🧾 der **zu den registrierten DOIs gehörenden Metadaten**;
- 📤 Ihrer **Übermittlungshistorie**;
- 📊 der zugehörigen **Statistiken**.

So behalten Sie den Überblick über Ihre DOI-Registrierungen und können die an das mEDRA-System übermittelten Metadaten jederzeit überprüfen.
