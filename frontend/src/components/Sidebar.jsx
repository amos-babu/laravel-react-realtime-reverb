import { Link, useNavigate } from 'react-router-dom';
import api from './apis';
import React, { useEffect, useState } from 'react'

const Sidebar = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await api.get(`/users`);
            setUsers(response.data.users);
            // console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <button data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="inline-flex items-center p-2 mt-2
            ms-3 text-sm text-gray-500 rounded-lg sm:hidden
            hover:bg-gray-100 focus:outline-none focus:ring-2
            focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700
            dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd"
                    fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0
                    010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75
                    0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75
                    0 010 1.5H2.75A.75.75 0 012 10z">
                </path>
            </svg>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 mt-14" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    { users.map( user => (
                        <li key={user.id}>
                            <Link
                                className="flex items-center p-2 text-gray-900
                                rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                onClick={(e) => {
                                e.preventDefault();
                                navigate(`/${user.id}`)
                            }}
                            >
                                <span className="flex-1 font-normal ms-3 whitespace-nowrap">{user.name}</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    </>
  )
}

export default Sidebar