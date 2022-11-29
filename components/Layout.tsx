import { Anchor, Group } from "@mantine/core";
import Link from "next/link";
import { Url } from "url";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}

function Navbar() {
  return (
    <Group
      position="apart"
      sx={(theme) => ({
        borderBottom: `solid 1px ${theme.colors.dark[5]}`,
        padding: `${theme.spacing.md}px ${theme.spacing.xl * 4}px`,
      })}
    >
      <Anchor component={Link} href="/">
        Experiments
      </Anchor>
      <Group>
        <Anchor component={Link} href="/threejs">
          ThreeJS
        </Anchor>
        <Anchor component={Link} href="/about">
          About
        </Anchor>
      </Group>
    </Group>
  );
}
