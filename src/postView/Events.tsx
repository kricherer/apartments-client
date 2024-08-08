import { Button, Stack, Typography } from '@mui/joy';
import { lang } from '../globalVars';
import RadioList from './RadioList';
import { useState } from 'react';

const events = [
  {
    id: 1,
    date: '2024-08-29', // utc YYYY-MM-DD
    start_time: '19:00:00',
    end_time: '20:00:00',
    available: true,
  },
  {
    id: 2,
    date: '2024-08-30',
    start_time: '19:00:00',
    end_time: '20:00:00',
    available: false,
  },
  {
    id: 3,
    date: '2024-08-27',
    start_time: '19:00:00',
    end_time: '20:00:00',
    available: true,
  },
  {
    id: 4,
    date: '2024-08-28',
    start_time: '19:00:00',
    end_time: '20:00:00',
    available: true,
  },
];

//-----------------------------------------------
export interface Event {
  id: number;
  date: string;
  start_time: string;
  end_time: string;
  available: boolean;
}

export interface FormatedEvent {
  date: string;
  day: string;
  endTime: string;
  id: number;
  startTime: string;
}

let title = 'Choose visit time';
let buttonText = 'Send';
if (lang === 'HEB') {
  title = 'בחירת זמן ביקור';
  buttonText = 'שלח';
}

const daysEng = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const daysHeb = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];

function getDay(dayNum: number) {
  if (lang === 'HEB') return daysHeb[dayNum];
  return daysEng[dayNum];
}

function convertHebDate(dateString: string) {
  const p = dateString.split(/\D/g);
  return [p[2], p[1]].join('.');
}

function convertEngDate(dateString: string) {
  const p = dateString.split(/\D/g);
  return [p[1], p[2]].join('.');
  // return p;
}

function sortByDate(events: Event[]) {
  return events.sort(function (a, b) {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
}

function formateEventData(originalEvents: Event[]): FormatedEvent[] {
  const filteredEvents = originalEvents.filter((event) => event.available);
  const sortedEvents = sortByDate(filteredEvents);

  const events = sortedEvents.map((event) => {
    const dayNum = new Date(event.date).getUTCDay();
    const day = getDay(dayNum);
    const date =
      lang === 'HEB' ? convertHebDate(event.date) : convertEngDate(event.date);
    const startTime = event.start_time.slice(0, 5);
    const endTime = event.end_time.slice(0, 5);

    return { id: event.id, date, day, startTime, endTime };
  });

  return events;
}

export default function Events() {
  const [selectedValue, setSelectedValue] = useState<string>('0');
  const formatedEvents = formateEventData(events);

  function handleClick() {
    if (selectedValue === '0') return;
    // send to db
    // confirmation page.
    console.log('post id: ', selectedValue); //removeEytan
  }

  return (
    <>
      <Stack
        spacing={4}
        sx={{
          width: '21rem',
          border: '0.5px solid #bababa',
          pt: 4,
          px: 5,
          pb: 5,
          borderRadius: '10px',

          maxHeight: '500px', // Set the maximum height
          overflowY: 'auto', // Enable vertical scrolling
        }}>
        <Typography level="body-lg">{title}</Typography>

        <RadioList
          events={formatedEvents}
          setSelectedValue={setSelectedValue}
        />
      </Stack>
      <Button
        disabled={selectedValue === '0'}
        onClick={handleClick}
        sx={{ width: '20%' }}>
        {buttonText}
      </Button>
    </>
  );
}
