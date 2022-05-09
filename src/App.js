import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout';
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';
import NoFound from './Pages/NoFound';
import QuoteDetail from './Pages/QuoteDetail';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'></Redirect>
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>
        <Route path= '/quotes/:quotesId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NoFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
