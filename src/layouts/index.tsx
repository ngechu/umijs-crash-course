import { Link, Outlet } from "umi";
import { QueryClient, QueryClientProvider } from "react-query";
import { useModel } from "umi";

export default function Layout() {
  // Create a client
  const queryClient = new QueryClient();
  const { numberOfProducts } = useModel("cart");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 caret-transparent scroll-smooth">
        <div>
          <nav>
            <ul className="flex justify-between text-lg font-medium">
              <Link to="/">
                <div className="flex gap-2 items-center">
                  <img
                    src="/assets/ippo.png"
                    alt="Kamogawa Gym"
                    width={50}
                    height={50}
                  ></img>
                  <p>Kamogawa Gym</p>
                </div>
              </Link>
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>

                <span className="sr-only">Notifications</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                  {numberOfProducts}
                </div>
              </button>
            </ul>
          </nav>
          <div className="py-16">
            <Outlet />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
