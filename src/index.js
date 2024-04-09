import { createRoot } from 'react-dom/client';
import Header from './header.js';
//import {MyFirst} from './App.js';
import City from './list_city.js';
import Sights from './sights.js';
import LinkUs from './info_turizm.js';
//import App from './App.js';
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import Footer from './footer.js';
import './header.css';
import './index.css';
import './footer.css';

export default function NavigationBar() {
    // TODO: Actually implement a navigation bar
    return(
    <div>
      <div className="wrapper">

        <App />
        <Footer />
     </div>
    </div>

    )
}

export  function App() {
    return (
        <BrowserRouter>
           <Routes>
              <Route path="/" element={<Header/>} />
              <Route path="/city" element={<City/>}/>
              <Route path="/sights" element={<Sights/>}/>
              <Route path="/info_turizm" element={<LinkUs/>}/>
           </Routes>
        </BrowserRouter>

  );
}

const domNode = document.getElementById('root');

const root = createRoot(domNode);
root.render(<NavigationBar />);

const et = document.getElementById('vid');

const doo = createRoot(et);
doo.render(<NavigationBar />);


