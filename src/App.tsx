import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";

function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
        
      </Header>
      <CourseGoals goals={[
        { id: 1, title: "Learn TS", description: "Description for goal 1" },
        { id: 2, title: "Goal 2", description: "Description for goal 2" },
        { id: 3, title: "Goal 3", description: "Description for goal 3" },
      ]} />
    </main>
  );
}




export default App;
