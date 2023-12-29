import { FunctionMap } from "@/lib/types";

/**
 * @description Type Assertation is necessary for typescript to not give errors
 */
const functions: FunctionMap = {
  test: (props) => {
    return ("test" as string) + (props as string);
  },
};

export const run = (name: string, props?: unknown) => {
  const func = functions[name];
  if (func) {
    return func(props);
  }
};
