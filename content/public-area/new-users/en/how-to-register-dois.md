---
title: How to register DOIs
description: Start registering DOIs with mEDRA, the process consists of a few
  straightforward steps. mEDRA provides different tools to accommodate
  organisations with different levels of technical expertise and autonomy.
weight: 21
draft: true
date: 2026-09-16T14:49:00.000+02:00
author: Jehu Procore Njikonga
---
# 📝 DOI Registration Guide

The following sections provide the essential information you need to **access the mEDRA DOI Registration Service and register DOI names correctly**.

## 🧭 Registration Guide

- 🔐 [**How can I access the DOI Registration Service?**](https://www-medra-dev.medra.org/en/guide.htm#guide1)
- 🏷️ [**What are the criteria for creating a DOI suffix?**](https://www-medra-dev.medra.org/en/guide.htm#guide2)
- 📋 [**What is the ONIX DOI Metadata Schema?**](https://www-medra-dev.medra.org/en/guide.htm#guide3)
- 📚 [**What are metadata specifications?**](https://www-medra-dev.medra.org/en/guide.htm#guide4)
- 📤 [**How can I supply metadata to mEDRA?**](https://www-medra-dev.medra.org/en/guide.htm#guide5)
- 📊 [**How can I check my completed DOI registrations?**](https://www-medra-dev.medra.org/en/guide.htm#guide6)

> 💡 **Need further information?**  
> If you need further clarification, please [**contact our Editorial Office**](https://www-medra-dev.medra.org/en/contact.htm).

---

## 🔐 How can I access the DOI Registration Service?

To start registering DOI names with mEDRA, follow these steps:

### 1. 📝 Request an account

Complete the [**account request form**](https://www-medra-dev.medra.org/en/req_account.htm) and submit it to mEDRA.

In the **“Request reason”** field, indicate the type of documentation or content for which you intend to assign DOIs.

For example:

> DOIs for serial articles provided online through my website www.xyz.org

### 2. 🤝 Become a mEDRA user

After receiving your request, our **Sales and Marketing Department** will contact you to confirm your requirements and your intention to become a mEDRA user.

Once your request has been reviewed, you will receive the documentation required to join the mEDRA DOI Registration Service.

The applicable costs and principal provisions are described in the [**Terms and Conditions**](https://www-medra-dev.medra.org/en/terms.htm).

### 3. 🔑 Receive your DOI prefix and credentials

Once the contract has been signed, mEDRA's **Administration Service** will provide you with:

- 🔢 your **DOI prefix**;
- 👤 your personal **username**;
- 🔒 your **password**.

These credentials allow you to access the **Registered Users Area** of the mEDRA website.

### 4. 🏷️ Create your DOI

You are now ready to register your first DOI.

First, establish an appropriate DOI [**suffix**](https://www-medra-dev.medra.org/en/guide.htm#guide2) according to the applicable guidelines.

Then:

1. 📋 Compile the metadata for the object.
2. 📚 Select the appropriate type of object according to the relevant [**metadata specifications**](https://www-medra-dev.medra.org/en/guide.htm#guide4).
3. 🧾 Ensure that the metadata comply with the [**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/en/guide.htm#guide3).
4. 📤 Submit the metadata to mEDRA using one of the available [**submission methods**](https://www-medra-dev.medra.org/en/guide.htm#guide5).

The available methods differ according to the level of **autonomy and assistance** required during the metadata compilation and submission process.

### 5. 📊 Monitor your registrations

Once your metadata have been submitted, you can [**monitor the results of your DOI registrations**](https://www-medra-dev.medra.org/en/guide.htm#guide6), including the metadata associated with your registered DOI names and your submission history.

---

## 🏷️ What are the criteria for creating a DOI suffix?

The **DOI prefix** is assigned to your organisation by mEDRA.

The **DOI suffix** is assigned by you and must comply with the following guidelines.

### ✅ Mandatory guidelines

#### 🔢 Uniqueness

Every DOI suffix **must be unique within its DOI prefix**.

#### 🔤 Case insensitivity

DOI suffixes are **case insensitive**.

For example:

`10.1392/dironix`

and

`10.1392/DIRONIX`

refer to the same DOI.

#### 🌐 UTF-8 encoding

**UTF-8** encoding is required.

UTF-8 is a Unicode implementation and therefore supports characters used in virtually all major writing systems. The underlying **Handle System**, which provides the resolution technology for the DOI System, uses UTF-8 at its core.

#### 🔣 Special characters

Special characters may be encoded either:

- directly using UTF-8, for example `β`; or
- as XML entities, for example `&#x03B2;`.

Both forms are correctly handled by the mEDRA registration system.

#### 🔗 Characters with special URI meaning

If a DOI containing characters with a special meaning in **URI syntax** is embedded in a URL, those characters must be **hexadecimal encoded**.

For example:

`https://dx.doi.org/10.1000/182`

For further information, refer to the [**URI Syntax specification**](http://www.ietf.org/rfc/rfc2396.txt).

---

### 💡 Recommended guidelines

#### 🧩 Adopt a consistent assignment scheme

Your organisation should establish a **consistent DOI assignment scheme**.

Where appropriate, this may incorporate existing internal identifiers already used by your organisation.

#### ✂️ Keep the suffix concise

DOI suffixes should be **as concise as possible**.

DOIs are displayed both online and in print and may need to be manually entered or retyped by end users.

#### ⚠️ Avoid problematic characters

The following characters are **not recommended** in DOI suffixes:

| Character | Character | Character | Character | Character | Character | Character |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| `;` | `/` | `?` | `:` | `@` | `&` | `=` |
| `+` | `$` | `,` | `*` | `"` | `%` | `#` |
| `<` | `>` | `'` | `}` | `{` | `\|` | `\` |
| `^` | `[` | `]` | `` ` `` | **SPACE** | | |

---

## 📋 What is the ONIX DOI Metadata Schema?

mEDRA has chosen to manage DOI metadata using two fundamental principles:

### 📚 ONIX metadata syntax

Metadata are encoded according to **ONIX (Online Information Exchange)**.

ONIX is a highly structured metadata standard widely used in the publishing industry. It is developed and regularly maintained by [**EDItEUR**](http://www.editeur.org).

### 🧾 XML format

Metadata are transmitted using **XML**, a widely adopted format for the structured exchange and management of metadata.

### 🔗 The ONIX DOI Metadata Schema

Based on these requirements, mEDRA developed the [**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/en/schema.htm).

The schema has been recognised by EDItEUR as the official **ONIX schema for DOI registration** and defines the model to which **all DOI registration and update requests must conform**.

---

## 📚 What are metadata specifications?

To support the registration of different types of objects covered by the ONIX DOI Metadata Schema, mEDRA, in collaboration with EDItEUR, has defined a set of **metadata specifications**.

These specifications provide practical guidance for correctly compiling XML metadata for DOI registration.

The available specifications cover:

- 📖 **Monographic works**
- 📦 **Monographic products**
- 📑 **Monograph chapters** — as works or products
- 📰 **Serial titles** — as works or products
- 📕 **Serial issues** — as works or products
- 📄 **Serial articles** — as works or products

The complete documentation is available in the [**metadata specifications**](https://www-medra-dev.medra.org/en/metadata_td.htm).

### 🧠 Work vs. Product

When a DOI is assigned to an object as a **work (abstraction)**, the DOI identifies the content itself, independently of its publication format.

For example, the **print, PDF and HTML versions of the same article** may share the same DOI.

When a DOI is assigned to an object as a **product (manifestation)**, each different publication format of the same content receives a **separate DOI**.

> **Work / abstraction** → identifies the content independently of its format  
> **Product / manifestation** → identifies a specific publication format

---

## 📤 How can I supply metadata to mEDRA?

To register DOI names with mEDRA, several submission methods are available.

### 🖥️ Simplified Web Form

The **Simplified Web Form** allows the registration of individual DOIs for **journal articles and monographs**.

The interface is available in:

🇬🇧 English · 🇮🇹 Italian · 🇩🇪 German

### 📄 XML Upload

The **XML Upload Web Interface** allows you to submit:

- a single DOI registration; or
- a batch of DOI registrations.

mEDRA also provides a [**Java program**](https://www-medra-dev.medra.org/en/utilities.htm) that can automatically upload XML files using an **HTTPS POST** request.

### 🔌 B2B Web Service

The **B2B Web Service** allows organisations to automate the submission of XML metadata.

mEDRA provides comprehensive [**B2B Web Service documentation**](https://www-medra-dev.medra.org/en/ws.htm) for integration with external systems.

### 📰 OJS Plugin

The [**mEDRA OJS Plugin**](https://github.com/pkp/medra) for **Open Journal Systems (OJS)** allows automatic export of metadata and DOI registration with mEDRA directly from OJS.

---

### 📧 Registration result

Regardless of the submission method chosen, after forwarding your metadata you will receive an **email from the mEDRA system** communicating the result of the DOI registration.

---

## 🧾 Supported metadata formats

mEDRA accepts DOI registrations using the following **XML-based metadata formats**:

### 📋 ONIX for DOI

The [**ONIX DOI Metadata Schema**](https://www-medra-dev.medra.org/en/schema.htm), according to the applicable [**metadata specifications**](https://www-medra-dev.medra.org/en/metadata_td.htm).

### 📰 JATS

**JATS (Journal Article Tag Suite)** is supported **via the B2B Web Service only** and is currently available for **journal articles**.

The JATS specifications and recommendations are available on request.

---

## 🌐 Metadata access and content negotiation

Registered DOI metadata are also made available in different formats, including:

- RDF
- JSON
- ONIX
- formatted text citations
- and other supported representations.

These representations can be accessed through **[content negotiation](http://data-medra-dev.medra.org)**.

---

## 📊 How can I check my completed DOI registrations?

The **Registered Users Area** provides access to account management and DOI registration information.

### 🔐 Manage your account

Within the Registered Users Area, you can:

- 🔑 change your **password**;
- ➕ request additional **DOI prefixes**;
- 👤 manage your account information.

### 📈 Monitor your DOI activities

You can also monitor your DOI registration activities at any time, including:

- 🧾 the **metadata** associated with your registered DOIs;
- 📤 your **submission history**;
- 📊 the related **statistics**.

This allows you to keep track of your DOI registrations and review the metadata submitted to the mEDRA registration system.
