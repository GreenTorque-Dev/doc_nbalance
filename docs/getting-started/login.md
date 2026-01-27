import React from 'react';

<div style={{
  display: 'flex',
  gap: '30px',
  alignItems: 'flex-start',
  flexWrap: 'wrap'
}}>

  {/* LEFT SIDE – IMAGE */}
  <div style={{ flex: '1', minWidth: '280px' }}>
    <img 
      src="/img/login-page.png" 
      alt="NBalance Login Page" 
      style={{
        width: '100%',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.12)'
      }}
    />
  </div>

  {/* RIGHT SIDE – STEPS */}
  <div style={{ flex: '1', minWidth: '320px' }}>
    <h3>Steps To Follow:</h3>
    <ol>
      <li>Click the <b>Login</b> button. The login page will be displayed.</li>
      <li>Enter the username <b>admin</b>.</li>
      <li>Enter the password <b>admin</b>.</li>
      <li>Click the <b>Sign In</b> button. You will be redirected to the NBalance home page.</li>
    </ol>
  </div>

</div>
