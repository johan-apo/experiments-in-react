import { Anchor, Container, Group } from "@mantine/core";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Navbar />
      <Container>{children}</Container>
    </Container>
  );
}

function Navbar() {
  return (
    <Group
      position="apart"
      align="center"
      sx={(theme) => ({
        borderBottom: `solid 1px ${theme.colors.dark[5]}`,
        padding: `${theme.spacing.md}px 0`,
        marginBottom: theme.spacing.xl,
      })}
    >
      <Anchor
        component={Link}
        href="/"
        weight="bold"
        color="teal"
        size="lg"
        sx={() => ({
          letterSpacing: 2,
        })}
      >
        Experiments
      </Anchor>
      <Group>
        <Anchor component={Link} href="/threejs">
          ThreeJS
        </Anchor>
        <Anchor component={Link} href="/scrolling-event">
          Scrolling event
        </Anchor>
        <Anchor component={Link} href="/video-event">
          Video event
        </Anchor>
        <Anchor component={Link} href="/file-download-event">
          File download event
        </Anchor>
        <Anchor href="https://www.google.com">
          Outbound event (to Google)
        </Anchor>
      </Group>
    </Group>
  );
}
