/** @format */

export default function Balance({ income, expense }) {
  return (
    <>
      <div>
        <p className="font-medium text-lg">Your balance</p>
        <h4 className="text-3xl font-semibold">
          ₹{(income + expense).toFixed(2)}
        </h4>
      </div>
    </>
  );
}
