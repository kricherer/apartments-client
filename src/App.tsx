import './App.css';

import PostView from './postView/PostView';

function App() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginInline: 'auto',
          maxWidth: '50dvw',
          // maxWidth: '1000px',
        }}>
        <PostView />
      </div>
    </>
  );
}

export default App;
