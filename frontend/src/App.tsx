import Home from "./pages/home";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DefaultLayout from "./templates/defaultLayout";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Router>
    </div>
  );
}

export default App;
