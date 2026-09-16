---
title: Come registrare i DOI
description: Se desideri iniziare a registrare DOI con mEDRA, la procedura si
  articola in pochi passaggi. mEDRA mette a disposizione strumenti diversi per
  rispondere alle esigenze di organizzazioni con differenti livelli di autonomia
  e competenza tecnica.
weight: 21
draft: true
date: 2026-09-16T14:56:00.000+02:00
author: Jehu Procore Njikonga
---
# 📝 Guida alla registrazione DOI

In questa sezione sono disponibili le informazioni necessarie per **aderire al servizio di registrazione DOI di mEDRA** e effettuare correttamente le registrazioni dei DOI.

## 🧭 Guida al servizio DOI

- 🔐 [**Come si accede al servizio di registrazione DOI?**](https://www-medra-dev.medra.org/it/guide.htm#guide1)
- 🏷️ [**Come si crea il suffisso di un DOI?**](https://www-medra-dev.medra.org/it/guide.htm#guide2)
- 📋 [**Cos'è l'ONIX DOI Metadata Schema?**](https://www-medra-dev.medra.org/it/guide.htm#guide3)
- 📚 [**Cosa sono le specifiche di metadati?**](https://www-medra-dev.medra.org/it/guide.htm#guide4)
- 📤 [**In che modo si possono inviare i metadati a mEDRA?**](https://www-medra-dev.medra.org/it/guide.htm#guide5)
- 📊 [**Come si possono controllare le proprie registrazioni DOI?**](https://www-medra-dev.medra.org/it/guide.htm#guide6)

> 💡 **Hai bisogno di ulteriori informazioni?**  
> Per chiarimenti o ulteriori richieste, puoi [**contattare il nostro Ufficio Editoriale**](https://www-medra-dev.medra.org/it/contact.htm).

---

## 🔐 Come si accede al servizio di registrazione DOI?

Per iniziare a registrare DOI con mEDRA è necessario seguire alcuni semplici passaggi.

### 1. 📝 Richiedi un account

Compila e invia il modulo per [**richiedere un account**](https://www-medra-dev.medra.org/it/req_account.htm).

Nel campo **“Motivo della richiesta”** puoi indicare il tipo di documentazione o di contenuto al quale desideri assegnare i DOI.

Ad esempio:

> DOI ad articoli di rivista disponibili online sul mio sito www.xyz.org

### 2. 🤝 Adesione al servizio

Dopo aver ricevuto la richiesta, il nostro **Ufficio Commerciale** ti contatterà per verificare le tue esigenze e la volontà di aderire al servizio di registrazione DOI di mEDRA.

Successivamente ti verrà sottoposto il **contratto di adesione al servizio**.

I costi e le principali condizioni contrattuali sono disponibili nella pagina [**Termini e condizioni**](https://www-medra-dev.medra.org/it/terms.htm).

### 3. 🔑 Ricevi il prefisso DOI e le credenziali

Una volta sottoscritto il contratto, il nostro **Servizio di Amministrazione** ti fornirà:

- 🔢 il tuo **prefisso DOI**;
- 👤 il tuo **username**;
- 🔒 la tua **password**.

Le credenziali consentono di accedere all'**Area Utenti Registrati** del sito mEDRA.

### 4. 🏷️ Registra il tuo primo DOI

A questo punto sei pronto per registrare il tuo primo DOI.

Per ogni oggetto da identificare dovrai:

1. 🏷️ definire il relativo [**suffisso DOI**](https://www-medra-dev.medra.org/it/guide.htm#guide2);
2. 📋 compilare i metadati descrittivi;
3. 📚 assicurarti che i metadati siano conformi all'[**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/it/guide.htm#guide3);
4. 🧾 utilizzare la [**specifica di metadati**](https://www-medra-dev.medra.org/it/guide.htm#guide4) appropriata in base al tipo di oggetto;
5. 📤 inviare i metadati a mEDRA attraverso una delle [**modalità di registrazione disponibili**](https://www-medra-dev.medra.org/it/guide.htm#guide5).

Le diverse modalità di registrazione offrono differenti livelli di **autonomia e assistenza** nella compilazione e nell'invio dei metadati.

### 5. 📊 Monitora le registrazioni

Dopo l'invio dei metadati, il sistema mEDRA comunicherà l'esito della registrazione.

Attraverso l'[**Area Utenti Registrati**](https://www-medra-dev.medra.org/it/guide.htm#guide6) potrai inoltre monitorare le tue registrazioni DOI, visualizzare i metadati e consultare la cronologia e le statistiche delle attività.

---

## 🏷️ Come si crea il suffisso di un DOI?

Il **prefisso DOI** viene assegnato da mEDRA alla tua organizzazione.

Il **suffisso DOI** viene invece definito dal registrante e deve rispettare le seguenti indicazioni.

### ✅ Linee guida obbligatorie

#### 🔢 Unicità

Ogni suffisso deve essere **unico tra quelli assegnati allo stesso prefisso DOI**.

#### 🔤 Maiuscole e minuscole

Il suffisso DOI è **case insensitive**, ovvero non distingue tra maiuscole e minuscole.

Ad esempio:

`10.1392/dironix`

e

`10.1392/DIRONIX`

identificano lo stesso DOI.

#### 🌐 Codifica UTF-8

La codifica dei caratteri richiesta è **UTF-8**.

UTF-8 è un'implementazione dello standard Unicode e consente di utilizzare caratteri appartenenti ai principali sistemi di scrittura oggi in uso.

Il **Handle System**, la tecnologia alla base della risoluzione dei DOI, utilizza UTF-8; per questo motivo la conformità a UTF-8 è richiesta per i DOI.

#### 🔣 Caratteri speciali

I caratteri speciali possono essere inseriti:

- direttamente in UTF-8, ad esempio `β`;
- come entità XML, ad esempio `&#x03B2;`.

Entrambe le modalità sono correttamente gestite dal sistema di registrazione mEDRA.

#### 🔗 Caratteri con significato speciale nella sintassi URI

Quando si utilizzano caratteri che hanno un significato particolare nella **sintassi URI**, questi devono essere codificati in esadecimale quando il DOI viene inserito all'interno di una URL.

Ad esempio:

`https://dx.doi.org/10.1000/182`

Per ulteriori informazioni, consulta la [**specifica della sintassi URI**](http://www.ietf.org/rfc/rfc2396.txt).

---

### 💡 Linee guida raccomandate

#### 🧩 Adotta uno schema coerente

È consigliabile adottare una **politica strutturata di assegnazione dei suffissi**, eventualmente integrando identificatori già utilizzati internamente dalla tua organizzazione.

#### ✂️ Mantieni il suffisso conciso

Il suffisso dovrebbe essere **quanto più possibile breve e semplice**.

I DOI vengono pubblicati sia online sia su supporti cartacei e possono essere digitati o trascritti manualmente dagli utenti.

#### ⚠️ Evita caratteri problematici

Si consiglia di **non utilizzare** i seguenti caratteri nei suffissi DOI:

| Carattere | Carattere | Carattere | Carattere | Carattere | Carattere | Carattere |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `;` | `/` | `?` | `:` | `@` | `&` | `=` |
| `+` | `$` | `,` | `*` | `"` | `%` | `#` |
| `<` | `>` | `'` | `}` | `{` | `\|` | `\` |
| `^` | `[` | `]` | `` ` `` | **SPAZIO** | | |

---

## 📋 Cos'è l'ONIX DOI Metadata Schema?

mEDRA ha scelto di gestire i metadati DOI sulla base di due principi fondamentali.

### 📚 Sintassi ONIX

I metadati sono codificati secondo la sintassi **ONIX (Online Information Exchange)**.

ONIX è uno standard internazionale strutturato per la descrizione dei contenuti editoriali, sviluppato e aggiornato da [**EDItEUR**](http://www.editeur.org).

### 🧾 Formato XML

I metadati vengono trasmessi utilizzando il formato **XML**, ampiamente adottato nel settore dell'informazione e della comunicazione per lo scambio e la gestione strutturata dei metadati.

### 🔗 ONIX DOI Metadata Schema

Sulla base di questi requisiti, mEDRA ha sviluppato l'[**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/it/schema.htm).

Lo schema è stato adottato da EDItEUR come **schema ONIX ufficiale per la registrazione dei DOI** e costituisce il modello al quale devono conformarsi **tutte le richieste di registrazione e aggiornamento dei DOI**.

---

## 📚 Cosa sono le specifiche di metadati?

Per consentire l'assegnazione dei DOI ai diversi tipi di oggetti previsti dall'ONIX DOI Metadata Schema, mEDRA, in collaborazione con EDItEUR, ha individuato specifici **sottoinsiemi di metadati** e sviluppato le relative [**specifiche di metadati**](https://www-medra-dev.medra.org/it/metadata_td.htm).

Questi documenti guidano l'utente nella corretta compilazione dei file XML necessari per la registrazione DOI.

Le specifiche comprendono:

- 📖 **Monografie come astrazioni**
- 📦 **Monografie come manifestazioni**
- 📑 **Capitoli di monografie** — come astrazioni o manifestazioni
- 📰 **Testate di rivista** — come astrazioni o manifestazioni
- 📕 **Fascicoli di rivista** — come astrazioni o manifestazioni
- 📄 **Articoli di rivista** — come astrazioni o manifestazioni

### 🧠 Astrazione o manifestazione?

Registrare un DOI su un oggetto in quanto **astrazione** significa identificare il **contenuto in quanto tale**, indipendentemente dal formato specifico di pubblicazione.

In questo caso, per esempio, le versioni **a stampa, PDF e HTML** della stessa opera possono condividere lo stesso DOI.

Al contrario, registrare un DOI su un oggetto in quanto **manifestazione** significa associare il DOI a uno **specifico formato di pubblicazione**.

In questo caso, ogni diverso formato di pubblicazione dell'opera riceve un DOI distinto.

> **Astrazione** → identifica il contenuto indipendentemente dal formato  
> **Manifestazione** → identifica uno specifico formato di pubblicazione

---

## 📤 In che modo si possono inviare i metadati a mEDRA?

Per registrare i DOI con mEDRA sono disponibili diversi strumenti.

### 🖥️ Form web semplificata

La **Form web semplificata** consente di registrare DOI singoli per:

- 📄 articoli di rivista;
- 📖 monografie.

L'interfaccia è disponibile in **italiano, inglese e tedesco**.

### 📄 Upload di file XML

L'**interfaccia di upload XML** consente di registrare:

- un singolo DOI;
- un gruppo di DOI tramite **batch registration**.

mEDRA mette inoltre a disposizione un [**programma Java**](https://www-medra-dev.medra.org/it/utilities.htm) per effettuare automaticamente l'upload dei file XML tramite **HTTPS POST**.

### 🔌 Web service B2B

Il **Web Service B2B** permette di automatizzare l'invio dei file XML e di integrare la registrazione DOI nei sistemi informativi dell'organizzazione.

La relativa [**documentazione tecnica**](https://www-medra-dev.medra.org/it/ws.htm) è disponibile per gli utenti del servizio.

### 📰 Plug-in OJS

Il [**plug-in mEDRA per OJS**](https://github.com/pkp/medra) (**Open Journal Systems**) consente l'esportazione automatica dei metadati e la registrazione dei DOI direttamente da OJS.

---

## 📧 Esito della registrazione

Qualunque sia il metodo utilizzato, dopo l'invio dei metadati il sistema mEDRA invierà un'**e-mail di conferma contenente l'esito della registrazione DOI**.

---

## 🧾 Formati di metadati supportati

mEDRA consente di effettuare registrazioni DOI utilizzando i seguenti **formati di metadati basati su XML**:

### 📋 ONIX for DOI

L'[**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/it/schema.htm), secondo le relative [**specifiche di metadati**](https://www-medra-dev.medra.org/it/metadata_td.htm).

### 📰 JATS

**JATS (Journal Publishing Tag Suite)** è supportato **esclusivamente attraverso il Web Service B2B** e **solo per gli articoli di rivista**.

Le specifiche e le raccomandazioni tecniche relative a JATS sono disponibili su richiesta.

---

## 🌐 Accesso ai metadati e Content Negotiation

I metadati associati ai DOI registrati sono disponibili in diversi formati, tra cui:

- `RDF`
- `JSON`
- `ONIX`
- citazioni testuali formattate
- altri formati supportati.

Le diverse rappresentazioni dei metadati sono disponibili attraverso il servizio di [**Content Negotiation**](http://data-medra-dev.medra.org).

---

## 📊 Come si possono controllare le proprie registrazioni DOI?

Attraverso l'**Area Utenti Registrati** del sito mEDRA è possibile gestire il proprio account e monitorare le attività di registrazione.

### 🔐 Gestione dell'account

Nell'Area Utenti Registrati è possibile, tra le altre cose:

- 🔑 modificare la propria **password**;
- ➕ richiedere **prefissi DOI aggiuntivi**;
- 👤 gestire le informazioni relative al proprio account.

### 📈 Monitoraggio delle attività

In qualsiasi momento è inoltre possibile monitorare la propria attività di registrante, verificando:

- 🧾 i **metadati** associati ai DOI registrati;
- 📤 la **cronologia delle registrazioni**;
- 📊 le relative **statistiche**.

In questo modo è possibile mantenere sotto controllo le proprie registrazioni DOI e verificare le informazioni trasmesse al sistema mEDRA.
