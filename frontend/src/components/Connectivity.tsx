import { Radio } from "lucide-react";

const Connectivity = (props: { status: string }) => {
  return (
    <>
      <Radio className="pr-2 text-sky-500" width={30} height={30} />
      <h2 className="text-center text-green-600">{props.status}</h2>
    </>
  );
};

export default Connectivity;
