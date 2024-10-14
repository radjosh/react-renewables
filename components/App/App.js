import React from "react";
import { Container, Card, Box, Typography, Paper, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const ENDPOINT = "http://localhost:8080/query"
  const [ results, setResults ] = React.useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const url = new URL(ENDPOINT);
    const response = await fetch(url, {
      method: "GET"
    });
    const json = await response.json();
    console.log(json);
    setResults(() => json);
  }

  return (

    <Container sx={{ height: '100vh' }}>
        <Button variant="contained" color="primary" sx={{ my: 2}}onClick={handleSubmit}>get data</Button>

    <Box sx={{ 
      display: "flex",
      flexWrap: "wrap",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "space-around",
      gap: 4,
      }} 
    >
      { Object.values(results)?.map(result => {
        const compositeKey = `${result.Country}-${result.Year}-${result.EnergyType}` 
        return (
        <Paper key={compositeKey} elevation={3}>
          <Box sx={{ 
            borderRadius: 8,
            flex: "1 1 calc(33.33% - 16px)",
            minWidth: '300px',
            p: 1,
            bgcolor: 'beige',
          }} >
          <Typography variant="h6" sx={{ textAlign: 'left' }}>{ result.Country }{" "}{ result.Year }{" "}{ result.EnergyType }</Typography>
          { Object.entries(result).map(([k, v]) => 
            <Typography key={`${k}-${v}`} sx={{ textAlign: 'left', fontSize: 'xx-small'}}>
              {k}: {v}
            </Typography>
          )}
          </Box>
        </Paper>
      )})}
    </Box>
    </Container>
  )
}
export default App;
