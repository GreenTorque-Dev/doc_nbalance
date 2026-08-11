---
title: Explicit Allow
sidebar_position: 1
---


**Geo Restrict** is a security feature that controls access to frontend servers based on the **geographical location (country)** of incoming client requests. It allows administrators to define **Allowed** and **Blocked** country lists and apply these rules at the **frontend server level.**
Geo Restrict helps organizations enforce regional access policies, reduce exposure to unwanted traffic, and enhance overall security.

### How Geo Restrict Works
Geo Restrict operates in one of the following modes:

#### Explicit Allow (Allowed Countries)
- Selected countries are added to the Allowed Countries list.
- Traffic is permitted only from the allowed countries.
- Traffic from all other countries is blocked by default.
**Example:**
Frontend VHTTPS_CRM configured with **Explicit Allow** will accept traffic only from the selected allowed countries and deny access from all others.

### Use case:
Restrict access strictly to specific countries (for example, internal or region specific services).

### Apply Explicit Allow on a Frontend
1.	Navigate to **Geo Restrict**. \
Click on **Geo Restrict** from the left navigation menu.
2.	Locate the required **frontend server** from the list for which you want to enable **Explicit Allow**.

<div>
  <img
    src="/img/bot3.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

3.	Select **Explicit Allow** from the drop down menu.

<div>
  <img
    src="/img/bot4.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

4.	Click **Update** to save.

<div>
  <img
    src="/img/bot5.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

