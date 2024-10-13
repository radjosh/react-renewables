import React from "react";
import { Container, Box, Typography, Paper, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const ENDPOINT = "http://localhost:8080/query"
  const [ results, setResults ] = React.useState([]);
  const theme = createTheme({
    palette: {
      primary: {
        main: '#283618',
      },
      secondary: {
        main: '#606c38',
      },
    },
  });

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

// 606c38
// 283618
// fefae0

    <Container sx={{ height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="secondary" onClick={handleSubmit}>get data</Button>
      </ThemeProvider>

      { Object.values(results)?.map(result => (
      <Paper elevation={4} sx={{ bgcolor: 'beige' }} key={crypto.randomUUID()}>
        <Box sx={{ m: 1 }}>
        <Typography variant="h6">{ result.Country }</Typography>
        <Typography>{ result.Year }</Typography>
        <Typography>{ result.EnergyType }</Typography>
        </Box>
      </Paper>
      ))}
    </Container>
  )
}
export default App;
