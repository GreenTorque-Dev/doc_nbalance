---
title: Services
sidebar_position: 2
---

# Services

This section provides information on the status of the Load Balancer, MTA (Mail Transfer Agent), 
logging and DNS services. You can use this interface to initiate actions such as starting, stopping, 
or restarting these services as needed. 

<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/service.png" alt="Services" style={{ width: "60%", boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }} />
  </div>

  <div style={{ flex: "1" }}>
    <ol>
      <li>Click on > Services It will navigate to the Services page.</li>
    </ol>
  </div>

</div>

## Service Page 

<div style={{maxWidth: '700px' , display: 'inline-block'}}>
  <img
    src="/img/service1.png"
    alt="Service"
    style={{boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}
  />
</div>

<br /><br />

In service page we have  
1. **Load Balancer**: Load balancer is a software tool that distributes incoming network traffic 
across multiple servers or resources to ensure efficient utilization, high availability, and 
optimal performance. It acts as an intermediary between clients and backend servers, 
forwarding client requests to the most appropriate server based on predefined algorithms 
and policies. 
2. **MTA**: MTA stands for Mail Transfer Agent. It is a software application or component 
responsible for the reliable transmission of email messages over a computer network.  
3. **Logging**: Is a tool used in nBalance to be auditing monitoring etc. 
4. **DNS**: DNS stands for Domain Name System. It will allow users to access memorable 
names instead of IP addresses. 

The user can **START**, **STOP** and **RESTART** using the buttons given inside the tab. 
**START** button will start the process. 
STOP button will stop the process. It will change the green color to red. 
RESTART button will restart the process. 
