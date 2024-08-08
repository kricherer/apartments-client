import { Typography } from '@mui/joy';

export default function Details({
  price,
  description2,
  date,
  rooms,
}: {
  price: string;
  description2: string;
  date: string;
  rooms: string;
}) {
  return (
    <>
      <div
        style={{
          //   marginTop: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          // gap: '1rem',
        }}>
        <ul
          style={{
            paddingRight: 15,
            // listStyleType: 'none',
          }}>
          <li>
            <p>מחיר: {price} ₪</p>
          </li>
          <li>
            <p>חדרים: {rooms} </p>
          </li>
          <li>
            <p>כניסה: {date} </p>
          </li>
        </ul>

        {/* <Typography level="title-lg" sx={{ textDecoration: 'underline' }}>
          פרטים:
        </Typography> */}
        <h4>פרטים:</h4>

        <Typography level="title-md">{description2}</Typography>
      </div>
    </>
  );
}
