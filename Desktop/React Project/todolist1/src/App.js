import React from "react";
import ToDoList from "./ToDoList"; // Import the ToDoList component
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const App = () => {
  return (
    <div>
      <header className="bg-primary text-white text-center py-4">
        <h1>My To-Do List App</h1>
      </header>
      <main className="container">
        <ToDoList />
      </main>
    </div>
  );
};

export default App;
