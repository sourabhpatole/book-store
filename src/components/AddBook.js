import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",

    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "Value", e.target.value);
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={5}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          value={inputs.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="name"
        ></TextField>
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          value={inputs.author}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="author"
        ></TextField>
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          value={inputs.description}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="description"
        ></TextField>
        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          value={inputs.price}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        ></TextField>
        <FormLabel>Image</FormLabel>
        <TextField
          margin="normal"
          value={inputs.image}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button variant="contained" type="submit" marginTop="2px">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
