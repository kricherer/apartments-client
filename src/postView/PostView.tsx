import { Button } from '@mui/joy';
import Form from './Form';
import GradientBackground from './GradientBackground';
import { lang } from '../globalVars';

const title = 'דירת שלושה חדרים ברחוב מלצט 15 בתל אביב';
const url = 'https://www.facebook.com/share/p/hExVMibumrY7R94w/';

let apartmentLinkButtonText = 'Apartment Details';
if (lang === 'HEB') {
  apartmentLinkButtonText = 'לינק לדירה';
}

// const features = ['⁠חניה', 'ממד', '⁠מרפסת', 'חדר כושר'];

// const price = '6800';
// const description2 = `אז אחרי 4 וחצי שנים אנחנו מפנים את הדירה שלנו שהייתה בית של ממש🙃
// 2.5 חדרים בזמנהוף צמוד לכיכר דיזנגוף.
// קומה ראשונה (לא קרקע). בע"ח מוזמנים באהבה.
// 6800₪ לחודש + ועד בית 250₪.
// כניסה באמצע אוגוסט.
// פרטים נוספים בפרטי.
// *חלק מהריהוט יהיה למכירה - לא תנאי לכניסה🙏🏼`;
// const date = '1.9.24';
// const rooms = '3';
// const address = 'בן יהודה 25 תל אביב';

export default function PostView() {
  return (
    <>
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
        {/* <FeaturesGrid features={features} /> */}

        {/* <Details
          price={price}
          description2={description2}
          date={date}
          rooms={rooms}
        /> */}
        <Form />
        {/* <Divider sx={{ mt: '15px' }} /> */}

        {/* <Map address={address} /> */}
        <GradientBackground />
      </div>
    </>
  );
}
