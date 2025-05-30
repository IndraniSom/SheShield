import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/Context/Authcontext";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
  
}
