import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AppRoute from "./router/AppRoute";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AppRoute />
      </QueryClientProvider>
    </div>
  );
}

export default App;
