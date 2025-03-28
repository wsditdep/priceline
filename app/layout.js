import '@fortawesome/fontawesome-free/css/all.min.css';
import "./styles/auth.scss";
import "./styles/appLayout.scss";
import "./styles/styles.scss";
import "./styles/global.scss";
import { Toaster } from "react-hot-toast";
import LiveSupport from '@/components/liveSupport/LiveSupport';
import favicon from "@/public/favicon.png";
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Welcome - Priceline",
  description: "",
  icons: {
    icon: {
      url: { favicon },
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              fontSize: '1.4rem',
              fontWeight: 'bold',
            },
          }}
        />
        <div className="platform-layout-parent">
          <div className="platform-layout-childs">
            {children}
          </div>
        </div>
        <NextTopLoader />
        <LiveSupport />
      </body>
    </html>
  );
}
