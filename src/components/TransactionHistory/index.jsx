import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className="w-screen flex flex-col items-center py-10 border-2">
      <thead className="border-2">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className="border-x-2">
        {items.map(i => (
          <tr key={i.id}>
            <td>{i.type}</td>
            <td>{i.amount}</td>
            <td>{i.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default TransactionHistory;
