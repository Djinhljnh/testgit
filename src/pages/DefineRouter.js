import {
    createRoutesFromElements,
    createBrowserRouter,
    RouterProvider,
    Route,
  } from 'react-router-dom';
  import Pages from 'src/pages';
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={Pages.Dangki} errorElement={Pages.ErrorPage}>
        <Route index element={Pages.TaoCauHoi} />
      </Route>
    ),
  );
  
  function DefineRouter() {
    return <RouterProvider router={router} />;
  }
  
  export default DefineRouter;