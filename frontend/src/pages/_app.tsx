import "@/styles/light.css";
import "@/styles/dark.css";
import { wrapper } from "@/store/store";
import type { AppProps } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/store/store";
import { useEffect } from "react";
import { setTheme } from "@/store/themeSlice";

function App({ Component, pageProps }: AppProps) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

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
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(App);
