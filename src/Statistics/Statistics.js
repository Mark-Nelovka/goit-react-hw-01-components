import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title ? <h2 className={s.title}>{title}</h2> : ""}
      <ul className={s.list}>
        {stats.map((data) => {
          return (
            <li className={s.item} key={data.id}>
              <span className="label">{data.label}</span>
              <span className="percentage"> {data.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
