import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import MainPage from './components/MainPage/MainPage';

export default function App() {
  return (
    <Theme className="App" preset={presetGpnDefault}>
      <MainPage></MainPage>
    </Theme>
  );
}
