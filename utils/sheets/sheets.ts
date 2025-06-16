import { registerSheet, SheetDefinition } from "react-native-actions-sheet";
import AddIntakeSheet from "./AddIntakeSheet";

registerSheet("add-intake-sheet", AddIntakeSheet)

declare module 'react-native-actions-sheet' {
  interface Sheets {
    'add-intake-sheet': SheetDefinition<{
      payload: {
        refresh: string;
      };
    }>;
  }
}
 
export { };

