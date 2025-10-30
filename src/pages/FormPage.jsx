import { useEffect, useState } from 'react';
import { TextInput, NumberInput, Radio, Textarea, Button, Group } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { addRow, updateRow, setEditDraft } from '../redux/slices/usersSlice';
import { useNavigate } from 'react-router-dom';

const genders = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

export default function FormPage() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const edit = useSelector(s => s.users.editDraft);

  const [form, setForm] = useState({
    id: undefined,
    firstName: '',
    lastName: '',
    age: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    if (edit) setForm(edit);
  }, [edit]);

  const onChange = (key) => (e) => setForm({ ...form, [key]: e.currentTarget.value });

  const validate = () => {
    if (!form.firstName || !form.lastName || !form.age || !form.dob || !form.gender || !form.phone || !form.email || !form.address) return 'Please fill all fields';
    if (!/^\d{1,3}$/.test(String(form.age)) || Number(form.age) <= 0) return 'Age must be a positive number';
    if (!/^\d{10}$/.test(form.phone)) return 'Phone must be exactly 10 digits';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Invalid email';
    return '';
  };

  const handleSubmit = () => {
    const err = validate();
    // if (err) { alert(err); return; } // You can change this to custom modal if you want
    if (form.id) {
      dispatch(updateRow(form));
    } else {
      const { id, ...payload } = form;
      dispatch(addRow(payload));
    }
    dispatch(setEditDraft(null));
    nav('/app/dashboard');
  };

  const handleCancel = () => {
    dispatch(setEditDraft(null));
    nav('/app/dashboard');
  };

  return (
    <div>
      <h3 style={{ marginTop: 0 }}>{form.id ? 'Edit Entry' : 'New Entry'}</h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <TextInput label="First Name" value={form.firstName} onChange={onChange('firstName')} styles={{ input: { borderradius: 5 } }} />
        <TextInput label="Last Name" value={form.lastName} onChange={onChange('lastName')} styles={{ input: { borderradius: 5 } }} />

        <NumberInput label="Age" value={form.age} onChange={(v) => setForm({ ...form, age: v || '' })} styles={{ input: { borderradius: 5 } }} />

        <TextInput label="Date of Birth (YYYY-MM-DD)" placeholder="1999-01-31" value={form.dob} onChange={onChange('dob')} styles={{ input: { borderradius: 5 } }} />

        {/* <Select label="Gender" data={genders} value={form.gender} onChange={(v) => setForm({ ...form, gender: v || '' })}  styles={{ input: { borderradius: 5 } }} /> */}
<Radio.Group
  label="Gender"
  value={form.gender}
  onChange={(v) => setForm({ ...form, gender: v })}
>
  <Group>
    <Radio value="Male" label="Male" />
    <Radio value="Female" label="Female" />
    <Radio value="Other" label="Other" />
  </Group>
</Radio.Group>        <TextInput label="Phone (10 digits)" value={form.phone} onChange={onChange('phone')} styles={{ input: { borderradius: 5 } }} />

        <TextInput label="Email" value={form.email} onChange={onChange('email')} styles={{ input: { borderradius: 5 } }} />
        <Textarea label="Address" minRows={2} value={form.address} onChange={onChange('address')} styles={{ input: { borderradius: 5 } }} />
      </div>

      <Group justify="flex-end" style={{ marginTop: 16 }}>
        <Button variant="default" onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>{form.id ? 'Save Changes' : 'Submit'}</Button>
      </Group>
    </div>
  );
}
