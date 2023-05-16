import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';
import {getRandomHexColor} from 'components/utilita/renderHex'

export const Statistics = ({title, stats}) => {
    return (
    <section class="statistics">
          {title && <h2 className={css.title}>{title}</h2>}
    <ul class="stat-list">
{stats.map(({id, label, percentage}) => {
 return (
 <li class="item" key={id} style={{backgroundColor:{getRandomHexColor}}}>
        <span class="label">.{label}</span>
        <span class="percentage">{percentage}%</span>
      </li>)
})}
    </ul>
  </section>)
}

Statistics.propTypes = {
    title:PropTypes.string.isRequired,
    stats:PropTypes.arrayOf(
        PropTypes.shape({
            label:PropTypes.string.isRequired,
            percentage:PropTypes.number.isRequired})
    ).isRequired
}