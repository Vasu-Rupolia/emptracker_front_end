import React, { useState } from "react";
import { Bell, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/actions/authActions"; // Import logout action

const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.auth.user);

  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
  };

  if (!userData) return null; // If user is null, don't render

  const textColor = userData.role === "manager" ? "text-green-200" : "text-orange-200";

  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center shadow-md relative">
      <h1 className="text-xl font-bold">My App</h1>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-white text-black shadow-lg rounded-lg p-4">
              <h3 className="font-bold text-lg mb-2">Notifications</h3>
              <ul className="space-y-2">
                <li className="border-b pb-1">New message received 📩</li>
                <li className="border-b pb-1">Task deadline tomorrow ⏳</li>
                <li className="border-b pb-1">System update available ⚙</li>
              </ul>
            </div>
          )}
        </div>

        <div className="relative">
          <button onClick={() => setShowUserMenu(!showUserMenu)} className="flex items-center gap-2">
            <User size={24} />
            <span className="hidden sm:inline">{userData.first_name} {userData.last_name}</span>
            <span className={textColor}>({userData.role})</span>
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg p-4">
              <ul className="space-y-2">
                <li>
                  <a href="/profile" className="block hover:bg-gray-100 p-2 rounded">View Profile</a>
                </li>
                <li>
                  <button onClick={handleLogout} className="block w-full text-left hover:bg-gray-100 p-2 rounded">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
