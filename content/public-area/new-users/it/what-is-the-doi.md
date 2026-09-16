---
title: Cos'è il DOI
description: Il Digital Object Identifier è uno standard che consente di
  identificare persistentemente, all'interno di una rete digitale, qualsiasi
  oggetto di proprietà intellettuale e di associarvi i relativi dati di
  riferimento, i metadati, secondo uno schema strutturato ed estensibile.
weight: 20
draft: true
date: 2026-09-16T12:31:00.000+02:00
author: Jehu Njikonga
---
![Logo mEDRA](/images/medra-logo.png "mEDRA – DOI Registration Agency")

# Cos'è il DOI

- [Cos'è un DOI?](#cosè-un-doi)
- [Cosa può essere identificato tramite un DOI?](#cosa-può-essere-identificato-tramite-un-doi)
- [Qual è la struttura del DOI?](#qual-è-la-struttura-del-doi)
- [Cosa significa risoluzione del DOI?](#cosa-significa-risoluzione-del-doi)
- [Cosa sono i metadati e come si collegano al DOI?](#cosa-sono-i-metadati-e-come-si-collegano-al-doi)
- [Chi è la International DOI Foundation?](#chi-è-la-international-doi-foundation)
- [Cosa sono le agenzie DOI?](#cosa-sono-le-agenzie-doi)
- [Quali vantaggi comporta la registrazione dei DOI?](#quali-vantaggi-comporta-la-registrazione-dei-doi)
- [Come si inizia a registrare i DOI?](#come-si-inizia-a-registrare-i-doi)

> Per informazioni più dettagliate sulla maggior parte degli argomenti trattati sopra, consulta il [DOI Handbook](http://www.doi.org) della International DOI Foundation.

---

## Cos'è un DOI?

Il **Digital Object Identifier (DOI)** è un identificatore permanente di documenti, utilizzato per citare e collegare documenti elettronici (testi, ma anche immagini o file audio) all'interno di una rete digitale. Attraverso il DOI, al documento sono associati metadati aggiornati e strutturati.

I DOI vengono definiti il **"codice a barre della proprietà intellettuale"**: come il codice a barre fisico, il DOI è uno strumento inconfondibile di identificazione lungo l'intera supply chain e rappresenta quindi un mezzo di razionalizzazione.

Un DOI si differenzia da altri sistemi di riferimento comunemente usati su Internet, come l'URL, perché è collegato in modo permanente all'oggetto in quanto entità, e non semplicemente al luogo in cui l'oggetto è collocato. Il DOI identifica direttamente e immediatamente un'entità, non una proprietà dell'oggetto (un indirizzo è solo una proprietà del documento, che può essere modificata e quindi non più utilizzabile per identificare l'oggetto).

Un DOI si differenzia anche da altri identificatori di proprietà intellettuale, come gli identificatori bibliografici standardizzati (ISBN, ISRC ecc.), perché può essere integrato in servizi specifici e utilizzato in modo diretto e permanente all'interno di una rete.

## Cosa può essere identificato tramite un DOI?

Un DOI può essere applicato a qualsiasi forma di proprietà intellettuale resa disponibile tramite un qualsiasi sistema digitale.

Il termine "proprietà intellettuale" comprende sia manifestazioni fisiche e digitali, sia rappresentazioni, opere e astrazioni: i DOI possono essere utilizzati per identificare testi, immagini, dati audio o video, software e così via.

Un'entità può essere resa identificabile a qualsiasi livello di granularità. Questo significa che, ad esempio, i DOI possono identificare un'intera rivista, un numero specifico di una rivista, un singolo articolo all'interno di una rivista, oppure una singola tabella contenuta in quell'articolo.

## Qual è la struttura del DOI?

Il DOI è costituito da una stringa alfanumerica univoca, suddivisa in due parti: un **prefisso** e un **suffisso**.

Ad esempio:

```
10.1392/roma081203
```

è un DOI completo, composto da:

- `10.1392` — il **prefisso**, formato dal codice identificativo del sistema DOI (`10`) e dal numero dell'editore (`1392` nell'esempio)
- `roma081203` — il **suffisso**, che identifica il singolo oggetto digitale

Il prefisso viene assegnato dall'agenzia DOI. Il suffisso viene assegnato dall'editore registrato (produttore). Deve essere univoco all'interno di un prefisso. Può contenere altri identificatori standard come ISBN o ISSN: questo significa che il DOI può integrare identificatori standard già in uso.

Prefisso e suffisso sono separati da una barra `/`.

Un DOI è **case insensitive**, cioè nella stringa di testo non viene fatta distinzione tra maiuscole e minuscole (ad es. `10.1392/roma081203` equivale a `10.1392/ROMA081203`). Un DOI è semplicemente una stringa: al di fuori del suo utilizzo all'interno del sistema DOI, da esso non può essere dedotto nulla.

## Cosa significa risoluzione del DOI?

In termini generali, la risoluzione descrive il processo in cui un identificatore (di un'entità) viene sottoposto a un servizio di rete, e viene restituita l'informazione associata a tale identificatore.

Ad esempio, nel contesto del Domain Name System (DNS), la risoluzione significa che un nome di dominio (es. `www.doi.org`) viene risolto in uno specifico indirizzo IP (es. `132.151.1.146`), utilizzato per comunicare con l'host su Internet.

La risoluzione del DOI avviene da un DOI verso una o più unità di dati disponibili in rete: URL che rappresentano diverse istanze di un oggetto, servizi come l'e-mail, oppure elementi dei metadati.

"Cosa identifica il DOI" e "verso cosa risolve il DOI" sono due concetti distinti: è possibile che un DOI non punti direttamente all'entità identificata, ma, a discrezione dell'editore, a informazioni collegate all'oggetto.

La risoluzione del DOI è resa possibile dalla tecnologia **Handle System**, sviluppata da CNRI.

Per risolvere un DOI, è sufficiente digitare nella barra degli indirizzi di un qualsiasi browser la stringa `http://dx.medra.org/`, seguita dal DOI.

Ad esempio, per risolvere il DOI `10.1392/mdm_broeng`, digita nel browser:

```
http://dx.medra.org/10.1392/mdm_broeng
```

In alternativa, puoi utilizzare il nostro service proxy server.

## Cosa sono i metadati e come si collegano al DOI?

Ogni DOI è associato a un insieme di metadati, ovvero un insieme di informazioni bibliografiche e commerciali relative al contenuto (titolo, autore, data di pubblicazione, copyright, prezzo ecc.) e alla sua posizione all'interno del catalogo dell'editore (l'appartenenza di un titolo a una collana, di un articolo a una rivista, la disponibilità di una pubblicazione in più formati e/o su diversi media ecc.).

Grazie ai metadati, il DOI non rappresenta semplicemente una stringa identificativa, ma diventa uno strumento potente e univoco per la gestione e lo scambio dei dati.

I metadati, così come il DOI stesso a cui sono associati, sono collegati in modo permanente all'oggetto digitale che descrivono. Possono quindi essere facilmente applicati nei processi di produzione e distribuzione, e migliorare le opportunità di commercio elettronico per i produttori di contenuti.

Inoltre, i metadati costituiscono l'elemento chiave per lo sviluppo di servizi basati sul DOI, come database transnazionali e motori di ricerca per diversi tipi di contenuti.

Il fatto che i metadati siano permanenti non ne esclude la modificabilità: editori e produttori possono modificare in qualsiasi momento e quante volte necessario i metadati che descrivono i loro contenuti (ad esempio quando cambiano i dati della pubblicazione, o quando viene modificato l'URL primario verso cui il DOI si risolve, ecc.).

## Chi è la International DOI Foundation?

La **International DOI Foundation (IDF)**, fondazione senza scopo di lucro istituita nel 1998, è l'organismo di riferimento per il sistema DOI ed è responsabile dell'applicazione e della corretta osservanza dello standard DOI.

L'IDF sostiene lo sviluppo e la promozione del Digital Object Identifier System come infrastruttura condivisa per la gestione dei contenuti. Garantisce che gli sviluppi del sistema DOI restino liberamente disponibili a ogni utente DOI nell'ambito dello standard.

L'IDF è guidata da un consiglio direttivo eletto dai membri della fondazione. Il direttore nominato dal consiglio è responsabile del coordinamento e della pianificazione delle attività.

Attraverso il consiglio eletto, gli ambiti di attività della fondazione sono in ultima analisi controllati dai suoi membri.

L'adesione è aperta a tutte le organizzazioni attive nell'ambito dell'editoria elettronica o delle tecnologie a essa correlate.

## Cosa sono le agenzie DOI?

Una **DOI Registration Agency (RA)** è un'organizzazione riconosciuta dall'IDF, il cui compito principale è offrire servizi DOI: assegnazione dei prefissi DOI, fornitura dell'infrastruttura tecnica necessaria per la registrazione dei DOI, nonché l'inserimento e la gestione dei metadati.

Le agenzie DOI hanno inoltre il compito di diffondere l'utilizzo del DOI, di sviluppare ulteriormente il sistema DOI in collaborazione con l'IDF e di offrire servizi basati sul DOI a specifici gruppi di utenti.

> Qui trovi l'[elenco di tutte le agenzie DOI](http://www.doi.org).

## Quali vantaggi comporta la registrazione dei DOI?

La partecipazione al sistema DOI offre tre principali vantaggi:

1. **Identificazione permanente** — ogni DOI identifica in modo univoco e permanente l'oggetto a cui è assegnato.
2. **Disponibilità dell'informazione in rete** — grazie alla tecnologia dell'Handle System, ogni DOI rimanda a una o più pagine web indicate dall'editore.
3. **Interoperabilità semantica** — i metadati associati al DOI consentono una comunicazione univoca, con qualsiasi utente, da qualsiasi luogo, in qualsiasi punto della catena di produzione/distribuzione, relativamente a qualunque informazione sugli oggetti correlati tra loro.

## Come si inizia a registrare i DOI?

L'utilizzo dei servizi di registrazione DOI è a pagamento: è prevista una **quota una tantum** per l'assegnazione di un prefisso DOI e una **quota annuale di partecipazione**, il cui importo è determinato dal numero di DOI registrati.

Ulteriori informazioni sulla registrazione dei DOI e dei metadati sono disponibili nella sezione [Come si registrano i DOI](https://www-medra-dev.medra.org/it/guide.htm).
