import { useState } from "react";
import InputImage from "./InputImage";
import { Container, Stack } from "react-bootstrap";
import Output from "./Output";

export default function App() {
  const [outputs, setOutputs] = useState([]);
  const [imageToDetect, setImageToDetect] = useState("");

  return (
    <div>
      <Container>
        <div className="mt-3" />
        <Stack gap={2}>
          <InputImage />
          <Output outputs={outputs} imageToDetect={imageToDetect} />
        </Stack>
      </Container>
    </div>
  );
}
