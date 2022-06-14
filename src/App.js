import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import CharacterComp from "./components/CharacterComp";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CharacterComp />
    </QueryClientProvider>
  );
}

export default App;
