import Textarea from '@mui/joy/Textarea';
import { Button, Input, Divider, Typography, Checkbox } from '@mui/joy';
import { lang } from '../../globalVars';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import SetEvents from './SetEvents';
import { useState } from 'react';
import Login from '../authentication/Login';
import { SignInFormElement } from '../postView/Form';

let title = 'Post Editing';
let postTitleLabel = 'Title';
let namePh = 'Example: 3 bedroom - Opera, paris';
let apartmentLinkLabel = 'Apartment Details';
let apartmentLinkPh = 'We recommend adding a link to the full details';
let dividerText1 = 'Info below will be available only to approved users:';
let eventLabel = 'Optional arrival times for approved prospects:';
let decideLaterEvents = "I'll decide later";
let finalDetailsLabel =
  'Final details for prospects who come to see the apartment:';
let fullAddress = 'Full address including floor and apartment';
let showPhoneLabel = 'Show phone number ';
let loginTitle = 'Sign Up or Login';
let nameLabel = 'Full Name';
let telLabel = 'Phone';
let buttonText = 'Send';
let freeTextLable = 'Additional details';
let freeText = '"Type in here…"';

if (lang === 'HEB') {
  title = 'עריכת פוסט';
  postTitleLabel = 'כותרת';
  namePh = `דוגמא: דירת שלושה חדרים ברחוב מלצט 15 בתל אביב
    `;
  apartmentLinkLabel = 'לינק לדירה';
  apartmentLinkPh = 'מומלץ להזין לינק לפוסט עם כל הפרטים';
  dividerText1 = 'המידע להלן יהיה זמין אך ורק למי שאושר על ידיך:';
  telLabel = 'טלפון';
  buttonText = 'שליחה';
  eventLabel = 'שעות הגעה אופציונלים למשתמשים מאושרים:';
  decideLaterEvents = 'אחליט מאוחר יותר';
  finalDetailsLabel = 'פרטים סופיים למתעניינים שמגיעים לראות את הדירה:';
  fullAddress = 'כתובת מלאה כולל קומה ודירה';
  showPhoneLabel = 'הצג מספר טלפון לבירורים';
  loginTitle = 'הרשמה / התחברות';
  nameLabel = 'שם מלא';
  freeTextLable = 'פרטים נוספים';
  freeText = 'טקסט חופשי';
}

const checkBoxSx =
  lang === 'HEB'
    ? {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row-reverse',
      }
    : {};
export interface DateAndTime {
  date: string;
  time: string;
}

const isLoggedIn = false;

export default function PostEdit() {
  const [open, setOpen] = useState<boolean>(false);
  const [showPhone, setShowPhone] = useState<boolean>(true);
  const [isEventsDisabled, setIsEventsDisabled] = useState(false);
  const [events, setEvents] = useState<DateAndTime[]>([
    {
      date: '',
      time: '',
    },
  ]);
  console.log('events: ', events); //removeEytan

  function handleSubmit(event: React.FormEvent<SignInFormElement>) {
    event.preventDefault();

    if (!isLoggedIn) setOpen(true);
    else {
      const formElements = event.currentTarget.elements;

      const data = {
        name: formElements.name.value,
        tel: formElements.tel.value,
        email: formElements.email.value,
        social: formElements.social.value,
      };
      console.log('data: ', data); //removeEytan
    }
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          // margin:'0 auto',
          gap: '3rem',
          // maxWidth:'800px'
        }}>
        <h2>{title}</h2>
        <Stack
          gap={2}
          sx={{
            width: '50rem',

            pt: 4,
            px: 5,
            pb: 5,
          }}>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',

              margin: '0 auto',
              width: '600px',
            }}
            onSubmit={handleSubmit}>
            <FormControl required>
              <FormLabel>{postTitleLabel}</FormLabel>
              <Input
                placeholder={namePh}
                variant="outlined"
                type="text"
                name="name"
              />
            </FormControl>
            <FormControl>
              <FormLabel>{apartmentLinkLabel}</FormLabel>
              <Input
                placeholder={apartmentLinkPh}
                type="url"
                name="apartmentLink"
              />
            </FormControl>

            <Divider sx={{ my: 5 }} />

            <Typography level="body-lg" mb={1}>
              {dividerText1}
            </Typography>

            <FormControl>
              <Checkbox
                sx={checkBoxSx}
                onChange={() => setIsEventsDisabled((prev) => !prev)}
                dir="ltr"
                label={decideLaterEvents}
              />
            </FormControl>

            <Typography
              sx={{
                color: isEventsDisabled ? '#acacac' : '',
                mt: 7,
              }}
              level="body-md">
              {eventLabel}
            </Typography>

            <SetEvents
              isDisabled={isEventsDisabled}
              events={events}
              setEvents={setEvents}
            />

            <Typography
              sx={{
                color: isEventsDisabled ? '#acacac' : '',
              }}
              mt={5}
              mb={3}
              level="body-md">
              {finalDetailsLabel}
            </Typography>

            <FormControl disabled={isEventsDisabled}>
              <FormLabel>{fullAddress}</FormLabel>
              <Input type="text" name="address" />
            </FormControl>

            <FormControl disabled={isEventsDisabled}>
              <FormLabel>{freeTextLable}</FormLabel>
              <Textarea
                placeholder={freeText}
                minRows={2}
                sx={{
                  '&::before': {
                    display: 'none',
                  },
                  '&:focus-within': {
                    outline: '2px solid var(--Textarea-focusedHighlight)',
                    outlineOffset: '2px',
                  },
                  mb: 5,
                }}
              />
            </FormControl>

            <FormControl disabled={isEventsDisabled} sx={{ my: 2 }}>
              <Checkbox
                sx={checkBoxSx}
                checked={showPhone}
                onChange={() => setShowPhone((prev) => !prev)}
                dir="ltr"
                label={showPhoneLabel}
              />
            </FormControl>

            <Divider sx={{ my: 5 }} />
            <Typography level="body-md">{loginTitle}</Typography>

            <FormControl required>
              <FormLabel>{nameLabel}</FormLabel>
              <Input type="text" name="name" />
            </FormControl>
            <FormControl required>
              <FormLabel>{telLabel}</FormLabel>
              <Input type="tel" name="tel" />
            </FormControl>

            <div
              style={
                {
                  // display: 'flex',
                  // flexDirection: 'row-reverse',
                  // position: 'absolute',
                }
              }>
              <Typography level="body-md">אני מאשר את תנאי האתר</Typography>
              <input
                style={{
                  background: '#d40101',
                }}
                type="checkbox"
                id="scales"
                name="scales"
              />
            </div>

            <Button
              type="submit"
              // variant="outlined"
              sx={{ width: '30%', mt: 4 }}>
              {buttonText}
            </Button>
          </form>
        </Stack>
      </div>
      <Login open={open} setOpen={setOpen} />
    </>
  );
}
