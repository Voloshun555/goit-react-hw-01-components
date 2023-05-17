import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';


function randomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }



export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
          {title && <h2 className={css.title}>{title}</h2>}
    <ul className={css.statsList}>
{stats.map(({id, label, percentage}) => {
 return (
 <li className={css.statsItem} key={id} style={{ backgroundColor: randomHexColor() }}>
        <span>{label}</span>
        <span>{percentage}%</span>
      </li>)
})
}
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