import {Route, Routes} from "react-router-dom";

import OverviewPage from "./pages/OverviewPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";

import Sidebar from "./components/Sidebar.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";

function App() {

  return (
      <div className='h-screen flex overflow-hidden bg-gray-900 text-gray-100'>

          <div className='fixed z-0 inset-0'>
              <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'/>
              <div className='absolute inset-0 backdrop-blur-sm'/>
          </div>
          <Sidebar />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
        </Routes>

      </div>
  )
}

export default App
