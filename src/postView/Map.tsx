import { Card, Divider, Typography } from '@mui/joy';
import GoogleMapContainer from './GoogleMap';

export default function Map({ address }: { address: string }) {
  return (
    <>
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1rem',
        }}> */}
      {/* <Typography level="title-lg" sx={{ textDecoration: 'underline' }}>
          כתובת:
        </Typography> */}
      {/* <Typography level="title-md">{address}</Typography> */}
      {/* <GoogleMapContainer /> */}
      <Divider sx={{ mt: 5 }} />
      <Card sx={{ px: 40, py: 9, m: '0 auto' }}>Google Maps</Card>
      {/* </div> */}
    </>
  );
}
