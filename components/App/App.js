import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material"



function App() {
  const ENDPOINT = "http://localhost:8080/first"
  const [ results, setResults ] = React.useState([]);
  const [ foo, setFoo ] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const url = new URL(ENDPOINT);
    url.searchParams.append("foo", foo);
    const response = await fetch(url, {
      method: "GET"
    });
    const json = await response.json();
    setResult(() => json);
  }

  return (
    <Container sx={{ bgcolor: 'lightgreen', height: '100vh'}}>
      <Box sx={{ p: 8 }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoFocus
            value={foo}
            onChange={(event) => {
              setFoo(() => event.target.value);
            }}
          />
        </form>
      </Box>
    </Container>
  )
}
export default App;
