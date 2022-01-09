import TransactionHistory from "./Transaction/Transactions";
import transactions from "./transactions.json";
export default function TransactionsApp() {
  return <TransactionHistory items={transactions} />;
}
