import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css';



export const TransactionHistory = ({items}) => {
    return (
        <table className={css.tablet}>
  <thead>
    <tr className={css.trName}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({type, amount, currency, id}) => {
 return (
 <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
</tr>)

    })}
    
  </tbody>
</table>
    )
}

TransactionHistory.protoType = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}