import { Button, Input } from '@mui/joy';
import { lang } from '../globalVars';
import { useState } from 'react';

let date = 'Date';
let time = 'Time';

if (lang === 'HEB') {
  time = 'שעה';
  date = 'תאריך';
}

export default function SetEvents({ isDisabled }: { isDisabled: boolean }) {
  const [eventNum, setEventNum] = useState([0]);

  return (
    <>
      {Array.from(eventNum).map((_, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '4px',
          }}>
          <Input disabled={isDisabled} placeholder={date} />
          <Input disabled={isDisabled} placeholder={time} />
          {eventNum.length > 1 && (
            <Button
              disabled={isDisabled}
              onClick={() =>
                setEventNum((prev) => {
                  const deepCopy = [...prev];
                  deepCopy.splice(index, 1);
                  return deepCopy;
                })
              }
              variant="outlined"
              sx={{ maxWidth: '40px' }}>
              -
            </Button>
          )}
        </div>
      ))}
      <Button
        disabled={isDisabled}
        onClick={() =>
          setEventNum((prev) => [...prev, prev[prev.length - 1] + 1])
        }
        variant="outlined"
        sx={{ maxWidth: '40px' }}>
        +
      </Button>
    </>
  );
}
