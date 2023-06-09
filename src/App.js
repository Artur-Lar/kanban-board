import "./style.css";
import "typeface-roboto";
import "./styles/style-block-tasks.css";
import BlockTask from "./Components/blocktask";
import React, { useState } from "react";
import BlokDropdown from "./Components/blok-task-dropdown";
import KanbanBoard from "./Components/test-block";

const App = () => {
  return (
    <div className="blocks">
      <KanbanBoard />
    </div>
  );
};

export default App;
