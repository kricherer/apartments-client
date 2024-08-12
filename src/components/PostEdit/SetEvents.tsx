import { Button, Input } from '@mui/joy';
import { lang } from '../../globalVars';
import { Dispatch, SetStateAction } from 'react';
import { DateAndTime } from './PostEdit';

let date = 'Date';
let time = 'Time';

if (lang === 'HEB') {
  time = 'שעה';
  date = 'תאריך';
}

export default function SetEvents({
  isDisabled,
  events,
  setEvents,
}: {
  isDisabled: boolean;
  events: DateAndTime[];
  setEvents: Dispatch<SetStateAction<DateAndTime[]>>;
}) {
  const handleChange = (
    index: number,
    field: 'date' | 'time',
    value: string
  ) => {
    setEvents((prev) => {
      const updatedEvents = [...prev];
      updatedEvents[index] = { ...updatedEvents[index], [field]: value };
      return updatedEvents;
    });
  };

  return (
    <>
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            gap: '4px',
          }}>
          <Input
            type="date"
            disabled={isDisabled}
            placeholder={date}
            value={event.date}
            onChange={(e) => handleChange(index, 'date', e.target.value)}
          />
          <Input
            type="time"
            disabled={isDisabled}
            placeholder={time}
            value={event.time}
            onChange={(e) => handleChange(index, 'time', e.target.value)}
          />

          {events.length > 1 && (
            <Button
              disabled={isDisabled}
              onClick={() =>
                setEvents((prev) => {
                  const updatedEvents = [...prev];
                  updatedEvents.splice(index, 1);
                  return updatedEvents;
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
        onClick={() => setEvents((prev) => [...prev, { date: '', time: '' }])}
        variant="outlined"
        sx={{ maxWidth: '40px' }}>
        +
      </Button>
    </>
  );
}
