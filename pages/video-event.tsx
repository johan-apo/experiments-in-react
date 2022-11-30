import { Container, Title } from "@mantine/core";

export default function Videos() {
  return (
    <>
      <RenderVideo
        component={
          <YouTubeIframe src="https://www.youtube.com/embed/nTFEUsudhfs?enablejsapi=1" />
        }
        title="YouTube iframe"
      />
      <RenderVideo component={<StaticVideo />} title="Static video" />
    </>
  );
}

function RenderVideo({
  component,
  title,
}: {
  component: JSX.Element;
  title: string;
}) {
  return (
    <Container>
      <Title order={3}>{title}</Title>
      {component}
    </Container>
  );
}

function YouTubeIframe({ src }: { src: string }) {
  return (
    <iframe
      width="560"
      height="315"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

function StaticVideo() {
  return (
    <video width="320" height="240" controls>
      <source src="/movie.mp4" type="video/mp4" />
      Your browser doesn&apos;t support the video tag
    </video>
  );
}
