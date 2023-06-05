import Head from "next/head";
import Link from "next/link";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ? title + "Mistoresv" : "Mistoresv"}</title>
        <metadata name="description" content="ecommerce app" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md">
            <Link href="/">
              <span className="text-lg font-bold">mistoresv</span>
            </Link>
            <div>
              <Link href="/cart">
                <span className="p-2">Cart</span>
              </Link>
              <Link href="/login">
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="continer m-auto mt-4 px-4">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          Copyright 2023 Mistoresv
        </footer>
      </div>
    </>
  );
};

export default Layout;
