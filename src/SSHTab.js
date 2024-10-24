import React, { useState } from 'react';

function SSHTab() {
  const [ip, setIp] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`SSH to ${ip} with user: ${username}`);
    // Here, you'd handle the actual SSH connection logic
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>SSH Connection</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>IP Address:</label>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
}

export default SSHTab;
