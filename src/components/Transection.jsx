/** @format */

export default function Transection({ text, amount, date }) {
  let color = Number(amount) < 0 ? "bg-red-500" : "bg-green-500";

  return (
    <>
      <div className=" my-3 bg-white shadow-md flex justify-between">
        <div className="flex flex-col justify-around w-full">
          <div className="flex justify-between px-2">
            <p className="text-gray-800">{text}</p>
            <p className="text-gray-800">₹ {amount}</p>
          </div>
          <div className={`text-gray-700 text-xs px-2`}>{date}</div>
        </div>
        <span className={`w-2 h-20 ${color}`}></span>
      </div>
    </>
  );
}
