import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from 'react-query';
import 'bootswatch/dist/lumen/bootstrap.min.css';
const client = new QueryClient();
ReactDOM.render(
  <BrowserRouter>
  <QueryClientProvider client={client}>
        <App />
  </QueryClientProvider>  
  </BrowserRouter>
    ,document.getElementById('root')
);

