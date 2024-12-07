import Page from './Page.jsx'

function App(){
  return (
    <>
      <Page isLoggedIn={true} userName="Moon" /> 
      {/* <Page isLoggedIn={true} /> 
      <Page isLoggedIn={false} userName="Moon" />
      <Page isLoggedIn={false} />  */}
    </>
  );
}

export default App;