import "./App.css";
// import { QueryClient, QueryClientProvider } from "react-query";
import AppRoute from "./router/AppRoute";

function App() {
  return (
    <div className="App">
      {/* <QueryClientProvider client={QueryClient}> */}
      <AppRoute />
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
