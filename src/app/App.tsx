import { sendIpcMessage } from "@/lib/utils";

function App() {
  const example = async () => {
    const data = await sendIpcMessage({ function: "test", props: "1" });
    console.log(data);
  };
  example();

  return <></>;
}
export default App;
