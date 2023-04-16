import { useState, ChangeEvent } from "react";
import InputText from "./InputText";

const LoginForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const [username, setUsername] = useState("");
  const [key, setKey] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="block space-y-3">
        <InputText
          label={"Username"}
          id={"username"}
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUsername(e.target.value)
          }
        />
        <InputText
          label={"Key"}
          id={"key"}
          value={key}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setKey(e.target.value)
          }
        />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className="bg-purple-800 hover:bg-purple-700  text-zinc-50  py-1.5 px-4 w-full border border-gray-800 rounded shadow"
          >
            START CHAT
          </button>
        </div>
      </div>
    </form>
  );
};
export default LoginForm;
