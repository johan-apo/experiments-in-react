import Head from "next/head";
import { RefObject, useEffect, useLayoutEffect, useRef } from "react";
import {
  AxesHelper,
  BoxGeometry,
  ColorRepresentation,
  DirectionalLight,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

function displayScene(ref: RefObject<HTMLCanvasElement>) {
  const sizes = {
    width: 600,
    height: 400,
  };

  const renderer = new WebGLRenderer({ canvas: ref.current! });

  // renderer.setSize(sizes.width, sizes.height);

  const fov = 75,
    // aspect = sizes.width / sizes.height,
    aspect = 2,
    near = 0.1,
    far = 5;

  const camera = new PerspectiveCamera(fov, aspect, near, far);

  camera.position.z = 2;

  const scene = new Scene();

  const axesHelper = new AxesHelper(1);
  scene.add(axesHelper);

  const boxWidth = 1,
    boxHeight = 1,
    boxDepth = 1;
  const geometry = new BoxGeometry(boxWidth, boxHeight, boxDepth);

  const color = 0xffffff,
    intensity = 1,
    light = new DirectionalLight(color, intensity);

  light.position.set(-1, 2, 4);

  scene.add(light);

  const makeInstance = (
    geometry: BoxGeometry,
    color: ColorRepresentation,
    x: number
  ) => {
    const material = new MeshPhongMaterial({ color });

    const cube = new Mesh(geometry, material);
    cube.position.x = x;
    scene.add(cube);

    return cube;
  };

  const cubes = [
    makeInstance(geometry, "#44aa88", 0),
    makeInstance(geometry, "#8844aa", -2),
    makeInstance(geometry, "#aa8844", 2),
  ];

  const render = (time: number): void => {
    time *= 0.001;

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.5;
      const rot = time * speed;
      cube.rotation.y = Math.PI / 4;
      // cube.rotation.x = rot;
      // cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      displayScene(canvasRef);
    }
  }, []);

  return (
    <>
      <Head>
        <title>ThreeJS</title>
      </Head>
      <canvas ref={canvasRef} />
    </>
  );
}
