import { Modal, Text, Button, Group } from "@mantine/core";

export default function CustomModal({ opened, onClose, title, message, cancelText }) {
  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title={<Text style={{ fontWeight: 700, fontSize: 22 }}>{title}</Text>}
      centered
      withCloseButton={false}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 4,
      }}
      radius={20}
      size="sm"
      styles={{
        content: {
          borderRadius: 18,
          boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
          padding: 24,
          background: "#fff",
        },
        header: { marginBottom: 10 },
        body: { paddingTop: 0 },
      }}
    >
      <Text style={{ fontSize: 16, color: "#333", marginBottom: 20 }}>{message}</Text>
      <Group position="center">
        <Button
          onClick={onClose}
          style={{
            backgroundColor: "#4c6ef5",
            fontWeight: 600,
            padding: "8px 20px",
            borderRadius: 10,
            fontSize: 14,
          }}
        >
          {cancelText || "Close"}
        </Button>
      </Group>
    </Modal>
  );
}
