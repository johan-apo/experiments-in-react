import { Anchor, Button } from "@mantine/core";
import Head from "next/head";

export default function FileDownloadEvent() {
  return (
    <>
      <Head>
        <title>File download event</title>
      </Head>
      <Anchor href="/dummy.pdf" rel="noopener noreferrer" download>
        <Button>Download dummy PDF</Button>
      </Anchor>
    </>
  );
}
