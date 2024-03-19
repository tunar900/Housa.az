import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./page/Home";
import Rootlayout from "./layout/Rootlayout";
import Market from "./components/pages/Market";
import Portal from "./components/pages/Portal";
import Search from "./components/Search";
import Signin from "./components/Register/Signin";
import Signup from "./components/Register/Signup";
import ExploreLayout from "./components/pages/ExploreLayout";
import List from "./components/List";
import Map from "./components/Map";
import MapLayout from "./layout/MapLayout";
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/Register/ForgotPassword";
import EstateDetail from  "./components/estate/EstateDetail";
import EstateLayout from "./components/estate/EstateLayout";
import Recommendations from "./components/Recommendations";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="market-intelligence" element={<Market />} />
        <Route path="realtor-portal" element={<Portal />} />
        <Route path="costumize-search" element={<Search />} />
        <Route path="sign-in"  element={<Signin/>} />
        <Route path="sign-up"  element={<Signup/>}  />
        <Route path="forgotpassword"  element={<ForgotPassword/>}/>
        <Route path="explore-more" element={<ExploreLayout/>}>
        <Route  index element={<List/>} />
        <Route  path="map" element={<MapLayout/>} >
          <Route index element={<Map/>} />
         </Route>
        </Route>
        
         
         

        <Route path="/get-estate-inner" element={<EstateLayout/>}>
         <Route index element={<Recommendations/>} />
        </Route>
        <Route path="/get-estate-inner/:Id" element={<EstateDetail/>}/>
        <Route path="*"  element={<NotFound/>} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


// import React, { lazy, Suspense } from "react";
// import {
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import Rootlayout from "./layout/Rootlayout";

// const Home = lazy(() => import("./page/Home"));
// const Market = lazy(() => import("./components/pages/Market"));
// const Portal = lazy(() => import("./components/pages/Portal"));
// const Search = lazy(() => import("./components/Search"));
// const Signin = lazy(() => import("./components/Register/Signin"));
// const Signup = lazy(() => import("./components/Register/Signup"));
// const ExploreLayout = lazy(() => import("./components/pages/ExploreLayout"));
// const List = lazy(() => import("./components/List"));
// const Map = lazy(() => import("./components/Map"));
// const MapLayout = lazy(() => import("./layout/MapLayout"));
// const NotFound = lazy(() => import("./components/NotFound"));
// const ForgotPassword = lazy(() => import("./components/Register/ForgotPassword"));
// const EstateDetail = lazy(() => import("./components/estate/EstateDetail"));
// const EstateLayout = lazy(() => import("./components/estate/EstateLayout"));
// const Recommendations = lazy(() => import("./components/Recommendations"));


// function App() {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Rootlayout />}>
//         <Route index element={<Home />} />
//         <Route path="market-intelligence" element={<Market />} />
//         <Route path="realtor-portal" element={<Portal />} />
//         <Route path="costumize-search" element={<Search />} />
//         <Route path="sign-in" element={<Signin />} />
//         <Route path="sign-up" element={<Signup />} />
//         <Route path="forgotpassword" element={<ForgotPassword />} />
//         <Route path="explore-more" element={<ExploreLayout />}>
//           <Route index element={<List />} />
//           <Route path="map" element={<MapLayout />}>
//             <Route index element={<Map />} />
//           </Route>
//         </Route>

//         <Route path="/get-estate-inner" element={<EstateLayout />}>
//           <Route index element={<Recommendations />} />
//         </Route>
//         <Route path="/get-estate-inner/:Id" element={<EstateDetail />} />
//         <Route path="*" element={<NotFound />} />
//       </Route>
//     )
//   );

//   return (
//     <div>
      
//         <Suspense fallback={<div><p className="text-[32px] max-sm:text-[24px] text-[#000000] mx-auto text-center">Loading...</p></div>}>
//         <RouterProvider router={router}> </RouterProvider>
//         </Suspense>
      
//     </div>
//   );
// }

// export default App;
