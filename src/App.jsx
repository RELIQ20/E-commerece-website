import { Box, useColorModeValue } from "@chakra-ui/react"
import Navbar from "./componenets/components/Navbar.jsx"
import HomePage from "./pages/HomePage.jsx"
import CreatePage from "./pages/CreatePage.jsx"
import { Routes, Route } from "react-router-dom"
function App() {

  return (
    <>
    <Box mixH = {"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      <Navbar/>
        <Routes>
          <Route path="/" element = {<HomePage/>}/>
          <Route path="/create" element = {<CreatePage/>}/>
        </Routes>
    </Box>
    </>
  )
}

export default App
