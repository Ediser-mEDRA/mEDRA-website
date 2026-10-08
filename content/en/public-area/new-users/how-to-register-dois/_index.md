---
type: page
title: How to register DOIs
menu_title: How to register DOIs
weight: 10
draft: true
---
## The necessary informations to access DOI registration service and register DOIs properly

- [The necessary informations to access DOI registration service and register DOIs properly](#the-necessary-informations-to-access-doi-registration-service-and-register-dois-properly)
- [How can I access DOI registration service?](#how-can-i-access-doi-registration-service)
- [Which are the criteria for creating a DOI suffix?](#which-are-the-criteria-for-creating-a-doi-suffix)
  - [Mandatory guidelines](#mandatory-guidelines)
  - [Recommended guidelines](#recommended-guidelines)
- [What is the ONIX DOI Metadata Schema?](#what-is-the-onix-doi-metadata-schema)
- [What are metadata specifications?](#what-are-metadata-specifications)
- [How can I supply metadata to mEDRA?](#how-can-i-supply-metadata-to-medra)
- [How can I check my completed DOI registrations?](#how-can-i-check-my-completed-doi-registrations)

For further clarifications, please fill in the form to contact our Editorial Office.

---

## How can I access DOI registration service?

To start registering DOIs, you have to follow these steps:

1. Fill in the form to request an account and send it. In the "Request reason" field, you may write the kind of documentation you want to assign DOIs to (for instance: DOIs to serial articles provided on line through my website www.xyz.org).
2. You will be contacted by our sales and marketing department that, after ensuring the effective will to become a mEDRA user, will submit you the contract to join the DOI registration system. Costs and main provisions are resumed in the terms and conditions page.
3. Once signed the contract, you will be provided by our Administration Service with your DOI prefix, as well as personal username and password to access the Registered Users Area of the website.
4. At this point you are ready to register your first DOI. In order to do this, you first have to:
   - establish the DOI suffix;
   - compile the related metadata, in compliance with the ONIX DOI Metadata Schema, selecting the kind of object to be identified resting on the different specifications;
   - supply metadata to mEDRA, by choosing one of the three available modalities, different for the level of autonomy and assistance reserved to the user at the moment of compilation.
5. Finally, you will be able to monitor the results of your DOI registrations.

---

## Which are the criteria for creating a DOI suffix?

DOI prefix is assigned to your organization by mEDRA.  
You have to assign the DOI suffix, basing on the following directions:

### Mandatory guidelines

- Every suffix must be unique within its prefix.
- DOI suffix is case insensitive (e.g. `10.1392/dironix` is the same as `10.1392/DIRONIX`).
- UTF-8 is the required coding. UTF-8 is a Unicode implementation, thus in its pure form has no character set constraints at all: any character can be sent to, stored in, and retrieved from a handle server.
- Actually, the DOI string might incorporate any printable character from the Universal Character Set (UCS-2) of ISO/IEC 10646 (the character set defined by Unicode v2.0), encompassing most characters used in every major language written today. However, the Handle System (the underlying resolution technology for DOI system) at its core uses UTF-8, and this is why UTF-8 conformity is required.
- Special characters can be encoded as XML entities or directly in UTF-8 (e.g. `&#x03B2;` or `β`). Both cases are correctly handled by the mEDRA registration system.
- If you use characters that have special meaning in URI Syntax, when you embed DOIs within URLs (e.g. `http://dx.doi.org/10.1000/182`) you have to hexadecimal encode them.
- Find here the URI Syntax: [www.ietf.org/rfc/rfc2396.txt](https://www.ietf.org/rfc/rfc2396.txt)

### Recommended guidelines

- Your organization should adopt a DOI assignment scheme, e.g. including existing internal identifiers in use within your organization.
- The suffix should be as concise as possible because DOIs will be displayed online and in print and will be re-typed by end users.
- It is recommended **not** to use the following characters in DOI suffix:

| Carattere | Carattere | Carattere | Carattere | Carattere | Carattere |
|-----------|-----------|-----------|-----------|-----------|-----------|
| `;`       | `/`       | `?`       | `:`       | `@`       | `&`       |
| `=`       | `+`       | `$`       | `,`       | `*`       | `"`       |
| `%`       | `#`       | `<`       | `>`       | `'`       | `}`       |
| `{`       | `\|`      | `\`       | `^`       | `[`       | `]`       |
| `` ` ``   | SPACE     |           |           |           |           |

---

## What is the ONIX DOI Metadata Schema?

mEDRA made the choice to manage metadata:

- encoded according to **ONIX syntax**. ONIX (Online Information Exchange) is the most authoritative and structured metadata standard for content description within the publishing sector, created and regularly updated by EDItEUR;
- transmitted through **XML file format**, increasingly spreading all over the information and communication industry as the most effective computer language for metadata management.

Following these two requirements, mEDRA developed the **ONIX DOI Metadata Schema**, recognized by EDItEUR as official ONIX schema for DOI registration, constituting the model to which all the requests for DOI registration and update must conform.

---

## What are metadata specifications?

In order to assign DOIs to the different kinds of objects supported by the ONIX DOI Metadata Schema, mEDRA, in collaboration with EDItEUR, detected the following schema subsets and developed the related metadata specifications, documents guiding the user to a correct compilation of the XML files for DOI registration:

- monographic works
- monographic products
- monograph chapters (as works or products)
- serial titles (as works or products)
- serial issues (as works or products)
- serial articles (as works or products)

Registering a DOI on an object **as a work** (or abstraction) means considering the content itself, independently of the different publication formats. In such a case, the print, PDF, and HTML versions of the same article will all share the same DOI.

On the contrary, registering a DOI on an object **as a product** (or manifestation) implies that each different publication format of the same content will receive a separate DOI.

---

## How can I supply metadata to mEDRA?

To register DOI names with mEDRA, the following tools are available:

- **Simplified web form**, for the registration of single DOIs for journal articles and monographs. The web form user interface is available in English, Italian and German.
- **XML upload web interface** for registration of single DOIs or batches of DOIs. For this mEDRA also provides a Java program performing the automatic upload of the XML file via HTTPS POST.
- **B2B web service** to perform the automatic upload of the XML files for which mEDRA provides all supporting documentation.
- **OJS (Open Journal System) plug-in** that allows automatic export of the metadata and DOI registration with mEDRA.

Whichever the chosen method, after forwarding metadata you will receive an e-mail from mEDRA system communicating the registration result.

mEDRA accepts DOI registrations, according to the following XML-based metadata formats:

- **ONIX for DOI metadata schema**, according to the specifications provided.
- **JATS (Journal Publishing Tag Suite)**, via B2B web service only, only for journal articles. Specifications and recommendations will be provided on request.

Metadata are made available in different formats such as RDF, JSON, ONIX, formatted text citation, etc. through content negotiation.

---

## How can I check my completed DOI registrations?

Within the website **Registered Users Area**, it will be possible to manage your own account, changing your password or requesting additional DOI prefixes.

At any time, moreover, you will be able to monitor your activities, by reviewing the metadata associated to the registered DOIs, your submission history and the related statistics.
