import { FC } from "react";

const App: FC = () => {
  return (
    <div>
      <Welcome name="Charles" />
    </div>
  );
};

interface WelcomeProps {
  name: string;
}
const Welcome: FC<WelcomeProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default App;
