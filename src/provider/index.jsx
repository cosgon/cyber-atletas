import { HabitsProvider } from "./Habits";
import { GroupsProvider } from "./groups";
import {RegisterProvider} from './Register'; 

const Providers = ({ children }) => {
  return 
  <RegisterProvider>{children}</RegisterProvider>
  <GroupsProvider>
    <HabitsProvider>
      {children}
    </HabitsProvider>;
  </GroupsProvider>;
};
export default Providers;
