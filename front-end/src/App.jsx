import { LanguageProvider } from "./context/LanguageContext";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <LanguageProvider>
      <div>
        <LandingPage />
      </div>
    </LanguageProvider>
  );
}

export default App;
