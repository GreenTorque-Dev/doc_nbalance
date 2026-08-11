---
title: Maintenance Mode
sidebar_position: 3
---

### Backend Server Maintenance and Production Modes

**nBalance** allows administrators to change the operational state of backend servers to support maintenance activities without disrupting live traffic.

**Maintenance Mode** temporarily removes a backend server from active traffic handling while keeping its configuration intact.

**Set a Backend Server to Maintenance Mode**

1.	Navigate to **TCP Config**.
Click on **TCP Config** from the left navigation menu.

2.	 Locate the Navigate to the required **Frontend** and **Backend Server List**.

3.	Click the **Maintenance Mode** icon (wrench icon) in the **Action buttons**, as shown in the screenshot.


<div>
  <img
    src="/img/maint-1.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '600px' }}
  />
</div>

4.	When a backend server is successfully placed into **Maintenance Mode**, a confirmation pop up message is displayed.  And the **Backend Server List** is highlighted with a **distinct background color** to clearly indicate its maintenance state.

<div>
  <img
    src="/img/maint-2.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '600px' }}
  />
</div>

5.	Click **OK** to close the confirmation dialog.

<div>
  <img
    src="/img/maint-3.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '600px' }}
  />
</div>

#### Notes
- New client traffic is no longer forwarded to this server.
- Switching modes does not delete or modify backend server configuration.
- Health checks will be disabled for the backend server in **maintenance mode**.
- Maintenance Mode is recommended before performing planned backend maintenance.

**Set a Backend Server to Production Mode**

**Production Mode** restores a backend server to active service, allowing it to receive traffic again.

1.	Navigate to **TCP Config**.
Click on **TCP Config** from the left navigation menu.

2.	 Locate the Navigate to the required **Frontend** and **Backend Server List**.

3.	Click the Maintenance Mode icon (wrench icon) in the Action buttons, as shown in the screenshot.



<div>
  <img
    src="/img/up-back-3.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '600px' }}
  />
</div>


6.	When a backend server is successfully placed back to **Production Mode**, a confirmation pop up message is displayed. 





<div>
  <img
    src="/img/maint-5.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '600px' }}
  />
</div>


7.	Click **OK** to close the confirmation dialog.

#### Notes
- Health checks will be resumed to determine the status/state of the server.
- The backend server is returned to **active (production)** state. 
- The server becomes eligible to receive traffic based on the configured load balancing method.
- Health checks determine whether a backend server in production mode can receive traffic
