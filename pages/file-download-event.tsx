import { Anchor, Button } from "@mantine/core";

export default function FileDownloadEvent() {
  return (
    <Anchor href="/dummy.pdf" rel="noopener noreferrer" download>
      <Button>Download dummy PDF</Button>
    </Anchor>
  );
}
