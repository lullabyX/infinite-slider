const Box: React.FC<{ no: number }> = ({ no }) => {
  return (
    <div className="flex justify-center items-center border h-[150px] w-[150px] bg-gray-800">
      <div className="text-5xl text-gray-300">{no}</div>
    </div>
  );
};

export default Box;
