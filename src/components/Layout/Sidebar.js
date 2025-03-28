// src/components/Sidebar.js
import React from 'react';
import { Home, Info, Link, Mail, Target } from 'lucide-react';
import { Link as RouteLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-gray-100 border-r border-gray-200 text-black w-64 h-screen p-6 shadow-lg drop-shadow-md">

      {/* <h2 className="text-xl font-bold mb-6">Dashboard</h2> */}
      <ul className="space-y-4">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 hover:text-white rounded-md">
          <Home size={20} />
          <RouteLink to="/home">Dashboard</RouteLink>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 hover:text-white rounded-md">
          <Target size={20} />
          <RouteLink to="/tasks-list">My Tasks</RouteLink>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 hover:text-white rounded-md">
          <Target size={20} />
          <RouteLink to="/assign-task">Assign Task</RouteLink>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 hover:text-white rounded-md">
          <Info size={20} />
          <RouteLink to="/home">About</RouteLink>
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-800 hover:text-white rounded-md">
          <Mail size={20} />
          <RouteLink to="/home">Contact</RouteLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
