import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { FormatedEvent } from './Events';
import { Typography } from '@mui/joy';
import { SetStateAction } from 'react';
import { lang } from '../globalVars';

export default function RadioList({
  events,
  setSelectedValue,
}: {
  events: FormatedEvent[];
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <RadioGroup
      dir="ltr"
      aria-label="time-slos"
      name="events-list"
      onChange={handleChange}>
      <List
        sx={{
          minWidth: 240,
          '--List-gap': '0.5rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
          gap: '5px',
        }}>
        {events.map((event) => {
          return (
            <ListItem
              variant="outlined"
              key={event.id}
              sx={{
                boxShadow: 'sm',
              }}>
              <Radio
                overlay
                value={event.id}
                label={
                  <>
                    <Typography
                      //  MUI Radio does't work well with rtl:
                      dir={lang === 'HEB' ? 'rtl' : 'ltr'}>
                      {event.date} {event.day} : {event.startTime} -
                      {event.endTime}
                    </Typography>
                  </>
                }
                sx={{
                  flexGrow: 1,

                  //  MUI Radio does't work well with rtl:
                  flexDirection: lang === 'HEB' ? 'row-reverse' : 'none',
                  pl: lang === 'HEB' ? 8 : 0,
                }}
                slotProps={{
                  action: ({ checked }) => ({
                    sx: (theme) => ({
                      ...(checked && {
                        inset: -1,
                        border: '2px solid',
                        borderColor: theme.vars.palette.primary[500],
                      }),
                    }),
                  }),
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </RadioGroup>
  );
}
