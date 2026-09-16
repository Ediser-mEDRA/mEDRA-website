---
title: What is the DOI
description: The Digital Object Identifier is a standard for persistently
  identifying a piece of intellectual property on a digital network and
  associating it with related current data, the metadata, in a structured
  extensible way.
weight: 20
draft: true
date: 2026-09-16T12:25:00.000+02:00
author: Jehu Njikonga
---
![mEDRA Logo](/images/medra-logo.png "mEDRA – DOI Registration Agency")

# What is the DOI

- [What is a DOI?](#what-is-a-doi)
- [What can be identified by a DOI?](#what-can-be-identified-by-a-doi)
- [What does the DOI structure look like?](#what-does-the-doi-structure-look-like)
- [What does DOI resolution mean?](#what-does-doi-resolution-mean)
- [What is metadata and how is it connected to the DOI?](#what-is-metadata-and-how-is-it-connected-to-the-doi)
- [Who is the International DOI Foundation?](#who-is-the-international-doi-foundation)
- [What are DOI agencies?](#what-are-doi-agencies)
- [What are the benefits of registering DOIs?](#what-are-the-benefits-of-registering-dois)
- [How do I start registering DOIs?](#how-do-i-start-registering-dois)

> For further detailed information on most of the topics addressed above, see the [DOI Handbook](http://www.doi.org) of the International DOI Foundation.

---

## What is a DOI?

The **Digital Object Identifier (DOI)** is a persistent document identifier used to cite and link electronic documents (texts, but also image or audio documents) within a digital network. Current, structured metadata is associated with the document via the DOI.

DOIs are referred to as the **"bar code of intellectual property"**: like a physical bar code, the DOI is a distinctive tool for identification across the entire supply chain and thus represents a means of rationalization.

A DOI differs from other reference systems commonly used on the internet, such as the URL, because it is permanently linked to the object as an entity, rather than merely to the location where the object is placed. The DOI identifies an entity directly and immediately, not a property of the object (an address is merely a property of the document, which can change and may then no longer be usable to identify the object).

A DOI also differs from other intellectual property identifiers such as standardized bibliographic identifiers (ISBN, ISRC etc.), because it can be embedded in specific services and used directly and permanently within a network.

## What can be identified by a DOI?

A DOI can be applied to any form of intellectual property made available through any digital system.

The term "intellectual property" encompasses physical and digital manifestations, performances, as well as works and abstractions: DOIs can be used to identify texts, image data, audio or video data, software and so on.

An entity can be made identifiable at any level of granularity. This means that, for example, DOIs can identify an entire journal, a specific issue of a journal, a specific article within a journal, or a single table within that article.

## What does the DOI structure look like?

A DOI consists of a unique alphanumeric string, divided into two parts, a **prefix** and a **suffix**.

For example:

```
10.1392/roma081203
```

is a complete DOI. It is made up of:

- `10.1392` — the **prefix**, consisting of the DOI identifier (`10`) and the publisher number (`1392` in the example)
- `roma081203` — the **suffix**, which identifies the individual digital object

The prefix is assigned by the DOI agency. The suffix is assigned by the registered publisher (producer). It must be unique within a prefix. It can contain other standard identifiers such as ISBN or ISSN: this means the DOI can incorporate other standard identifiers already in use.

The prefix and suffix are separated by a forward slash `/`.

A DOI is **case insensitive**, meaning the text string does not distinguish between upper and lower case (e.g. `10.1392/roma081203` is the same as `10.1392/ROMA081203`). A DOI is simply a plain string; beyond its use within the DOI system, nothing can be inferred from it.

## What does DOI resolution mean?

Generally speaking, resolution describes the process by which an identifier (of an entity) is submitted to a network service, and the information associated with that identifier is returned.

For example, in the context of the Domain Name System (DNS), resolution means that a domain name (e.g. `www.doi.org`) is resolved to a specific IP address (e.g. `132.151.1.146`) used to communicate with the internet host.

DOI resolution proceeds from a DOI to one or more units of data available on the network: to URLs representing different instances of an object, to services such as email, or to elements of metadata.

"What the DOI identifies" and "what the DOI resolves to" are two different concepts: it is possible for a DOI not to point directly to the identified entity, but rather, at the publisher's discretion, to information related to the object.

DOI resolution is made possible by the **Handle System technology** developed by CNRI.

To resolve a DOI, simply enter the string `http://dx.medra.org/`, followed by the DOI, into the address bar of any browser.

For example, to resolve the DOI `10.1392/mdm_broeng`, enter the following in your browser:

```
http://dx.medra.org/10.1392/mdm_broeng
```

Alternatively, you can use our service proxy server.

## What is metadata and how is it connected to the DOI?

Every DOI is associated with a set of metadata — a set of bibliographic and commercial information relating to the content (title, author, publication date, copyright, price etc.) and its position within the publisher's catalogue (a title's membership in a series, an article's membership in a journal, the availability of a publication in multiple formats and/or across different media, etc.).

Through metadata, the DOI is not simply an identification string, but becomes a powerful and unambiguous tool for data management and data exchange.

The metadata, as well as the DOI itself to which it is assigned, is permanently linked to the digital object it describes. It can therefore be readily applied within production and distribution processes and can enhance e-commerce opportunities for content producers.

Furthermore, metadata forms the key building block for developing DOI-based services, such as cross-publisher databases and search engines for different types of content.

The fact that metadata is persistent does not preclude it from being modifiable: publishers and producers can change the metadata describing their content at any time and as often as needed (when publication details change, when the primary URL to which the DOI resolves is modified, etc.).

## Who is the International DOI Foundation?

The **International DOI Foundation (IDF)**, established as a non-profit foundation in 1998, is the governing body for the DOI system and is responsible for the application and correct adherence to the DOI standard.

The IDF supports the development and promotion of the Digital Object Identifier System as the shared infrastructure for content management. It ensures that developments to the DOI system remain freely available to every DOI user within the framework of the standard.

The IDF is led by a board elected by the foundation's members. The director appointed by the board is responsible for coordinating and planning activities.

Through the elected board, the foundation's areas of activity are ultimately overseen by its members.

Membership is open to all organizations active in the field of electronic publishing or related technologies.

## What are DOI agencies?

A **DOI Registration Agency (RA)** is an organization recognized by the IDF whose main task is to offer DOI services: assigning DOI prefixes, providing the technical infrastructure required for DOI registration, and entering and managing metadata.

DOI agencies are also responsible for promoting awareness of the DOI, working with the IDF to further develop the DOI system, and offering DOI-based services to specific user communities.

> See here for a [list of all DOI agencies](http://www.doi.org).

## What are the benefits of registering DOIs?

Participating in the DOI system offers three main benefits:

1. **Persistent identification** — every DOI uniquely and permanently identifies the object assigned to it.
2. **Availability of information on the network** — through Handle System technology, every DOI points to one or more web pages designated by the publisher.
3. **Semantic interoperability** — the metadata associated with the DOI enables unambiguous communication, with any user, from any location, at any point in the production/distribution chain, regarding any information about the related objects.

## How do I start registering DOIs?

Using DOI registration services involves a cost: a **one-time fee** for the allocation of a DOI prefix, and an **annual participation fee**, the amount of which is determined by the number of registered DOIs.

Further information on registering DOIs and metadata can be found in the section [How to register DOIs](https://www-medra-dev.medra.org/en/guide.htm).
