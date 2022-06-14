import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from 'react-redux'
import {
  ChakraProvider,
  Box,
  Flex,
  Container,
} from "@chakra-ui/react"
import store from 'redux/store'
import { theme } from "utils/theme"
import Header from "components/Header"
import Characters from "pages/Characters"
import CharacterDetail from "pages/CharacterDetail"
import { ScrollTop } from "components/ScrollTop"

export const App = () => (
  <Router>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Header />
        <Box textAlign="center" fontSize="xl">
          <Container maxW='8xl'>
            <Flex minH="100vh" py={16} flexDirection="column" gap='2'>
              <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/detail/:id" element={<CharacterDetail />} />
              </Routes>
            </Flex>
          </Container>
          <ScrollTop />
        </Box>
      </ChakraProvider>
    </Provider>
  </Router>
)
