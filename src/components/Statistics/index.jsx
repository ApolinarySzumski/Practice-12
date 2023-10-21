import PropTypes from 'prop-types';

const Statictics = ({ title, stats }) => {
  return (
    <section className="p-16 w-screen flex flex-col items-center gap-10">
      <h2 className="text-xl font-bold tracking-wide leading-6 text-amber-950">
        {title}
      </h2>

      <ul className="flex">
        {stats.map(s => (
          <li
            key={s.id}
            className="flex flex-col gap-4 px-6 py-8 odd:bg-orange-200 even:bg-green-300"
          >
            <span className="text-lg font-medium leading-4 text-center text-emerald-700">
              {s.label}
            </span>
            <span className="text-base font-normal leading-3 text-center text-slate-800">
              {s.percentage}%
            </span>
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
