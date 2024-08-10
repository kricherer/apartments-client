import { Button, Input, Divider, Typography, Checkbox } from '@mui/joy';
import { lang } from '../globalVars';
import { SignInFormElement } from '../postView/Form';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Stack from '@mui/joy/Stack';
import SetEvents from './SetEvents';
import { useState } from 'react';

let title = 'Post Editing';
let nameLabel = 'Title';
let namePh = 'Example: 3 bedroom - Opera, paris';
let apartmentLinkLabel = 'Apartment Details';
let apartmentLinkPh = 'We recommend adding a link to the full details';
let dividerText1 = 'Info below will be available only to approved users:';

let eventLabel = 'Optional arrival times for approved prospects:';
eventLabel = 'שעות הגעה אופציונלים למשתמשים מאושרים:';

let decideLaterEvents = "I'll decide later";
decideLaterEvents = 'אחליט מאוחר יותר';

let finalDetailsLabel =
  'Final details for prospects who come to see the apartment:';
finalDetailsLabel = 'פרטים סופיים למתעניינים שמגיעים לראות את הדירה:';

let fillInLaterDetails = 'I will fill in details later';
fillInLaterDetails = 'אמלא פרטים בשלב מאוחר יותר';

let fullAddress = 'Full address including floor and apartment';
fullAddress = 'כתובת מלאה כולל קומה ודירה';

let telLabel = 'Phone';
let emailLabel = 'Email';
let socialLabel = 'Social Link';
let buttonText = 'Register';

if (lang === 'HEB') {
  title = 'עריכת פוסט';
  nameLabel = 'כותרת';
  namePh = `דוגמא: דירת שלושה חדרים ברחוב מלצט 15 בתל אביב
    `;
  apartmentLinkLabel = 'לינק לדירה';
  apartmentLinkPh = 'מומלץ להזין לינק לפוסט עם כל הפרטים';
  dividerText1 = 'המידע להלן יהיה זמין אך ורק למי שאושר על ידיך:';

  telLabel = 'טלפון';
  emailLabel = 'אימייל';
  socialLabel = 'פייסבוק / לינקדין / אחר';
  buttonText = 'הרשמה';
}

export default function PostEdit() {
  const [isEventsDisabled, setIsEventsDisabled] = useState(false);
  const [isDetailsDisabled, setIsDetailsDisabled] = useState(false);

  function handleSubmit(event: React.FormEvent<SignInFormElement>) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const data = {
      name: formElements.name.value,
      tel: formElements.tel.value,
      email: formElements.email.value,
      social: formElements.social.value,
    };
    console.log('data: ', data); //removeEytan
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
              <FormLabel>{nameLabel}</FormLabel>
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

            <Typography level="body-lg" mb={3}>
              {dividerText1}
            </Typography>
            <Typography level="body-md">{eventLabel}</Typography>

            <Checkbox
              onChange={() => setIsEventsDisabled((prev) => !prev)}
              dir="ltr"
              label={decideLaterEvents}
            />

            <SetEvents isDisabled={isEventsDisabled} />

            <Typography mt={10} level="body-md">
              {finalDetailsLabel}
            </Typography>

            <FormControl required>
              <FormLabel>{telLabel}</FormLabel>
              <Input type="tel" name="tel" />
            </FormControl>
            <FormControl required>
              <FormLabel>{emailLabel}</FormLabel>
              <Input type="email" name="email" />
            </FormControl>
            <FormControl>
              <FormLabel>{socialLabel}</FormLabel>
              <Input type="url" name="social" />
            </FormControl>

            <Button
              type="submit"
              // variant="outlined"
              sx={{ width: '30%', mt: 4 }}>
              {buttonText}
            </Button>
          </form>
        </Stack>
      </div>
    </>
  );
}
