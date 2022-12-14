import { useState } from "react";
import axios from "axios";
import {
  FormControl,
  Button,
  ButtonGroup,
  Form,
  Stack,
  ToggleButton,
} from "react-bootstrap";

const inputOptions = [
  {
    name: "Image URL",
    value: "imageUrl",
  },
  {
    name: "Upload Image",
    value: "uploadImage",
  },
];

export default function InputImage(props) {
  const { setOutputs, setImageToDetect } = props;
  const [inputOption, setInputOption] = useState("imageUrl");
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
  );

  const [fileObj, setFileObj] = useState(null);

  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  const detectImage = () => {
    setOutputs([]);
    setImageToDetect(imageUrl);
    axios
      .post("/detect", {
        imageUrl: imageUrl,
      })
      .then((res) => {
        setOutputs(res.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const detectImageByUpload = () => {
    setOutputs([]);
    const formData = new FormData();
    formData.append("file", fileObj);
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setImageToDetect(reader.result);
    });

    if (fileObj) {
      reader.readAsDataURL(fileObj);
    }

    axios
      .post("/detect/upload", formData)
      .then((res) => {
        setOutputs(res.data.results);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleFileFormControlOnChange = (e) => {
    if (e.target.files.length) {
      setFileObj(e.target.files[0]);
    }
  };

  return (
    <Stack gap={3}>
      <ButtonGroup>
        {inputOptions.map((inputOption) => {
          return (
            <ToggleButton
              key={inputOption.value}
              checked={inputOption === inputOption.value}
              value={inputOption.value}
              type="radio"
              variant={
                inputOption === inputOption.value
                  ? "outline-primary"
                  : "outline-secondary"
              }
              onClick={(e) => {
                setInputOption(inputOption.value);
              }}
            >
              {inputOption.name}
            </ToggleButton>
          );
        })}
      </ButtonGroup>
      {inputOption === "imageUrl" ? (
        <div>
          <FormControl
            onChange={handleChangeImageUrl}
            className="mb-3"
            value={imageUrl}
            placeholder="Image URL"
          />
          <Button onClick={detectImage} variant="primary">
            Submit
          </Button>
        </div>
      ) : (
        <div>
          <Form.Group controlId="file" className="mb-3">
            <Form.Control
              type="file"
              onChange={handleFileFormControlOnChange}
            />
          </Form.Group>
          <Button onClick={detectImageByUpload}>Submit</Button>
        </div>
      )}
    </Stack>
  );
}
