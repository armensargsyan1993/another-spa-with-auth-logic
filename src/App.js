import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar } from './components/Navbar/Navbar';
import { RoutesContainer } from './components/RoutesContainer/RoutesContainer';
import { authMeThunk } from './redux/authMeReducer/authMeActions';

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(authMeThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      <Navbar/>
      <RoutesContainer/>
    </>
  );
}

export default App;
