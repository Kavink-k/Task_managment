// import { useEffect, useState } from 'react';
// import { Text } from '@mantine/core'; // only for small text; can remove if you want pure HTML
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, Link } from 'react-router-dom';
// import { loginSuccess } from '../redux/slices/authSlice';
// import { lsGet } from '../utils/storage';
// import CustomModal from '../components/CustomModal';

// const styles = {
//   page: {
//     minHeight: '100vh',
//     display: 'grid',
//     placeItems: 'center',
//     background:
//       'radial-gradient(1200px 700px at 10% 0%, #e9f5ff 0%, transparent 60%), radial-gradient(900px 600px at 90% 10%, #ffe7ef 0%, transparent 55%), linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)',
//     padding: 16,
//   },
//   card: {
//     width: 460,
//     borderRadius:20,
//     padding: 38,
//     background: 'rgba(255, 255, 255, 0.7)',
//     backdropFilter: 'blur(10px)',
//     WebkitBackdropFilter: 'blur(10px)',
//     border: '1px solid rgba(255,255,255,0.6)',
//     boxShadow: '0 25px 60px rgba(31, 41, 55, 0.15)',
//   },
//   title: { margin: 0, textAlign: 'center', letterSpacing: 0.3 },
//   subtitle: { textAlign: 'center', marginTop: 6, color: '#6b7280' },
//   label: { fontSize: 13, fontWeight: 600, marginBottom: 6 },
//   fieldWrap: { marginTop: 16 },
//   input: {
//     width: '100%',
//     height: 48,
//     borderRadius: 4,
//     border: '1px solid #e6eaf2',
//     padding: '0 16px',
//     outline: 'none',
//     fontSize: 14,
//     background: '#ffffff',
//     boxShadow: 'inset 0 1px 0 rgba(0,0,0,0.02)',
//   },
//   inputFocus: {
//     border: '1px solid #5c7cfa',
//     boxShadow: '0 0 0 4px rgba(92, 124, 250, 0.15)',
//   },
//   button: {
//     width: '100%',
//     height: 48,
//     borderRadius: 14,
//     border: 'none',
//     fontWeight: 700,
//     fontSize: 15,
//     cursor: 'pointer',
//     background: 'linear-gradient(90deg, #4c6ef5 0%, #6ea8fe 100%)',
//     color: '#fff',
//     marginTop: 18,
//     boxShadow: '0 10px 22px rgba(76, 110, 245, 0.35)',
//     transition: 'transform 120ms ease, box-shadow 120ms ease',
//   },
//   buttonHover: { transform: 'translateY(-1px)', boxShadow: '0 14px 28px rgba(76,110,245,0.45)' },
//   foot: { marginTop: 14, textAlign: 'center', fontSize: 14 },
//   link: { fontWeight: 700, textDecoration: 'none', color: '#4c6ef5' },
// };

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [popup, setPopup] = useState({ open: false, msg: '' });
//   const [hover, setHover] = useState(false);
//   const [focus, setFocus] = useState({ email: false, password: false });

//   const registered = useSelector(s => s.users.registered);
//   const currentUser = useSelector(s => s.auth.currentUser);
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   useEffect(() => {
//     if (currentUser) nav('/app/dashboard', { replace: true });
//   }, [currentUser, nav]);

//   const handleLogin = () => {
//     const regs = registered?.length ? registered : lsGet('registered_users', []);
//     const found = regs.find(u => u.email === email && u.password === password);

//     if (found) {
//       dispatch(loginSuccess({ email }));
//       nav('/app/dashboard');
//     } else {
//       setPopup({ open: true, msg: 'Invalid username or password' });
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Welcome Back</h2>
//         <p style={styles.subtitle}>Login to continue</p>

//         <div style={{ ...styles.fieldWrap, marginTop: 10 }}>
//           <div style={styles.label}>Email</div>
//           <input
//             type="email"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onFocus={() => setFocus(f => ({ ...f, email: true }))}
//             onBlur={() => setFocus(f => ({ ...f, email: false }))}
//             style={{ ...styles.input, ...(focus.email ? styles.inputFocus : {}) }}
//           />
//         </div>

//         <div style={styles.fieldWrap}>
//           <div style={styles.label}>Password</div>
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onFocus={() => setFocus(f => ({ ...f, password: true }))}
//             onBlur={() => setFocus(f => ({ ...f, password: false }))}
//             style={{ ...styles.input, ...(focus.password ? styles.inputFocus : {}) }}
//           />
//         </div>

//         <button
//           onMouseEnter={() => setHover(true)}
//           onMouseLeave={() => setHover(false)}
//           onClick={handleLogin}
//           style={{ ...styles.button, ...(hover ? styles.buttonHover : {}) }}
//         >
//           Login
//         </button>

//         <div style={styles.foot}>
//           <Text size="sm">
//             Don’t have an account?{' '}
//             <Link to="/register" style={styles.link}>Register</Link>
//           </Text>
//         </div>
//       </div>

//       <CustomModal
//         opened={popup.open}
//         onClose={() => setPopup({ open: false, msg: '' })}
//         title="Login Failed"
//         message={popup.msg}
//         cancelText="Close"
//       />
//     </div>
//   );
// }

/////////////////////////////
// import { useEffect, useState } from "react";
// import {
//   Paper,
//   TextInput,
//   Button,
//   Text,
//   Anchor,
//   Title,
//   Group,
//   Modal,
  
// } from "@mantine/core";
// import { IconMail, IconLock } from "@tabler/icons-react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, Link } from "react-router-dom";
// import { loginSuccess } from "../redux/slices/authSlice";
// import { lsGet } from "../utils/storage";
// import { useDisclosure } from '@mantine/hooks';


// // import CustomModal from "../components/CustomModal";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [popup, setPopup] = useState({ open: false, msg: "" });
//   const [hover, setHover] = useState(false);
// //pop
//   const [opened, { open, close }] = useDisclosure(false);

//   //
//   const registered = useSelector((s) => s.users.registered);
//   const currentUser = useSelector((s) => s.auth.currentUser);
//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   useEffect(() => {
//     if (currentUser) nav("/app/dashboard", { replace: true });
//   }, [currentUser, nav]);

//   const handleLogin = () => {
//     const regs = registered?.length
//       ? registered
//       : lsGet("registered_users", []);
//     const found = regs.find(
//       (u) => u.email === email && u.password === password
//     );
//     if (found) {
//       dispatch(loginSuccess({ email }));
//       nav("/app/dashboard");
//     } else {
//       setPopup({ open: true, msg: "Invalid username or password" });
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         display: "grid",
//         placeItems: "center",
//         padding: 24,
//         background:
//           "radial-gradient(1200px 700px at 10% 0%, #e9f5ff 0%, transparent 60%), radial-gradient(900px 600px at 90% 10%, #ffe0ea 0%, transparent 55%), linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)",
//       }}
//     >
//       <Paper
//         p={28}
//         radius={28}
//         style={{
//           width: 420,
//           background: "rgba(255,255,255,0.75)",
//           backdropFilter: "blur(14px)",
//           WebkitBackdropFilter: "blur(14px)",
//           borderRadius: 20,
//           border: "1px solid rgba(255,255,255,0.7)",
//           boxShadow:
//             "0 30px 80px rgba(31,41,55,0.18), 0 8px 24px rgba(31,41,55,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
//         }}
//       >
//         <div style={{ textAlign: "center", marginBottom: 18 }}>
//           <Title order={2} style={{ letterSpacing: 0.4, marginBottom: 4 }}>
//             Welcome Back
//           </Title>
//           <Text size="sm" c="dimmed">
//             Login to continue
//           </Text>
//         </div>

//         <TextInput
//           label="Email"
//           placeholder="you@example.com"
//           value={email}
//           onChange={(e) => setEmail(e.currentTarget.value)}
//           withAsterisk
//           styles={{
//             label: {
//               fontWeight: 700,
//               fontSize: 18,
//               marginLeft: 10,
//               marginBottom: 6,
//             },
//             input: {
//               height: 42,
//               width: "90%",
//               marginTop: 15,
//               textAlign: "left",
//               outline: "none",
//               borderRadius: 5,
//               border: "none",
//               fontSize: 15,
//               marginLeft: 10,
//               backgroundColor: "#ffffff",
//               boxShadow: "0 0 5px gray",
//               transition: "box-shadow 120ms, border-color 120ms",
//             },
//             section: { color: "#64748b" },
//           }}
//         />
//         <div style={{ paddingTop: 16 }}>
//         <TextInput
//           type="password"
//           label="Password"
//           placeholder="Enter password"
//           value={password}
//           onChange={(e) => setPassword(e.currentTarget.value)}
//           styles={{
//             label: {
//               fontWeight: 700,
//               fontSize: 18,
//               marginLeft: 10,
//             },
//             input: {
//               height: 42,
//               width: "90%",
//               outline: "none",
//               fontSize: 15,
//               borderRadius: 5,
//               border: "none",
//                             marginTop: 10,
//               marginLeft: 10,

//               backgroundColor: "#ffffff",
//               boxShadow: "0 0 5px gray",
//               transition: "box-shadow 120ms, border-color 120ms",
//             },
//             section: { color: "#64748b" },
//           }}
//           withAsterisk
//         /></div>
//         <div style={{ paddingLeft: "20px " }}>
//           <Button
//             fullWidth
//             onClick={handleLogin}
//             onMouseEnter={() => setHover(true)}
//             onMouseLeave={() => setHover(false)}
//             styles={{
//               root: {
//                 height: 52,
//                 width: "95%",
//                 border: "none",
//                 borderRadius: 12,
//                 fontWeight: 800,
//                 fontSize: 16,
//                 marginTop: 20,
//                 backgroundImage:
//                   "linear-gradient(90deg, #4c6ef5 0%, #6ea8fe 100%)",
//                 boxShadow: hover
//                   ? "0 18px 32px rgba(76,110,245,0.45), 0 6px 14px rgba(76,110,245,0.25)"
//                   : "0 12px 24px rgba(76,110,245,0.35), 0 4px 10px rgba(76,110,245,0.18)",
//                 transform: hover ? "translateY(-1px)" : "none",
//                 transition: "transform 120ms ease, box-shadow 120ms ease",
//               },
//             }}
//           >
//             Login
//           </Button>
//         </div>

//         <Group justify="center" style={{ marginTop: 16 }}>
//           <Text style={{ display: "inline-block" }} c="">
//             Don’t have an account?
//           </Text>
//           <Anchor component={Link} to="/register" style={{ fontWeight: 700 }}>
//             Register
//           </Anchor>
//         </Group>
//       </Paper>

//       <Modal.Root opened={opened} onClose={close}>
//         <Modal.Overlay />
//         <Modal.Content>
//           <Modal.Header>
//             <Modal.Title>Modal title</Modal.Title>
//             <Modal.CloseButton />
//           </Modal.Header>
//           <Modal.Body>Modal content</Modal.Body>
//         </Modal.Content>
//       </Modal.Root>

//       <Button variant="default" onClick={open}>
//         Open modal
//       </Button>

     
//     </div>
//   );
// }


///////////////////////////////////////////////////////////
import { useEffect, useState } from "react";
import {
  Paper,
  TextInput,
  Button,
  Text,
  Anchor,
  Title,
  Group,
  Modal,
} from "@mantine/core";
import { IconMail, IconLock } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginSuccess } from "../redux/slices/authSlice";
import { lsGet } from "../utils/storage";
import { useDisclosure } from '@mantine/hooks';

const  Login=() =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hover, setHover] = useState(false);

  const [modalMessage, setModalMessage] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const registered = useSelector((s) => s.users.registered);
  const currentUser = useSelector((s) => s.auth.currentUser);
  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    if (currentUser) nav("/app/dashboard", { replace: true });
  }, [currentUser, nav]);

  const handleLogin = () => {
    const regs = registered?.length
      ? registered
      : lsGet("registered_users", []);
    const found = regs.find(
      (u) => u.email === email && u.password === password                                                 
    );
    if (found) {
      dispatch(loginSuccess({ email }));
      nav("/app/dashboard");
    } else {
      setModalMessage("Invalid username or password");
      open();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        background:
          "radial-gradient(1200px 700px at 10% 0%, #e9f5ff 0%, transparent 60%), radial-gradient(900px 600px at 90% 10%, #ffe0ea 0%, transparent 55%), linear-gradient(180deg, #f7fbff 0%, #ffffff 100%)",
      }}
    >
      <Paper
        p={28}
        radius={28}
        style={{
          width: 420,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.7)",
          boxShadow:
            "0 30px 80px rgba(31,41,55,0.18), 0 8px 24px rgba(31,41,55,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <Title order={2} style={{ letterSpacing: 0.4, marginBottom: 4 }}>
            Welcome Back
          </Title>
          <Text size="sm" c="dimmed">
            Login to continue
          </Text>
        </div>

        <TextInput
          label="Email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          withAsterisk
          styles={{
            label: {
              fontWeight: 700,
              fontSize: 18,
              marginLeft: 10,
              marginBottom: 6,
            },
            input: {
              height: 42,
              width: "90%",
              marginTop: 15,
              textAlign: "left",
              outline: "none",
              borderRadius: 5,
              border: "none",
              fontSize: 15,
              marginLeft: 10,
              backgroundColor: "#ffffff",
              boxShadow: "0 0 5px gray",
              transition: "box-shadow 120ms, border-color 120ms",
            },
            section: { color: "#64748b" },
          }}
        />

        <div style={{ paddingTop: 16 }}>
          <TextInput
            type="password"
            label="Password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            styles={{
              label: {
                fontWeight: 700,
                fontSize: 18,
                marginLeft: 10,
              },
              input: {
                height: 42,
                width: "90%",
                outline: "none",
                fontSize: 15,
                borderRadius: 5,
                border: "none",
                marginTop: 10,
                marginLeft: 10,
                backgroundColor: "#ffffff",
                boxShadow: "0 0 5px gray",
                transition: "box-shadow 120ms, border-color 120ms",
              },
              section: { color: "#64748b" },
            }}
            withAsterisk
          />
        </div>

        <div style={{ paddingLeft: "20px " }}>
          <Button
            fullWidth
            onClick={handleLogin}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            styles={{
              root: {
                height: 52,
                width: "95%",
                border: "none",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                marginTop: 20,
                backgroundImage:
                  "linear-gradient(90deg, #4c6ef5 0%, #6ea8fe 100%)",
                boxShadow: hover
                  ? "0 18px 32px rgba(76,110,245,0.45), 0 6px 14px rgba(76,110,245,0.25)"
                  : "0 12px 24px rgba(76,110,245,0.35), 0 4px 10px rgba(76,110,245,0.18)",
                transform: hover ? "translateY(-1px)" : "none",
                transition: "transform 120ms ease, box-shadow 120ms ease",
              },
            }}
          >
            Login
          </Button>
        </div>

        <Group justify="center" style={{ marginTop: 16 }}>
          <Text style={{ display: "inline-block" }} c="">
            Don’t have an account?
          </Text>
          <Anchor component={Link} to="/register" style={{ fontWeight: 700 }}>
            Register
          </Anchor>
        </Group>
      </Paper>

      <Modal opened={opened} onClose={close} centered withCloseButton>
        <Title order={4} style={{ marginBottom: 12 }}>
          Login Error
        </Title>
        <Text>{modalMessage}</Text>
      </Modal>
    </div>
  );
}

export default Login;