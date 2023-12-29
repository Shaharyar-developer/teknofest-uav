export type responseType<T> = {
  status: "success" | "error";
  data: T;
};
