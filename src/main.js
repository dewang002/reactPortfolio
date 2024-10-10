import ReactDOM from 'react-dom/client';
import { Routing } from './utils/routes/Routes';
import {  RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={Routing} />)
