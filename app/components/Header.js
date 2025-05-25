import useTheme from '../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-top">
        <img src="/assets/logos/devjobs-logo.svg" alt="Devjobs Logo" />
        <div className="themeOptions">
          <label>
            <span>
              <img src="/assets/logos/sun-light-mode.svg" alt="Light Mode Icon" />
            </span>
            <input
              className="switch"
              type="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
            />
            <span>
              <img src="/assets/logos/moon-light-mode.svg" alt="Dark Mode Icon" />
            </span>
          </label>
        </div>
      </div>
    </header>
  );
}