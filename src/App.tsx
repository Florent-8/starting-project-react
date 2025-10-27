import { useState } from "react";

import Header from "./components/Header";
import goalsImg from "./assets/todo.png";
import CourseGoals from "./components/CourseGoals";
import NewGoal from "./components/NewGoal";

function App() {
  const [goals, setGoals] = useState([
    { id: 1, title: "Finish the course", description: "Complete all modules and exercises" },
    { id: 2, title: "Learn TypeScript", description: "Understand TypeScript basics and advanced concepts" },
    { id: 3, title: "Build a project", description: "Apply knowledge by building a real-world application" },
  ]);

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((g) => g.id !== id));
  }

  function handleAddGoal(text: string, summary: string) {
    setGoals(prevGoals => prevGoals.concat({
      id: Math.random(),
      title: text,
      description: summary
    }));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>List of things to do </h1>

      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}




export default App;
