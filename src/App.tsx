import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/layout"
import Redirect from "./components/redirect"

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<Redirect/>}/>
        <Route path="/layout/*" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  )
}
