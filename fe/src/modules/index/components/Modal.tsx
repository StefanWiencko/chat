import { Link } from "react-router-dom";

const Modal = () => (
  <div className="mx-auto flex flex-col gap-4 items-center p-6 max-w-[200px] border-solid border border-MAIN-indygo bg-MAIN-lapis rounded-md">
    <h1>Enter your name</h1>
    <input className="max-w-[150px] p-1 rounded-md" />
    <Link className="bg-slate-400" to="chat">
      Enter
    </Link>
  </div>
);

export default Modal;
