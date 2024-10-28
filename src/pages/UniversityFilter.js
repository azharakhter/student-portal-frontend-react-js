import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Card, CardContent, Typography, Grid, Box } from '@mui/material'; // Importing Material-UI components
import universitiesIreland from './universitiesIreland'; // Importing universities data
import {filterUniversities } from "filter-json-data-azhar";
function UniversityFilter() {
  const [filter, setFilter] = useState('');
  const [maxTuition, setMaxTuition] = useState('');
  const [maxAccommodationCost, setMaxAccommodationCost] = useState('');
  const [courseFilter, setCourseFilter] = useState('');
  const [campusFacilitiesFilter, setCampusFacilitiesFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [filteredUniversities, setFilteredUniversities] = useState(universitiesIreland);

  const handleApplyFilters = () => {
    // Filter universities using the external library
    const filteredData = filterUniversities(
      universitiesIreland,
      filter,
      maxTuition,
      maxAccommodationCost,
      courseFilter,
      campusFacilitiesFilter,
      locationFilter
    );
    setFilteredUniversities(filteredData);
  };
  return (
    <><Box boxShadow={3} p={5} mb={4} >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Search by name"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            variant="outlined"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Max Tuition Fees"
            value={maxTuition}
            onChange={(e) => setMaxTuition(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="10000">Up to 10,000</MenuItem>
            <MenuItem value="15000">Up to 15,000</MenuItem>
            <MenuItem value="20000">Up to 20,000</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            select
            label="Max Accommodation Cost"
            value={maxAccommodationCost}
            onChange={(e) => setMaxAccommodationCost(e.target.value)}
            variant="outlined"
            fullWidth
          >
            <MenuItem value="">Any</MenuItem>
            <MenuItem value="500">Up to 500</MenuItem>
            <MenuItem value="1000">Up to 1000</MenuItem>
            <MenuItem value="1500">Up to 1500</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Filter by Course"
            value={courseFilter}
            onChange={(e) => setCourseFilter(e.target.value)}
            variant="outlined"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Filter by Campus Facilities"
            value={campusFacilitiesFilter}
            onChange={(e) => setCampusFacilitiesFilter(e.target.value)}
            variant="outlined"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            label="Filter by Location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            variant="outlined"
            fullWidth />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button variant="contained" onClick={handleApplyFilters} fullWidth>
            Apply Filters
          </Button>
        </Grid>
      </Grid>
    </Box><Grid container spacing={4} padding={5}>
    {filteredUniversities?.map((uni) => (
  <Grid item key={uni.name} xs={12} sm={6} md={3} lg={3}>
    <Card variant="outlined" sx={{ boxShadow: 3, height: '100%' }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {uni.name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location: {uni.location}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Tuition Fees: ${uni.tuitionFees}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Accommodation Cost: ${uni.accommodationCost}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Courses Offered:
          <ul>
            {uni.coursesOffered.map(course => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
))}
      </Grid></>
  );
}

export default UniversityFilter;
