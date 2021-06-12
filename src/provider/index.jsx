import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./groups";

const Providers = ({ children }) => {
  return (
    <GroupsProvider>
      <HabitsProvider>{children}</HabitsProvider>;
    </GroupsProvider>
  );
};
export default Providers;
