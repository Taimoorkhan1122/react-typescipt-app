import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="heading">
        <h2 data-testid="heading">Expense Tracker App</h2>
        <h2>By: Taimoor Khan 😎</h2>
      </div>
    </header>
  );
};

export default Header;
