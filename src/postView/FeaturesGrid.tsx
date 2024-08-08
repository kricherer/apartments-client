import { Grid, Typography } from '@mui/joy';
import { IoMdCheckboxOutline } from 'react-icons/io';

export default function FeaturesGrid({ features }: { features: string[] }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 16 }}
      sx={{ flexGrow: 1 }}>
      {features.slice(0, 4).map((feature, index) => (
        <Grid xs={2} sm={4} md={4} key={index}>
          <Feature feature={feature} />
        </Grid>
      ))}
    </Grid>
  );
}

function Feature({ feature }: { feature: string }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
      <IoMdCheckboxOutline />
      <Typography>{feature}</Typography>
    </div>
  );
}
