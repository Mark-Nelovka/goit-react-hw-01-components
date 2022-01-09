import PromptTypes from "prop-types";
import s from "./Transactions.module.css";
export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.trHead}>
          <th className={s.tD}>Type</th>
          <th className={s.tD}>Amount</th>
          <th className={s.tD}>Currency</th>
        </tr>
      </thead>
      {items.map(({ id, amount, currency, type }) => {
        return (
          <tbody key={id} className={s.tBody}>
            <tr className={s.tR}>
              <td className={s.tD}>{type}</td>
              <td className={s.tD}>{amount}</td>
              <td className={s.tD}>{currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
