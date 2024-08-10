import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import { lang } from '../globalVars';

let getOtpTitle = 'SMS Authentication';
let getOtpTitle2 = 'Please fill in your phone number';
let otpCodeTitle = 'Insert Code';

let otpCodeTitle2 = 'Please fill in the code you received';

let login = 'Login';
let Submit = 'Submit';
if (lang === 'HEB') {
  login = 'התחברות';
  getOtpTitle = 'כניסה עם SMS';
  getOtpTitle2 = 'הזן מספר טלפון לקבלת קוד לנייד';
  Submit = 'שלח';

  otpCodeTitle = ' קוד סודי';
  otpCodeTitle2 = 'הזינו את הקוד שקיבלתם בSMS';
}

export default function Login() {
  const [open, setOpen] = React.useState<boolean>(false);
  const [codeModalOpen, setCodeModalOpen] = React.useState<boolean>(false);

  function handleSubmitPhone(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCodeModalOpen(true);
  }
  function handleSubmitCode(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setOpen(false);
    // if pending go to pending page
    // if is approved go to events page
    // if is approved and is attending go to final details page
  }

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)} variant="plain">
        {login}
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        {codeModalOpen ? (
          <InsertCode handleSubmitCode={handleSubmitCode} />
        ) : (
          <GetOtpModalDialog handleSubmitPhone={handleSubmitPhone} />
        )}
      </Modal>
    </React.Fragment>
  );
}

function GetOtpModalDialog({
  handleSubmitPhone,
}: {
  handleSubmitPhone: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <ModalDialog>
      <DialogTitle>{getOtpTitle}</DialogTitle>
      <DialogContent>{getOtpTitle2}</DialogContent>
      <form onSubmit={handleSubmitPhone}>
        <Stack spacing={2}>
          <div dir="ltr">
            <FormControl>
              <Input autoFocus required />
            </FormControl>
          </div>
          <Button variant="plain" type="tel">
            {Submit}
          </Button>
        </Stack>
      </form>
    </ModalDialog>
  );
}

function InsertCode({
  handleSubmitCode,
}: {
  handleSubmitCode: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <ModalDialog>
      <DialogTitle>{otpCodeTitle}</DialogTitle>
      <DialogContent>{otpCodeTitle2}</DialogContent>
      <form onSubmit={handleSubmitCode}>
        <Stack spacing={2}>
          <div dir="ltr">
            <FormControl>
              <Input autoFocus required />
            </FormControl>
          </div>
          <Button variant="plain" type="tel">
            {Submit}
          </Button>
        </Stack>
      </form>
    </ModalDialog>
  );
}
