import {Link, Outlet} from 'react-router-dom';
import './header.css';



export default function Header(){


return(
    <>
            <nav className="nav">
                <ul className="header">

                   <li>
                      <Link to="/city" className="city">Города</Link>
                   </li>
                    <li>
                      <Link to="/sights" className="sight">Достопримечательности</Link>
                    </li>
                    <li>
                      <Link to="/info_turizm" className="info_turizm">О туризме в России</Link>
                    </li>
                    <li>
                     <Link to="/" className="сhif">Главная страница</Link>
                    </li>
                 </ul>
            </nav>

         <Outlet />
     </>
     )

}

//export function LinkPage() {
//  return (
//    <BrowserRouter>
//      <Routes>
//        <Route path="city" element={<City />} />
//      </Routes>
//    </BrowserRouter>
//  );
//}
//
//function City() {
//  return (
//    <div>
//
//        <p className="city"><Link to="me">CITY</Link></p>
//
//
//      <Outlet />
//    </div>
//  );
//}




