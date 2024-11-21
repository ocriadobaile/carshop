import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStore } from '../store/useStore';

export function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
}