import { Loader } from "lucide-react";

function Loading() {
  return (
    <div className="w-[90vw] h-screen flex-center">
      <Loader className="animate-spin" />
    </div>
  );
}

export default Loading;
