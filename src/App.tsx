import classNames from 'classnames';
import Login from './component/Login';
import Dashboard from './component/dashboard/Dashboard';
import { UserProvider } from './context/UserContext';
import { SearchProvider } from './context/SearchContext';

function App() {
  const query = new URLSearchParams(window.location.search);
  const code = query.get('code');
  // console.log(code);

  return (
    <main
      className={classNames(
        ' h-[100vh] w-full bg-[#000101] flex justify-center items-center',
        { 'bg-[#0c0c0ce7]': !code }
      )}
    >
      <UserProvider>
        <SearchProvider>
          {code ? <Dashboard code={code} /> : <Login />}
        </SearchProvider>
      </UserProvider>
    </main>
  );
}

export default App;
