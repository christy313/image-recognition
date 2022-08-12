import { useState } from "react";
import InputImage from "./InputImage";
import { Container, Stack, Navbar } from "react-bootstrap";
import Output from "./Output";
import { MdOutlineImageSearch } from "react-icons/md";

export default function App() {
  const [outputs, setOutputs] = useState([]);
  const [imageToDetect, setImageToDetect] = useState("");

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand style={{ display: "flex", alignItems: "center" }}>
          <MdOutlineImageSearch
            style={{ marginLeft: "12px", marginRight: "8px" }}
          />
          Image Recognition
        </Navbar.Brand>
      </Navbar>
      <Container>
        <div className="mt-3" />
        <Stack gap={2}>
          <InputImage
            setOutputs={setOutputs}
            setImageToDetect={setImageToDetect}
          />
          <Output outputs={outputs} imageToDetect={imageToDetect} />
        </Stack>
      </Container>
    </div>
  );
}
