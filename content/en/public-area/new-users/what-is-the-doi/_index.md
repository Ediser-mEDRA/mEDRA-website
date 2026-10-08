---
draft: false
updater: Anonymous
author: Anonymous
type: page
title: What is the DOI
icon: bi bi-question-circle
menu_title: What is the DOI
weight: 10
---
## Answers to the most frequently asked questions about DOI and related topics

- [What is the DOI?](#what-is-the-doi)
- [What can be identified by a DOI?](#what-can-be-identified-by-a-doi)
- [Which is the DOI structure?](#which-is-the-doi-structure)
- [What is DOI resolution?](#what-is-doi-resolution)
- [What are metadata and how do they relate to DOI?](#what-are-metadata-and-how-do-they-relate-to-doi)
- [What is the International DOI Foundation?](#what-is-the-international-doi-foundation)
- [What is a DOI Registration Agency?](#what-is-a-doi-registration-agency)
- [Which are the advantages for registering DOIs?](#which-are-the-advantages-for-registering-dois)
- [How can I start registering DOIs?](#how-can-i-start-registering-dois)

More comprehensive informations can be found inside the DOI Handbook, by the International DOI Foundation.

---

## What is the DOI?

The Digital Object Identifier is a standard for persistently identifying a piece of intellectual property on a digital network and associating it with related current data, the metadata, in a structured extensible way.

DOIs have been called "the bar code for intellectual property": like the physical bar code, they are enabling tools for use all through the supply chain to add value and save cost.

A DOI differs from commonly used internet pointers to material such as the URL because it identifies an object as a first-class entity, not simply the place where the object is located.  
The DOI identifies an entity directly, not some attribute of an object (an address is an attribute of a thing, whereas the thing itself is a first class object).

A DOI also differs from commonly used identifiers of intellectual property such as standard bibliographic and related identifiers (ISBN, ISRC, etc) because it can be associated with defined services and is immediately actionable on a network.

---

## What can be identified by a DOI?

A DOI can apply to any form of intellectual property expressed in any digital environment.  
Intellectual property includes both physical and digital manifestations, performances and abstract works: DOIs can be used to identify texts, images, audio or video items, software, etc.

An entity can be identified at any arbitrary level of granularity.  
This means that, for instance, DOIs can identify a journal, an individual issue of a journal, an individual article in the journal, or a single table in that article.

---

## Which is the DOI structure?

The DOI consists of a unique alpha-numeric character string divided in two parts: a prefix and a suffix.

For example, a complete DOI is:

`10.1392/roma081203`

where:

- `10.1392` is the **prefix**, composed by a part identifying the string as a DOI (`10`) and a part identifying the registrant (`1392`);
- `roma081203` is the **suffix**, identifying the single digital object.

The prefix is assigned by a DOI Registration Agency to a specific registrant.  
The suffix is assigned by the registrant and must be unique within a prefix. It can integrate other standard identifiers such as ISBN or ISSN: as a consequence, the DOI allows to mantain the standard identifiers already in use.

The DOI is case insensitive (e.g. `10.1392/roma081203` is the same as `10.1392/ROMA081203`) and is considered an opaque string: nothing can be inferred from the number in respect of its use in the DOI System.

---

## What is DOI resolution?

Resolution, in general terms, is the process of submitting an identifier (of an entity) to a network service and receiving in return one or more pieces of current information related to the identified entity. For instance, in the case of the Domain Name System (DNS) the resolution is from domain name (e.g. [www.doi.org](http://www.doi.org)) to a single IP address (e.g. `132.151.1.146`), which is then used to communicate with that Internet host.

DOI resolution redirects the user from a DOI to one or more pieces of typed data: URLs representing instances of the object, services such as e-mail, or one or more items of metadata.  
"What the DOI identifies" and "what the DOI resolves to" are two different concepts: it is possible that a DOI does not resolve to the identified entity, but just to some related informations wished by the publisher.

DOI resolution is provided through the Handle System technology, developed by CNRI (Corporation for National Research Initiatives), and is freely available to any user encountering a DOI.

To resolve a DOI, just type in the address bar of any browser the string `https://doi.org/` followed by the DOI.  
For example, to resolve the DOI `10.1392/mdm_broeng`, report in your browser:  
[https://doi.org/10.1392/mdm_broeng](https://doi.org/10.1392/mdm_broeng)

As an alternative, utilize our proxy server, or the resolution form in the home page.

---

## What are metadata and how do they relate to DOI?

Each DOI is associated with a series of metadata, a set of bibliographical and commercial informations concerning the content (title, author, publication date, copyright, price, etc.) and its position within the whole registrant's publishing offer (the belonging of a title to a series, of an article to a serial, the availability of one publication in more formats and/or through different media, etc.).

By means of metadata, the DOI configures not simply as an identifying string, but takes the form of a powerful and unambiguous tool for data storage and exchange.  
Metadata, as well as the DOI they are associated to, are persistently connected to the object they describe, so they can be easily communicated to other subject across the productive and distributive chain, enhancing a content producer's ability to trade electronically.

Furthermore, metadata represent the key for the development of DOI-based services, such as transnational databases and search engines for different kinds of contents.

Asserting that metadata are persistent does not mean saying they are unmodifiable: registrants may update metadata about their contents any time they wish (whether some publication data change, when is modified the primary URL the DOI resolves to, etc.).

---

## What is the International DOI Foundation?

The International DOI Foundation (IDF), a non-profit organisation created in 1998, is the governance body of the DOI System, which safeguards all intellectual property rights relating to the DOI System.

IDF supports the development and promotion of the Digital Object Identifier system as a common infrastructure for content management, and works to ensure that any improvements made to the DOI system (including creation, maintenance, registration, resolution and policymaking of DOIs) are available to any DOI registrant, and that no third party licenses might reasonably be required to practice the DOI standard.

IDF is controlled by a Board elected by the members of the Foundation, with an appointed full-time Director who is responsible for co-ordinating and planning its activities.

Through the elected Board, the activities of the Foundation are ultimately controlled by its members. Since August 2005, mEDRA is represented within the Board by Piero Attanasio.

Membership is open to all organizations with an interest in electronic publishing and related enabling technologies.

---

## What is a DOI Registration Agency?

A DOI Registration Agency (RA) is an authority recognized by the IDF, whose primary role is to provide services to DOI registrants: allocating DOI prefixes, registering DOIs and providing the necessary infrastructure to allow registrants to declare and maintain metadata and state data.  
RAs are also expected actively to promote the widespread adoption of the DOI, to cooperate with the IDF in the development of the DOI System as a whole and to provide services on behalf of their specific user community.

See the most relevant information about mEDRA or the links to other RAs websites.

---

## Which are the advantages for registering DOIs?

There are three main values granted by DOI adoption:

- **Persistent Identification**: each DOI univocally and permanently identifies the object which is associated to
- **Network Actionability**: through Handle System technology, each DOI resolves to one or more web pages assigned by the publisher
- **Semantic Interoperability**: metadata allow to unambiguously communicate - to any user, from any place, at any point of the productive/distributive chain - all the informations about the related objects and the hierarchical relationships among them

---

## How can I start registering DOIs?

Access to DOI registration service requires the payment of an annual fee, the amount depending on the number of DOIs included.  
All the necessary informations to apply for the service are reported inside the page dedicated to how to register DOIs.
