import { wrapper } from "@/store/store";
import "@/styles/dark.css";
import "@/styles/light.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
