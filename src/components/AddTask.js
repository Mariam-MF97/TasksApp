import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return alert("Please enter task name!");
    } else {
      onAdd({ text, day, reminder });
      setText("");
      setDay("");
      setReminder(false);
    }
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label style={{ fontWeight: "bold" }}>Task Name :</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          style={{ border: "2px solid #4594DC", borderRadius: "20px" }}
        />
      </div>
      <div className="form-control">
        <label style={{ fontWeight: "bold" }}>Day & Time :</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Add a task"
          style={{ border: "2px solid #4594DC", borderRadius: "20px" }}
        />
      </div>
      <div className="form-control form-control-check">
        <label style={{ fontWeight: "bold" }}>Set Reminder :</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input
        type="submit"
        value="SAVE TASK"
        className="btn btn-block"
        style={{
          fontWeight: "bold",
          backgroundColor: "#4594DC",
          borderRadius: "7px",
        }}
      />
    </form>
  );
};

export default AddTask;
