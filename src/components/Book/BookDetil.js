import axios from "axios";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetil = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
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
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      {inputs && (
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
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            />
            <Button variant="contained" type="submit" marginTop="2px">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetil;
