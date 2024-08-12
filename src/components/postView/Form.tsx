import { Button, Divider } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import { lang } from '../globalVars';
import Login from '../components/authentication/Login';
import { useState } from 'react';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  tel: HTMLInputElement;
  email: HTMLInputElement;
  social: HTMLInputElement;
}
export interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

let title = 'Register for details and visiting hours:';

let nameLabel = 'Name';
let telLabel = 'Phone';
let emailLabel = 'Email';
let socialLabel = 'Social Link';
let buttonText = 'Register';
let login = 'Login';
if (lang === 'HEB') {
  login = 'התחברות';
  title = 'הרשמו על מנת לקבל פרטים ושעות ביקור:';
  nameLabel = 'שם';
  telLabel = 'טלפון';
  emailLabel = 'אימייל';
  socialLabel = 'פייסבוק / לינקדין / אחר';
  buttonText = 'הרשמה';
}

//-----------------------------------------
export default function Form({ isUserInit = false }: { isUserInit: boolean }) {
  const [open, setOpen] = useState<boolean>(false);

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
      <Stack
        gap={2}
        sx={{
          width: '20rem',
          // alignSelf: 'center',
          border: '0.5px solid #bababa',
          pt: 4,
          px: 5,
          pb: 5,
          borderRadius: '10px',
        }}>
        <h4 style={{ margin: 0 }}>{title}</h4>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
          onSubmit={handleSubmit}>
          <FormControl required>
            <FormLabel>{nameLabel}</FormLabel>
            <Input variant="outlined" type="text" name="name" />
          </FormControl>
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
            sx={{ width: '100%', mt: 4 }}>
            {buttonText}
          </Button>
        </form>
        {!isUserInit && (
          <>
            <Divider />
            <Button onClick={() => setOpen(true)} variant="plain">
              {login}
            </Button>
            <Login open={open} setOpen={setOpen} />
          </>
        )}
      </Stack>
    </>
  );
}
