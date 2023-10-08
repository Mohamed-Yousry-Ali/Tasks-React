import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from './Components/LayOut/LayOut';
import About from './Components/About/About';
import Artist from './Components/Artist/Artist';
import Gallery from './Components/Gallery/Gallery';
import Testimonial from './Components/Testimonial/Testimonial';
import Contact from './Components/Contact/Contact';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';


const routes = createBrowserRouter([{
  path: "", element: <LayOut />, children: [
    {index:true,element:<Home/>},
    { path: "about", element: <About /> },
    { path: "artist", element: <Artist /> },
    { path: "gallery", element: <Gallery /> },
    { path: "testimonials", element: <Testimonial /> },
    { path: "contact", element: <Contact /> },
    {path:"*",element:<NotFound/>}
  ]
}])
function App() {
  return (
    <RouterProvider router={routes}>

    </RouterProvider>
  );
}

export default App;
