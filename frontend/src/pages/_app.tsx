import "@/styles/light.css";
import "@/styles/dark.css";
import { wrapper, persistor } from "@/store/store";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/store/store";
import { useEffect } from "react";
import { setTheme } from "@/store/themeSlice";
import useConnectSocketIO from "@/hooks/connectSocketIO";
import { PersistGate } from "redux-persist/integration/react";

function App({ Component, pageProps }: AppProps) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const uri = "http://localhost:8000";
  useConnectSocketIO(uri);
  console.log("ta auqi no app");
  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light";
      dispatch(setTheme(savedTheme));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }
  }, [dispatch, mode]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default wrapper.withRedux(App);
