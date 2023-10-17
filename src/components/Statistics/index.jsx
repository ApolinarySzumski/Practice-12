import PropTypes from 'prop-types';

const Statictics = ({ title, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(s => (
          <li key={s.id} class="item">
            <span class="label">{s.label}</span>
            <span class="percentage">{s.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statictics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    {
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }.isRequired
  ).isRequired,
};

export default Statictics;
