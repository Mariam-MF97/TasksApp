import Button from "./Button";

const Header = ({ onAdd, showAddTask }) => {
  return (
    <header className="header">
      <h1 style={{ color: "#4594DC", fontWeight: "bold" }}>TASKS APP</h1>
      <Button
        onClick={onAdd}
        color={showAddTask ? "red" : "#4594DC"}
        text={showAddTask ? "Close" : "Add"}
      />
    </header>
  );
};

export default Header;
