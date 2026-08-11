---
title: Delete a Frontend Server
sidebar_position: 4
---

1.	Navigate to **TCP Config**.
Click on **TCP Config** from the left navigation menu.
2.	Locate the required **Frontend server** from the list.
3.	The **Delete (✕)** control is used to permanently remove a **Frontend Server**.

<div>
  <img
    src="/img/frontdele.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

4.	A confirmation popup message appears to confirm that the Frontend server has been successfully deleted.

<div>
  <img
    src="/img/frontdelet1.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

Clicking the **Delete (✕)** icon will remove the frontend and all associated frontend level   
settings, includes:
- corresponding **backend servers** and backend associations.
- Port bindings
- Enabled or disabled security features (GeoAccess / Geo Restrict, Bot Protection, etc.)
- Frontend specific policies, rules, and configurations
**Note**: Once deleted, the frontend will **immediately stop accepting client traffic** on the configured IP and port.

