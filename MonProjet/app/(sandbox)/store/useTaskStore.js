import { create } from 'zustand';

const useTaskStore = create((set, get) => ({
  tasks: [],
  taskCounter: 1,

  addTask: () => {
    const newTask = {
      id: Date.now(),
      text: `Tache ${get().taskCounter}`,
      completed: false
    };
    
    set((state) => ({
      tasks: [...state.tasks, newTask],
      taskCounter: state.taskCounter + 1
    }));
  },

  deleteTask: (id) => {
    set((state) => ({
      tasks: state.tasks.filter(task => task.id !== id)
    }));
  },

  toggleTask: (id) => {
    set((state) => ({
      tasks: state.tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  }
}));

export default useTaskStore;