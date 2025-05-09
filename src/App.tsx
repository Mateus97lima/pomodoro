import "./styles/theme.css";
import "./styles/global.css";

import { TaskContextProvider } from "./Contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagerContainer";
import { MainRouters } from "./routers/MainRouters";


export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
       <MainRouters/>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
