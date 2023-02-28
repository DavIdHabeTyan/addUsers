import {Box, createTheme, ThemeProvider} from '@mui/material';
import {Provider, useDispatch} from "react-redux";
import UsersPage from "./pages/UsersPage";
import store from "./store";

const theme = createTheme();
function App() {
  return (
      <Provider store={store}>
          <ThemeProvider theme={theme}>
              <UsersPage/>
          </ThemeProvider>
      </Provider>

  );
}

export default App;
