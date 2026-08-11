---
title: Explicit Access to Admin URL
sidebar_position: 9
---

## Overview
**Explicit Access Control for Admin URLs** is a security feature designed to protect sensitive administrative URLs **(e.g. /ecp, /admin, /wp-admin)** by restricting access based on client IP addresses.
It allows administrators to **block or allow access to admin specific URL paths** while explicitly permitting access only from trusted IP addresses.
This feature helps prevent unauthorized access to administrative interfaces such as control panels or management endpoints.

### Configure Explicit Access to Admin URL
1.	Navigate to **Policy**. \
Click on **Policy** from the left navigation menu.

<div>
  <img
    src="/img/policy.png"
    alt="Add udp Server"
    style={{  maxWidth: '400px' }}
  />
</div>

2.	Locate the required **Frontend server** from the list you want to configure the **Explicit Access**.
3.	Expand the required **frontend server** and locate the **Block URL Except Few IPs** option.

<div>
  <img
    src="/img/policy1.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

4.	Enter the admin URL suffix **(e.g /admin)** and **IP address** and click **Block** button.
**Example** /admin and IP address 192.168.0.100 192.168.0.101

<div>
  <img
    src="/img/policy2.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

5.	The added URL and the configured allowed IP addresses will be listed below.

<div>
  <img
    src="/img/policy3.png"
    alt="Add udp Server"
    style={{  maxWidth: '600px' }}
  />
</div>

Once **Explicit Access to Admin URL** is configured/applied to the selected frontend server and begins **restricting access to the specified admin URL**, allowing requests only from the configured IP addresses and blocking all others.