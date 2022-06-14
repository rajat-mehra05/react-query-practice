import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Characters from "./components/Characters";
import Hero from "./components/Hero";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="bg-gray-900">
      <QueryClientProvider client={queryClient}>
        <Hero />
        <Characters />
      </QueryClientProvider>
    </div>
  );
}

export default App;
