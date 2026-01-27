---
title: Policy
sidebar_position: 1
---

# Policy

Policy will help you block and restrict URLs. 


<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/policy.png" alt="Policy" style={{ width: "60%", borderRadius: "8px" }} />
  </div>

  <div style={{ flex: "1" }}>
    <h3>Steps To Follow:</h3>
    <ol>
      <li>Click on> Policy from the menu bar. It will navigate you to the 
policy page. </li>
    </ol>
  </div>

</div>

### Policy page 

**BLOCK URL**: This will help the user to restrict or Block the URL. 

**REDIRECT**: This will help the user to redirect. e.g HTTP to HTTPS, Redirect to a particular URL. 

**BLOCK URL Except Few IPs**: This blocks the URL for everyone except the Ips explicitly allowed  
access. 

**EXPLICIT ALLOW**:This will allow the particular IP and block others.

### Steps to follow: 
1. To BLOCK URL, we need to add frontend server first. 
2. Then add the pages or URL that you want to block inside the text box. 
3. Click on> Block button will block that page or URL.

### After blocking the URL

![After blocking the URL](/img/policy1.png)

It will show the blocked URL. 
**DELETE** button will delete the blocked URL.

In **Redirect**  
1. select http/https from the drop-down menu and add URL name and Click on **Redirect**  
will redirect the URL. 
2. **Remove Redirect** will remove the URL.

![Redirect](/img/policy2.png)

In **BLOCK URL Except Few IPs** 
1. Enter the URL and add IP address inside the box.  
2. Then click on **BLOCK** will all the URL except specific IPs.

![BLOCK URL Except Few IPs](/img/policy3.png)

In **Explicit Allow**
1. Enter the the IP address inside the box separated by space which want to allow.  
2. Then click on **ALLOW** will allow specific IPs.

![Explicit Allow](/img/policy4.png)