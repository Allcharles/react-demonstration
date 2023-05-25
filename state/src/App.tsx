import { FC, useState } from "react";

const App: FC = () => {
  // count is not a state variable, changes wont cause updates in the component
  let count = 1;
  // name is a state variable, changes will cause updates
  const [name, setName] = useState<string>("Charles");

  function incrementCount() {
    count = count += 1;
    console.log("The count is now " + count);
  }

  return (
    <div>
      <Welcome name={name} />
      <FormInput name={name} onChange={(value) => setName(value)} />
      <br />
      <p>Current Count: {count}</p>
      <button type="button" onClick={incrementCount}>
        Press to increment count
      </button>
    </div>
  );
};

interface WelcomeProps {
  name: string;
}
const Welcome: FC<WelcomeProps> = ({ name }) => {
  return <p>Hello {name}</p>;
};

interface FormInputProps {
  name: string;
  onChange: (name: string) => void;
}
const FormInput: FC<FormInputProps> = ({ name, onChange }) => {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default App;
