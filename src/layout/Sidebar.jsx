import { Button } from '@mantine/core';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const nav = useNavigate();
  const loc = useLocation();

  const itemStyle = (active) => ({
    width: '100%',
    justifyContent: 'flex-start',
    marginBottom: 8,
    color:'black',
    backgroundColor: active ? '#babae4ff' : 'white',
    border: active ? '1px solid #5c7cfa' : '1px solid #e9ecef',
  });

  return (
    <div style={{ padding: 16, borderRight: '1px solid #eee', background: '#ffffff' }}>
      <h2 style={{ margin: 0, marginBottom: 12 }}>My App</h2>
      <Button style={itemStyle(loc.pathname.includes('/app/form'))} onClick={() => nav('/app/form')}>
        Form
      </Button>
      <Button style={itemStyle(loc.pathname.includes('/app/dashboard'))} onClick={() => nav('/app/dashboard')}>
        Dashboard
      </Button>
    </div>
  );
}
