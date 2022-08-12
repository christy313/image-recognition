import { useState } from "react";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

export default function InputImage() {
  const [imageUrl, setImageUrl] = useState(
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
  );

  const handleChangeImageUrl = (e) => {
    setImageUrl(e.target.value);
  };
  return (
    <div>
      <FormControl
        onChange={handleChangeImageUrl}
        className="mb-3"
        value={imageUrl}
        placeholder="Image URL"
      />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
