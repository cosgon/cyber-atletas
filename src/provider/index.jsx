import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./groups";
import { RegisterProvider } from "./Register";
const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <GroupsProvider>
        <HabitsProvider>
          {children}
        </HabitsProvider>
      </GroupsProvider>
    </RegisterProvider>
  );
};
export default Providers;
