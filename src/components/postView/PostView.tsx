import { Button } from '@mui/joy';
import Form from './Form';
import { lang } from '../globalVars';
import Events from './Events';
import PendingApproval from './PendingApproval';
import EventDetails from './EventDetails';

const title = 'דירת שלושה חדרים ברחוב מלצט 15 בתל אביב';
const url = 'https://www.facebook.com/share/p/GoP26zLbeuncJ36A/';

let apartmentLinkButtonText = 'Apartment Details';

if (lang === 'HEB') {
  apartmentLinkButtonText = 'לינק לדירה';
}

type ProspectStatus = 'init' | 'pendingApproval' | 'approved' | 'subscribed';

export default function PostView() {
  const prospectStatus = 'none';
  // const prospectStatus = 'init';
  // const prospectStatus = 'pendingApproval'
  // const prospectStatus = 'approved'
  // const prospectStatus = 'subscribed'

  return (
    <>
      {/* <button
        onClick={() => {
          setI(prev=>prev+1);
          setUserStatus(userStatusArr[i])
        }}
        style={{ width: '50px' }}>
        toggle
      </button>
      <Typography level='body-xs'>status: {userStatus}</Typography> */}

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

        {prospectStatus === 'none' && <Form />}
        {prospectStatus === 'init' && <Form isUserInit={true} />}
        {prospectStatus === 'pendingApproval' && <PendingApproval />}
        {prospectStatus === 'approved' && <Events />}
        {prospectStatus === 'subscribed' && <EventDetails />}
      </div>
    </>
  );
}
