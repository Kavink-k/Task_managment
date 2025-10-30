import { useState } from 'react';
import { Text } from '@mantine/core'; // optional
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/slices/usersSlice';
import { redirect, useNavigate } from 'react-router-dom';
import CustomModal from '../components/CustomModal';

const styles = {
  page: {
    minHeight: '100vh',
    display: 'grid',
    placeItems: 'center',
    background:
      'radial-gradient(1100px 650px at 5% 5%, #eef4ff 0%, transparent 60%), radial-gradient(900px 600px at 95% 10%, #ffe7f1 0%, transparent 55%), linear-gradient(180deg, #f9fbff 0%, #ffffff 100%)',
    padding: 16,
  },
  card: {
    width: 520,
    borderRadius: 26,
    padding: 30,
    background: 'rgba(255, 255, 255, 0.72)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255,255,255,0.65)',
    boxShadow: '0 28px 70px rgba(31, 41, 55, 0.15)',
  },
  title: { margin: 0, textAlign: 'center', letterSpacing: 0.3 },
  subtitle: { textAlign: 'center', marginTop: 6, color: '#6b7280' },
  grid: { display: 'grid', gridTemplateColumns: '1fr', gap: 14, marginTop: 10 },
  label: { fontSize: 13, fontWeight: 700, marginBottom: 6 },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 14,
    border: '1px solid #e6eaf2',
    padding: '0 16px',
    outline: 'none',
    fontSize: 14,
    background: '#ffffff',
  },
  inputFocus: {
    border: '1px solid #22b8cf',
    boxShadow: '0 0 0 4px rgba(34, 184, 207, 0.16)',
  },
  row2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 },
  button: {
    width: '100%',
    height: 48,
    borderRadius: 14,
    border: 'none',
    fontWeight: 800,
    fontSize: 15,
    cursor: 'pointer',
    background: 'linear-gradient(90deg, #12b886 0%, #40c057 100%)',
    color: '#fff',
    marginTop: 6,
    boxShadow: '0 10px 22px rgba(18, 184, 134, 0.28)',
    transition: 'transform 120ms ease, box-shadow 120ms ease',
  },
  buttonHover: { transform: 'translateY(-1px)', boxShadow: '0 16px 30px rgba(18,184,134,0.38)' },
  foot: { marginTop: 12, textAlign: 'center', fontSize: 12, color: '#6b7280' },
};

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
  const [ok, setOk] = useState(false);
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState({ name: false, email: false, password: false, confirm: false });

  const dispatch = useDispatch();
  const nav = useNavigate();

  const onChange = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleRegister = () => {
    if (!form.name || !form.email || !form.password || !form.confirm) return;
    if (form.password !== form.confirm) return;
    dispatch(registerUser({ name: form.name, email: form.email, password: form.password }));
    setOk(true);
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Register to proceed</p>

        <div style={styles.grid}>
          <div>
            <div style={styles.label}>Name</div>
            <input
              type="text"
              placeholder="Your full name"
              value={form.name}
              onChange={onChange('name')}
              onFocus={() => setFocus(f => ({ ...f, name: true }))}
              onBlur={() => setFocus(f => ({ ...f, name: false }))}
              style={{ ...styles.input, ...(focus.name ? styles.inputFocus : {}) }}
            />
          </div>

          <div>
            <div style={styles.label}>Email</div>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={onChange('email')}
              onFocus={() => setFocus(f => ({ ...f, email: true }))}
              onBlur={() => setFocus(f => ({ ...f, email: false }))}
              style={{ ...styles.input, ...(focus.email ? styles.inputFocus : {}) }}
            />
          </div>

          <div style={styles.row2}>
            <div>
              <div style={styles.label}>Password</div>
              <input
                type="password"
                placeholder="Create password"
                value={form.password}
                onChange={onChange('password')}
                onFocus={() => setFocus(f => ({ ...f, password: true }))}
                onBlur={() => setFocus(f => ({ ...f, password: false }))}
                style={{ ...styles.input, ...(focus.password ? styles.inputFocus : {}) }}
              />
            </div>

            <div>
              <div style={styles.label}>Confirm Password</div>
              <input
                type="password"
                placeholder="Re-enter password"
                value={form.confirm}
                onChange={onChange('confirm')}
                onFocus={() => setFocus(f => ({ ...f, confirm: true }))}
                onBlur={() => setFocus(f => ({ ...f, confirm: false }))}
                style={{ ...styles.input, ...(focus.confirm ? styles.inputFocus : {}) }}
              />
            </div>
          </div>
        </div>

        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={handleRegister}
          style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
        >
          Register
        </button>

        <div style={styles.foot}>
          <Text size="xs">By continuing, you agree to our Terms & Privacy. <a href="/login" style={{ marginLeft: 4, fontWeight: 700 , textDecoration: 'underline'
          }}>Go Login</a></Text>
        </div>
      </div>

      <CustomModal
        opened={ok}
        onClose={() => { setOk(false); nav('/login'); }}
        title="Success"
        message="Successfully registered!"
        confirmText="Go to Login"
      />
    </div>
  );
}























// import { useEffect, useRef, useState } from 'react';
// import { Paper,Anchor, TextInput, Button, Text, Title } from '@mantine/core';
// import { IconUser, IconMail, IconLock } from '@tabler/icons-react';
// import { useDispatch } from 'react-redux';
// import { registerUser } from '../redux/slices/usersSlice';
// import { useNavigate,Link } from 'react-router-dom';
// import CustomModal from '../components/CustomModal';

// export default function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });
//   const [ok, setOk] = useState(false);
//   const [error, setError] = useState(''); // optional inline error for validation

//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   // Refs for enter-to-next focus
//   const nameRef = useRef(null);
//   const emailRef = useRef(null);
//   const passRef = useRef(null);
//   const confirmRef = useRef(null);
//   const registerBtnRef = useRef(null);

//   const onChange = (key) => (e) => setForm({ ...form, [key]: e.currentTarget.value });

//   const focusNext = (ref) => {
//     // small timeout to ensure keydown completes
//     setTimeout(() => ref?.current?.focus(), 0);
//   };

//   const handleKeyDown = (e, nextRef) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       if (nextRef) focusNext(nextRef);
//     }
//   };

//   const validate = () => {
//     if (!form.name || !form.email || !form.password || !form.confirm) return 'Please fill all fields';
//     if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Invalid email address';
//     if (form.password.length < 6) return 'Password must be at least 6 characters';
//     if (form.password !== form.confirm) return 'Passwords do not match';
//     return '';
//   };

//   const handleRegister = () => {
//     const err = validate();
//     if (err) {
//       setError(err);
//       return;
//     }
//     setError('');
//     dispatch(registerUser({ name: form.name, email: form.email, password: form.password }));
//     setOk(true); // open success popup
//     //
//  // redirect to login page};

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'grid',
//         placeItems: 'center',
//         padding: 24,
//         background:
//           'radial-gradient(1100px 650px at 5% 5%, #eef4ff 0%, transparent 60%), radial-gradient(900px 600px at 95% 10%, #ffe0ec 0%, transparent 55%), linear-gradient(180deg, #f9fbff 0%, #ffffff 100%)',
//       }}
//     >
//       <Paper
//         p={30}
//         radius={26}
//         style={{
//           width: 520,
//           background: 'rgba(255,255,255,0.78)',
//           backdropFilter: 'blur(12px)',
//           WebkitBackdropFilter: 'blur(12px)',
//           border: '1px solid rgba(255,255,255,0.7)',
//           boxShadow:
//             '0 28px 70px rgba(31,41,55,0.16), 0 10px 24px rgba(31,41,55,0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
//         }}
//       >
//         <div style={{ textAlign: 'center', marginBottom: 16 }}>
//           <Title order={2} style={{ letterSpacing: 0.3, marginBottom: 4 }}>
//             Create Account
//           </Title>
//           <Text size="sm" c="dimmed">
//             Register to proceed
//           </Text>
//         </div>

//         <TextInput
//           label="Name"
//           placeholder="Your full name"
//           value={form.name}
//           onChange={onChange('name')}
//           ref={nameRef}
//           onKeyDown={(e) => handleKeyDown(e, emailRef)}
//           leftSection={<IconUser size={16} />}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         <TextInput
//           label="Email"
//           placeholder="you@example.com"
//           value={form.email}
//           onChange={onChange('email')}
//           ref={emailRef}
//           onKeyDown={(e) => handleKeyDown(e, passRef)}
//           leftSection={<IconMail size={16} />}
//           style={{ marginTop: 12 }}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         <TextInput
//           type="password"
//           label="Password"
//           placeholder="Create password"
//           value={form.password}
//           onChange={onChange('password')}
//           ref={passRef}
//           onKeyDown={(e) => handleKeyDown(e, confirmRef)}
//           leftSection={<IconLock size={16} />}
//           style={{ marginTop: 12 }}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         <TextInput
//           type="password"
//           label="Confirm Password"
//           placeholder="Re-enter password"
//           value={form.confirm}
//           onChange={onChange('confirm')}
//           ref={confirmRef}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               e.preventDefault();
//               registerBtnRef.current?.click(); // Enter on last field -> submit
//             }
//           }}
//           leftSection={<IconLock size={16} />}
//           style={{ marginTop: 12 }}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         {error && (
//           <Text size="sm" c="red" style={{ marginTop: 8 }}>
//             {error}
//           </Text>
//         )}

//         <Button
//           ref={registerBtnRef}
//           fullWidth
//           onClick={handleRegister}
//           styles={{
//             root: {
//               height: 50,
//               width: '90%',
//               borderRadius: 5,
//               fontWeight: 800,
//               border: 'none',
//               cursor: 'pointer',
//               fontSize: 15,
//               marginTop: 16,
//               marginLeft: 30,
//               backgroundImage: 'linear-gradient(90deg, #126db8ff 0%, #08beb5ff 100%)',
//               boxShadow: '0 14px 28px rgba(18,184,134,0.32)',
//             },
//           }}
//         >
//           Register
//         </Button>
//         <div style={{ textAlign: "center" }}>
//           <span>
//             Already have an account?
//             <Anchor component={Link} to="/Login" style={{ fontWeight: 700 }}>
//               Login
//             </Anchor>
//           </span>
//         </div>
//       </Paper>

//       {/* Success Modal with Go to Login */}
//       {/* <CustomModal
//         opened={ok}
//         onClose={() => {
//           setOk(false);
//           nav('/login');
//         }}
//         title="Success"
//         message="Successfully registered!"
//         confirmText="Go to Login"
//         onConfirm={() => {
//           setOk(false);
//           nav('/login');
//         }}
//       /> */}
//       <CustomModal
//   opened={ok}
//   onClose={() => {
//     setOk(false);
//     nav('/login');
//   }}
//   title="Success"
//   message="Successfully registered!"
//   confirmText="Go to Login"
//   onConfirm={() => {
//     setOk(false);
//     nav('/login');
//   }}
// />  
//     </div>
//   );
// }
// }




























// import { useEffect, useRef, useState } from 'react';
// import { Paper, Anchor, TextInput, Button, Text, Title } from '@mantine/core';
// import { IconMail, IconLock } from '@tabler/icons-react';
// import { useDispatch } from 'react-redux';
// import { loginUser } from '../redux/slices/usersSlice'; // Adjust the import based on your Redux setup
// import { useNavigate, Link } from 'react-router-dom';
// import CustomModal from '../components/CustomModal';

// export default function Login() {
//   const [form, setForm] = useState({ email: '', password: '' });
//   const [ok, setOk] = useState(false);
//   const [error, setError] = useState('');

//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   // Refs for enter-to-next focus
//   const emailRef = useRef(null);
//   const passRef = useRef(null);
//   const loginBtnRef = useRef(null);

//   const onChange = (key) => (e) => setForm({ ...form, [key]: e.currentTarget.value });

//   const focusNext = (ref) => {
//     setTimeout(() => ref?.current?.focus(), 0);
//   };

//   const handleKeyDown = (e, nextRef) => {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       if (nextRef) focusNext(nextRef);
//     }
//   };

//   const validate = () => {
//     if (!form.email || !form.password) return 'Please fill all fields';
//     if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Invalid email address';
//     if (form.password.length < 6) return 'Password must be at least 6 characters';
//     return '';
//   };

//   const handleLogin = () => {
//     const err = validate();
//     if (err) {
//       setError(err);
//       return;
//     }
//     setError('');
//     dispatch(loginUser({ email: form.email, password: form.password }));
//     setOk(true); // Open success popup
//   };

//   return (
//     <div
//       style={{
//         minHeight: '100vh',
//         display: 'grid',
//         placeItems: 'center',
//         padding: 24,
//         background:
//           'radial-gradient(1100px 650px at 5% 5%, #eef4ff 0%, transparent 60%), radial-gradient(900px 600px at 95% 10%, #ffe0ec 0%, transparent 55%), linear-gradient(180deg, #f9fbff 0%, #ffffff 100%)',
//       }}
//     >
//       <Paper
//         p={30}
//         radius={26}
//         style={{
//           width: 520,
//           background: 'rgba(255,255,255,0.78)',
//           backdropFilter: 'blur(12px)',
//           WebkitBackdropFilter: 'blur(12px)',
//           border: '1px solid rgba(255,255,255,0.7)',
//           boxShadow:
//             '0 28px 70px rgba(31,41,55,0.16), 0 10px 24px rgba(31,41,55,0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
//         }}
//       >
//         <div style={{ textAlign: 'center', marginBottom: 16 }}>
//           <Title order={2} style={{ letterSpacing: 0.3, marginBottom: 4 }}>
//             Login
//           </Title>
//           <Text size="sm" c="dimmed">
//             Sign in to your account
//           </Text>
//         </div>

//         <TextInput
//           label="Email"
//           placeholder="you@example.com"
//           value={form.email}
//           onChange={onChange('email')}
//           ref={emailRef}
//           onKeyDown={(e) => handleKeyDown(e, passRef)}
//           leftSection={<IconMail size={16} />}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         <TextInput
//           type="password"
//           label="Password"
//           placeholder="Enter your password"
//           value={form.password}
//           onChange={onChange('password')}
//           ref={passRef}
//           onKeyDown={(e) => {
//             if (e.key === 'Enter') {
//               e.preventDefault();
//               loginBtnRef.current?.click(); // Enter on last field -> submit
//             }
//           }}
//           leftSection={<IconLock size={16} />}
//           style={{ marginTop: 12 }}
//           styles={{
//             label: { fontWeight: 700, marginBottom: 6 },
//             input: {
//               height: 50,
//               borderRadius: 14,
//               borderColor: '#e6eaf2',
//               backgroundColor: '#ffffff',
//             },
//           }}
//         />

//         {error && (
//           <Text size="sm" c="red" style={{ marginTop: 8 }}>
//             {error}
//           </Text>
//         )}

//         <Button
//           ref={loginBtnRef}
//           fullWidth
//           onClick={handleLogin}
//           styles={{
//             root: {
//               height: 50,
//               width: '90%',
//               borderRadius: 5,
//               fontWeight: 800,
//               border: 'none',
//               cursor: 'pointer',
//               fontSize: 15,
//               marginTop: 16,
//               marginLeft: 30,
//               backgroundImage: 'linear-gradient(90deg, #126db8ff 0%, #08beb5ff 100%)',
//               boxShadow: '0 14px 28px rgba(18,184,134,0.32)',
//             },
//           }}
//         >
//           Sign In
//         </Button>
//         <div style={{ textAlign: 'center', marginTop: 12 }}>
//           <span>
//             Don't have an account?{' '}
//             <Anchor component={Link} to="/register" style={{ fontWeight: 700 }}>
//               Register
//             </Anchor>
//           </span>
//         </div>
//         <div style={{ textAlign: 'center', marginTop: 8 }}>
//           <Anchor component={Link} to="/forgot-password" style={{ fontWeight: 700, fontSize: 14 }}>
//             Forgot password?
//           </Anchor>
//         </div>
//       </Paper>

//       <CustomModal
//         opened={ok}
//         onClose={() => {
//           setOk(false);
//           nav('/dashboard'); // Adjust redirect based on your app's routing
//         }}
//         title="Success"
//         message="Successfully logged in!"
//         confirmText="Go to Dashboard"
//         onConfirm={() => {
//           setOk(false);
//           nav('/dashboard');
//         }}
//       />
//     </div>
//   );
// }


// // This code is a complete Register page component using Mantine UI and Redux for state management.
// // It includes form validation, success modal, and navigation to the login page after registration.
