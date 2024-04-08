/** @format */

export default function Incomeexpense({ income, expense }) {
  return (
    <div className="flex w-full justify-around bg-white shadow-md py-5">
      <div className="border border-r-gray-300 border-white w-1/2 text-center">
        <h2 className="text-xl">INCOME</h2>
        <p className="text-xl text-green-500">₹{income}.00</p>
      </div>
      <div className="w-1/2 text-center border border-l-gray-300 border-white ">
        <h2 className="text-xl">EXPENSE</h2>
        <p className="text-xl text-red-500">₹{expense}.00</p>
      </div>
    </div>
  );
}
