import { Provider } from "@/components/ui/provider"
import { createRoot } from "react-dom/client"
import { ColorModeProvider } from "@/components/ui/color-mode"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Landing from "./components/Landing.tsx"
import Solve from "./components/Solve.tsx"
import Contributors from "./components/Contributors.tsx"

createRoot(document.getElementById("root")!).render(
  <ColorModeProvider forcedTheme="dark">
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/solve" element={<Solve />} />
          <Route path="/contributors" element={<Contributors />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </ColorModeProvider>
);
