--- 
title: Restore  
sidebar_position: 2
--- 


**nBalance** provides two flexible restore options to restore from backups. The **Restore** feature allows administrators to recover the system from a previously created backup. nBalance supports restoring the system either from a **local restore point** or by **uploading an external backup file.**
During a restore operation, the system reverts to the selected restore point, replacing the current configuration and data with the backup state. This is typically used for system recovery, rollback after misconfiguration, or disaster recovery.



<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

  <div style={{ flex: "1" }}>
    <img src="/img/restore-1.png" alt="Restore" style={{ width: "50%", borderRadius: "8px" }} />
  </div>

  <div style={{ flex: "1" }}>
   
Navigate to **Backup** page. <br />
Click **Backup** from the left navigation menu, will navigate to the Backup page.
  </div>

</div>

<br />
<br />

**1. Restore from Local Backup** 

This option allows you to restore the system using a **previously created local backup** stored on the system.
    1. Locate the required **Restore Points** list
    2. Click **Restore Backup** corresponds to the desired restore point.

<div>

    <img src="/img/restore-2.png" alt="Restore" style={{ width: "80%", borderRadius: "8px" }} />

</div>

    3. Confirm the restore operation when prompted.

<br />
<br />

**2. Restore from Uploaded Backup File.**

This option allows you to restore the system by uploading an external backup file.

    1.	Click **Choose File** under **Upload Backup ZIP**. <br />
    This opens a file selection dialog to choose the backup file.

<div>
    <img src="/img/restore-3.png" alt="Restore" style={{ width: "80%", borderRadius: "8px" }} />
</div>

    2.	Click **Restore Backup** to restore the system to the selected restore point.

    
<div>
    <img src="/img/restore-4.png" alt="Restore" style={{ width: "80%", borderRadius: "8px" }} />
</div>


**Note**

Restoring a backup will revert the system to the selected restore point and overwrite the current configuration and data.
