import ReactDOM from 'react-dom/client';
import App from '../src/App';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"))
const Routing = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        
    }
])
root.render(<RouterProvider router={Routing} />)
