import { FidgetSpinner } from "react-loader-spinner";

const Spinner = () => (
  <div className="flex justify-center items-center h-full">
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="fidget-spinner-loading"
      wrapperStyle={{}}
      wrapperClass="fidget-spinner-wrapper"
    />
  </div>
);

export default Spinner;
