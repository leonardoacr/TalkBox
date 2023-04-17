import { wrapper } from "@/store/store";
import "@/styles/dark.css";
import "@/styles/light.css";
import type { AppProps, AppContext } from "next/app";
import { Provider, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "@/store/store";
import { useEffect } from "react";
import { setTheme, toggleTheme } from "@/store/themeSlice";

function App({ Component, pageProps }: AppProps) {
  const mode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light";
      dispatch(setTheme(savedTheme)); // dispatch setTheme action with savedTheme value
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

// App.getInitialProps = async ({ Component, ctx }: AppContext) => {
//   const theme = (ctx.store.getState() as RootState).theme.mode;
//   ctx.store.dispatch(setTheme(theme));
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};
//   return { pageProps };
// };

export default wrapper.withRedux(App);
