import React, { useEffect } from 'react';

function TelnetTab() {
  useEffect(() => {
    document.title = 'Telnet Connection';
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Telnet Connection</h2>
      <form>
        <div>
          <label>IP Address:</label>
          <input type="text" required />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
}

export default TelnetTab;
