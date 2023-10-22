import List from "./components/List";
import TaskForm from "./components/TaskForm";

const App = () => {
  return (
    <div>
      <header>
        <h1 className="main-title">DeerDiary</h1>
      </header>

      <main>
        <TaskForm />

        <List />
      </main>
    </div>
  );
};

export default App;
