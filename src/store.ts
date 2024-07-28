import { create } from "zustand";

interface State {
  count: number;
  inc: () => void;
  name: string;
  fetchData: () => Promise<void>;
}

export const useStore = create<State>()((set) => ({
  count: 1,
  name: "Mickey",
  inc: () => set((state) => ({ count: state.count + 1 })),
  fetchData: async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    set({ name: data.title });
  },
}));
