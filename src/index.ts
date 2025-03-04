// Export all commands
import * as commands from "./commands";

// Export types
import * as types from "./types";

// Export printer class
import { TSPLPrinter } from "./printer";

// Named exports for ES modules
export { commands, types, TSPLPrinter };
export * from "./types";

// Default export for browser usage
const TSPLGenerator = {
  commands,
  ...types,
  TSPLPrinter,
};

export default TSPLGenerator;
