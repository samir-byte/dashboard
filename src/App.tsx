import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import AppProvider from "./providers";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
