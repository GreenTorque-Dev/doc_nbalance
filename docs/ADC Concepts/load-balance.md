---
title: Load Balance
sidebar_position: 5
---

# Load Balancing Basics

Load balancing is the process of distributing incoming network traffic across multiple servers to ensure no single server gets overwhelmed.

<div>
  <img
    src="/img/loadbalnce.png"
    alt="Load Balance"
    style={{  maxWidth: '500px' }}
  />
</div>


**Why it matters?** <br />
- Improves performance.
- Increases reliability.
- Enhances user experience.
- Ensures uptime even if a server fails.

## Load Balancing Methods.

1. **DNS Round Robin**
2. **Least Connections**
3. **Source**


<div>
  <img
    src="/img/load-2.png"
    alt="Load Balance 1"
    style={{  maxWidth: '700px' }}
  />
</div>

**DNS Round Robin (DNS RR)** <br />
**DNS Round Robin** distributes client requests by returning different backend server IP addresses in response to DNS queries, rotating through the available records.
- Load distribution occurs at the **DNS level**, not within HAProxy itself.
- HAProxy can consume DNS resolved backend IPs, but **does not control DNS round robin logic**.
- Traffic distribution depends on DNS caching and client resolver behavior.
**Use case:** <br />
Basic load distribution without session awareness, suitable for simple or external DNS based balancing.

---

**Round Robin** <br />
**Round Robin** distributes incoming requests sequentially across all available backend servers.
- Each new request is forwarded to the next server in the list.
- All servers receive traffic evenly, assuming similar performance.
- Stateless and simple to configure.
**Use case:** <br />
Best for environments where backend servers have similar capacity and performance.
---

**Least Connections** <br />

**Least Connections** forwards new requests to the backend server with the **fewest active connections.**
- Dynamically adapts to backend load.
- Helps prevent overloading busy servers.
- More effective than Round Robin when server load is uneven.

**Use case:**
Ideal for applications with long lived or variable duration connections.

________________________________________

**Source** 

**Source** load balancing selects a backend server based on a **hash of the client’s source IP address.**
- Requests from the same client IP are consistently routed to the same backend server.
- Provides basic session persistence without cookies.
- Distribution may become uneven if traffic originates from a small IP range.

**Use case:**
Useful when session persistence is required and cookie based stickiness is not available.


**Summary Table** 

| Method | Description | Session Affinity |
| --- | --- | --- |
| Round Robin | Sequential distribution | No |
| Least Connections | Least loaded server | No |
| Source | Hash based on client IP | Yes |
