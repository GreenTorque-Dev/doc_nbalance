--- 
title: SSL Certificates 
sidebar_position: 5
--- 

# SSL Certificates 

Certificate Management in nBalance provide tools for managing SSL certificates. This includes the ability to upload, renew, or replace certificates. Our nBalance also support automated certificate renewal through integration with certificate authorities.

<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/ssl-1.png" alt="Certificates" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.3)', width: "40%"}} />
  </div>

  <div style={{ flex: "1" }}>
    <ol>
      <p>1. Navigate to **Certificates** page. Click **Certificates**, It will navigate to the Certificates page.</p>
    </ol>
  </div>

</div>

## Upload SSL Certificate

<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/certi1.png" alt="Certificates" style={{  width: "70%", borderRadius: "8px" }} />
  </div>

  <div style={{ flex: "1" }}>
    <ol>
    <li>In the **SSL Certificate** section, click **Choose File** to open the file selection dialog.</li>
    <li>Browse and select the SSL certificate file from the local system.</li>
    <li>Click **Upload** to upload the certificate to the ADC.</li>
    </ol>
  </div>

</div>

## Upload Server Certificate (CA / Intermediate / Root)

<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/ssl-2.png" alt="Certificates" style={{ width: "70%", borderRadius: "8px" }} />
  </div>

  <div style={{ flex: "1" }}>
    <ol>
    <li>In the **Server Certificate (CA / Intermediate / Root)** section, click **Choose Fil**e to open the file selection dialog.</li>
    <li>Browse and select the SSL certificate file from the local system.</li> 
    <li>Click **Upload** to upload the certificate to the ADC.</li>
    </ol>
  </div>

</div>

### Uploaded Certificates
This section displays all SSL certificates that have been uploaded to the system.

### Certificate List


<div>
  <img
    src="/img/ssl-3.png"
    alt="Set a Backend Server to Maintenance Mode"
    style={{  maxWidth: '800px' }}
  />
</div>

The table provides details of each uploaded certificate:
-	Certificate
Displays the name of the uploaded certificate file. 
-	Expiry
Shows the expiration date of the certificate.
If not available, it is displayed as None. 
-	File Type
Indicates the type of certificate: 
-	SSL certificate – Primary SSL certificate 
-	server certificate – CA intermediate or root certificate 
-	Action 
-	Delete: Removes the selected certificate from the ADC. 
---

Search and Filter
-	Use the search bar to quickly find certificates by name. 
-	The dropdown allows you to control the number of entries displayed. 
---
**Note:** Uploaded certificates are automatically prefixed with the date of upload to help identify and manage certificate versions easily.



<!-- ## After Adding the SSL Certificate 

![After Adding the SSL Certificate](/img/certi2.png)

This image shows the added certificate. The Delete button will help you to delete the certificate. 
Note: You cannot delete a certificate if it is used by any front-end server.

## Add Server Certificate

![Add Server Certificate](/img/certi3.png)


1. Browse the Server certificate from the system. 
2. Click on >Upload

![After Adding the Server Certificate](/img/certi4.png) -->

