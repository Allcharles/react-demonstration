import { FC } from "react";

const App: FC = () => {
  const name = "Charles";

  return (
    <div>
      <Welcome name={name} />
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
