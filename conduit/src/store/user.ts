import { createStore } from "vuex";

export interface State {
  count: number;
}

export const store = createStore<State>({
  state: {
    count: 0,
  },
});
