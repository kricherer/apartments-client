import { Button } from '@mui/joy';
import Form from './Form';
import GradientBackground from './GradientBackground';
import { lang } from '../globalVars';
import Events from './Events';
import { useState } from 'react';

const title = 'דירת שלושה חדרים ברחוב מלצט 15 בתל אביב';
const url = 'https://www.facebook.com/share/p/GoP26zLbeuncJ36A/';
// const isUserApproved = true;

let apartmentLinkButtonText = 'Apartment Details';

if (lang === 'HEB') {
  apartmentLinkButtonText = 'לינק לדירה';
}

export default function PostView() {
  const [isUserApproved, setIsUserApproved] = useState(true);
  return (
    <>
      <button
        onClick={() => setIsUserApproved((prev) => !prev)}
        style={{ width: '50px' }}>
        toggle
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
        }}>
        <h2>{title}</h2>

        <Button
          variant="outlined"
          onClick={() => {
            window.open(url, '_blank');
          }}>
          {apartmentLinkButtonText}
        </Button>

        {isUserApproved ? <Events /> : <Form />}

        <GradientBackground />
      </div>
    </>
  );
}
