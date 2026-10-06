import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "./components/ui/button";

function App() {
  return (
    <div>
      <Button text="Hello World" icon={ArrowRightIcon} />
      <Button variant="secondary" text="Hello World" icon={ArrowRightIcon} />
    </div>
  );
}

export default App;
