import ReactDOM from 'react-dom/client';
import App from 'src/App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'src/store/index.ts';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
