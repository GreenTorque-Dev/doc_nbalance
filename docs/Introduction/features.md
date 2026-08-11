---
title: Features
sidebar_position: 2
---

# nBalance Features

- Layer 4 & Layer 7 Load Balancing
- IPv6/v4 Compatability
- Application Health Checks
- Geo Restriction
- Firewall Protection
- SSL Offloading
- Session Persistence
- Bot Protection
- Blacklist check
- Reverse Proxy
- X-Forwarded Header Support
- HTTP / HTTPS Redirect
- UDP Support
- Explicit Access to Admin URL
- Explicit Management Access

---



### Layer 4 & Layer 7 Load Balancing

Whether your client needs to split traffic evenly or prioritize certain users (like premium ones), nBalance makes sure the right traffic goes to the right server—faster performance and better customer experience.

<div>
  <img
    src="/img/layer.png"
    alt="Layer 4 & Layer 7 Load Balancing"
    style={{  width: '600px' }}
  />
</div>

### Application Health Checks

Constantly checks if servers are working properly and only sends traffic to healthy ones.The client gets notified if any server goes down via email.Your client never has to worry about downtime. If one server goes down, nBalance automatically shifts traffic to the working ones. Their customers stay online, always.

### IPv6/v4 Compatibility

Supports both modern and older internet protocols.No matter what devices or networks their customers are on, nBalance ensures compatibility and accessibility—future-proofing their app.

### SSL Offloading

<div>
  <img
    src="/img/ssl.png"
    alt="SSL Offloading"
    style={{  width: '600px' }}
  />
</div>

nBalance handles the website encryption, so your client’s servers don’t have to.


**Speed** – Sites load faster because servers don’t consume CPU/memory for encryption. \
**Security** – Keeps customer data encrypted and safe. \
**Efficiency** – Frees up server power for actual business tasks. 

We have a tool to convert certificate ,create csr and open certificate store. For time of certificated to ADC. 

## WAF Protection

<div>
  <img
    src="/img/waf.png"
    alt="WAF Protection"
    style={{  width: '600px' }}
  />
</div>

Blocks unauthorized or harmful
traffic.​
nBalance protects your client’s
digital storefront like a 24/7
security guard—stopping threats
before they even reach the
server.​

## Session Persistence

- Keeps users connected to the same server during their visit.​
- This helps improve user experience and optimize performance.​

<div>
  <img
    src="/img/session.png"
    alt="Session Persistence"
    style={{  width: '600px' }}
  />
</div>


## Geo Restriction


<div>
  <img
    src="/img/gio5.png"
    alt="Geo Restriction"
    style={{  width: '600px' }}
  />
</div>



- Controls access to the application based on the location (country).​
- Need to restrict access in certain countries or comply with data regulations? With nBalance, it’s just a click away.​

## Custom Monitoring & Reporting

- Real-time visibility into traffic, health, and system performance.
- Your clients don’t just get results—they get proof. Full transparency
and control over their infrastructure.

<div>
  <img
    src="/img/mr.png"
    alt="Custom Monitoring & Reporting"
    style={{  width: '600px' }}
  />
</div>


## Bot Protection

- Detects and blocks malicious or suspicious.
- Protects forms, login pages, and APIs from automation attacks.
- Reduces risk from repeat offenders or known attack sources

<div>
  <img
    src="/img/boat.png"
    alt="Bot Protection"
    style={{  width: '600px' }}
  />
</div>


## Blacklist IP Check

<div>
  <img
    src="/img/ips.png"
    alt="Blacklist IP Check"
    style={{  width: '600px' }}
  />
</div>


- Blocks known malicious IP addresses from accessing applications
- Maintains dynamic and customizable IP blacklists.
- Reduces risk from repeat offenders or known attack sources

### Reverse Proxy

A reverse proxy is a server that sits in front of your web servers,
handling all client requests and forwarding them to the right
backend. 

- Every incoming connection first hits nBalance’s reverse proxy engine.
- Based on rules and real-time performance, it forwards requests to the best-fit backend server

## Two-Factor Authentication

<div>
  <img
    src="/img/secure.png"
    alt="Two-Factor Authentication"
    style={{  width: '600px' }}
  />
</div>


- Adds an extra layer of login security.

# X-Forwarded Header Support

<div>
  <img
    src="/img/herder.png"
    alt="X-Forwarded Header Support"
    style={{  width: '600px' }}
  />
</div>


The **X-Forwarded** feature allows nBalance to forward the original client request information to backend servers using HTTP headers.  
This is commonly required when a load balancer sits between the client and backend servers.

Without X-Forwarded headers, backend servers only see the load balancer’s IP address, not the real client IP.

nBalance inserts standard forwarding headers so backend applications can correctly identify the client and request details.

---

# HTTP/HTTPS Redirect

<div>
  <img
    src="/img/redirect.png"
    alt="HTTP/HTTPS Redirect"
    style={{  width: '600px' }}
  />
</div>


The **HTTP/HTTPS Redirect** feature allows nBalance to automatically redirect traffic between HTTP and HTTPS protocols or redirect to a particular URL.

This ensures secure communication by forcing clients to access applications using HTTPS when required.

---

# Explicit Access to Admin URL

<div>
  <img
    src="/img/explicit.png"
    alt="Explicit Access to Admin URL"
    style={{  width: '600px' }}
  />
</div>


**Explicit Access to Admin URL** is a security feature that restricts access to administrative URLs based on predefined IP addresses.

This ensures that admin URLs can only be accessed from trusted IPs, significantly reducing the risk of unauthorized access.

---

# ADC Explicit Management Access

<div>
  <img
    src="/img/ads.png"
    alt="ADC Explicit Management Access"
    style={{  width: '600px' }}
  />
</div>


**Explicit Management Access** is a security feature that restricts access to the ADC (Application Delivery Controller) Admin Portal based on source IP addresses.

This means the admin portal can only be accessed from explicitly authorized IP addresses or IP ranges, preventing unauthorized or unintended access from untrusted IPs or networks.

---


# UDP Support

<div>
  <img
    src="/img/udp.png"
    alt="UDP Support"
    style={{  width: '600px' }}
  />
</div>


nBalance now supports **UDP load balancing**, which allows User Datagram Protocol (UDP) traffic to be distributed across multiple backend servers for improved performance, scalability, and high availability.

Unlike TCP, UDP is a **connectionless protocol**, commonly used for real-time and high-performance services.

---