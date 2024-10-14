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
      { Object.values(results)?.map(result => (
        <Paper elevation={3}>
          <Box sx={{ 
            borderRadius: 8,
            flex: "1 1 calc(33.33% - 16px)",
            minWidth: '300px',
            p: 1,
            bgcolor: 'beige',
          }} >
          <Typography variant="h6" sx={{ textAlign: 'left' }}>{ result.Country }{" "}{ result.Year }{" "}{ result.EnergyType }</Typography>
          { Object.entries(result).map(([k, v]) => 
          <Typography key={crypto.randomUUID} sx={{ textAlign: 'left', fontSize: 'xx-small'}}>
            {k}: {v}
          </Typography>
          )}
          {/* <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ProductionGWh: { result.ProductionGWh }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>InstalledCapacityMW: { result.InstalledCapacityMW }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>InvestmentsUSD: { result.InvestmentsUSD }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>Population: { result.Population }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>GDP: { result.GDP }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyConsumption: { result.EnergyConsumption }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyExports: { result.EnergyExports }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyImports: { result.EnergyImports }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>CO2Emissions: { result.CO2Emissions }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RenewableEnergyJobs: { result.RenewableEnergyJobs }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>GovernmentPolicies: { result.GovernmentPolicies }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RnDExpenditure: { result.RnDExpenditure }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RenewableEnergyTargets: { result.RenewableEnergyTargets }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>AverageAnnualTemperature: { result.AverageAnnualTemperature }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>AnnualRainfall: { result.AnnualRainfall }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>SolarIrradiance: { result.SolarIrradiance }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>WindSpeed: { result.WindSpeed }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>HydroPotential: { result.HydroPotential }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>GeothermalPotential: { result.GeothermalPotential }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>BiomassAvailability: { result.BiomassAvailability }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyStorageCapacity: { result.EnergyStorageCapacity }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>GridIntegrationCapability: { result.GridIntegrationCapability }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ElectricityPrices: { result.ElectricityPrices }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergySubsidies: { result.EnergySubsidies }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>InternationalAidForRenewables: { result.InternationalAidForRenewables }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>PublicAwareness: { result.PublicAwareness }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyEfficiencyPrograms: { result.EnergyEfficiencyPrograms }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>UrbanizationRate: { result.UrbanizationRate }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>IndustrializationRate: { result.IndustrializationRate }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergyMarketLiberalization: { result.EnergyMarketLiberalization }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RenewableEnergyPatents: { result.RenewableEnergyPatents }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EducationalLevel: { result.EducationalLevel }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>TechnologyTransferAgreements: { result.TechnologyTransferAgreements }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RenewableEnergyEducationPrograms: { result.RenewableEnergyEducationPrograms }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>LocalManufacturingCapacity: { result.LocalManufacturingCapacity }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ImportTariffsOnEnergyEquipment: { result.ImportTariffsOnEnergyEquipment }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ExportIncentivesForEnergyEquipment: { result.ExportIncentivesForEnergyEquipment }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>NaturalDisasters: { result.NaturalDisasters }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>PoliticalStability: { result.PoliticalStability }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>CorruptionPerceptionIndex: { result.CorruptionPerceptionIndex }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RegulatoryQuality: { result.RegulatoryQuality }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RuleOfLaw: { result.RuleOfLaw }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ControlOfCorruption: { result.ControlOfCorruption }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EconomicFreedomIndex: { result.EconomicFreedomIndex }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EaseOFDoingBusiness: { result.EaseOFDoingBusiness }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>InnovationIndex: { result.InnovationIndex }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>NumberOfResearchInstitutions: { result.NumberOfResearchInstitutions }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>NumberOFRenewableEnergyConferences: { result.NumberOFRenewableEnergyConferences }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>NumberOfRenewableEnergyPublications: { result.NumberOfRenewableEnergyPublications }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>EnergySectorWorkforce: { result.EnergySectorWorkforce }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>ProportionOfEnergyFromRenewables: { result.ProportionOfEnergyFromRenewables }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>PublicPrivatePartnershipsInEnergy: { result.PublicPrivatePartnershipsInEnergy }</Typography>
          <Typography sx={{ textAlign: 'left', fontSize: 'xx-small'}}>RegionalRenewableEnergyCooperation: { result.RegionalRenewableEnergyCooperation }</Typography> */}
          </Box>
        </Paper>
     ))}
    </Box>
    </Container>
  )
}
export default App;
