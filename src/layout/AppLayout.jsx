import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mantine/core';
import Sidebar from './Sidebar';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

export default function AppLayout() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const loc = useLocation();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ padding: 24, background: '#f7f8fa' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <Button
            variant="light"
            onClick={() => { dispatch(logout()); nav('/login'); }}
          >
            Logout
          </Button>
        </div>
        <div style={{ background: 'white', borderRadius: 16, padding: 16, boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}>
          <Outlet key={loc.pathname} />
        </div>
      </div>
    </div>
  );
}
