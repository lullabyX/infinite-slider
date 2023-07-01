const SmolBox: React.FC<{ i: number }> = ({ i }) => {
  return (
    <div>
      <div className="flex flex-row gap-[10px] ">
        <div className="flex flex-col gap-[10px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center border border-gray-800 bg-slate-300">
            {i}
          </div>
          <div className="flex h-[70px] w-[70px] items-center justify-center border border-gray-800 bg-slate-300">
            {i}
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex h-[70px] w-[70px] items-center justify-center border border-gray-800 bg-slate-300">
            {i}
          </div>
          <div className="flex h-[70px] w-[70px] items-center justify-center border border-gray-800 bg-slate-300">
            {i}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmolBox;
