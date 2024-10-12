import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material"



function App() {
  const ENDPOINT = "http://localhost:8080/getData"
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
    console.log(json);
    setResults(() => json);
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
        { Object.values(results)?.map(result => (
        <Paper elevation={4} sx={{ p: 2}} key={crypto.randomUUID()}>
          <Typography variant="h6" sx={{ p: 1 }}>{ result.Country }</Typography>
          <Typography>{ result.Year }</Typography>
          <Typography>{ result.EnergyType }</Typography>
        </Paper>
        ))}
    </Container>
  )
}
export default App;
