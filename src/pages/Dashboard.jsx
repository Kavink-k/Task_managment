import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { setEditDraft, deleteRow } from '../redux/slices/usersSlice';
import { useState } from 'react';
import CustomModal from '../components/CustomModal';

export default function Dashboard() {
  const rows = useSelector(s => s.users.rows);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [del, setDel] = useState({ open: false, id: null });

  if (!rows || rows.length === 0) {
    return <Text c="dimmed" style={{ padding: 8 }}>No data stored</Text>;
  }

  return (
    <>
      <Table striped highlightOnHover withTableBorder withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            <Table.Th>Age</Table.Th>
            <Table.Th>DOB</Table.Th>
            <Table.Th>Gender</Table.Th>
            <Table.Th>Phone</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Address</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((r) => (
            <Table.Tr key={r.id}>
              <Table.Td>{r.firstName}</Table.Td>
              <Table.Td>{r.lastName}</Table.Td>
              <Table.Td>{r.age}</Table.Td>
              <Table.Td>{r.dob}</Table.Td>
              <Table.Td>{r.gender}</Table.Td>
              <Table.Td>{r.phone}</Table.Td>
              <Table.Td>{r.email}</Table.Td>
              <Table.Td>{r.address}</Table.Td>
              <Table.Td>
                <Button size="xs" onClick={() => { dispatch(setEditDraft(r)); nav('/app/form'); }} style={{ marginRight: 8 }}>
                  Edit
                </Button>
                <Button size="xs" variant="outline" color="red" onClick={() => setDel({ open: true, id: r.id })}>
                  Delete
                </Button>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <CustomModal
        opened={del.open}
        onClose={() => setDel({ open: false, id: null })}
        title="Confirm Delete"
        message="Are you sure you want to delete this row?"
        cancelText="Cancel"
        confirmText="Delete"
        onConfirm={() => dispatch(deleteRow(del.id))}
      />
    </>
  );
}
