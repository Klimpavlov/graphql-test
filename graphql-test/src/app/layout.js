// import { Inter } from "next/font/google";
// import "./globals.css";
// // import {ApolloProvider} from "@apollo/client";
// // import client from "@/lib/apolloClient";
// const inter = Inter({ subsets: ["latin"] });
//
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
//
// export default function RootLayout({ children }) {
//   return (
//       // <ApolloProvider client={client}>
//         <html lang="en">
//         <body className={inter.className}>{children}</body>
//         </html>
//       // </ApolloProvider>
//   );
// }



import { ApolloWrapper } from "/Users/a111/Desktop/graphql-test/graphql-test/src/lib/apollo-wrapper.js";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    );
}