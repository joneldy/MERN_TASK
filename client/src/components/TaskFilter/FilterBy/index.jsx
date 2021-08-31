import React, { useContext } from 'react';
import cx from 'classnames';
import { TaskContext } from '../../../context/TaskContext';
import { VISIBILITY_FILTERS } from '../../../constants';
import './styles.scss';

const FilterBy = () => {
  const { filter: currentFilter, onChangeFilter } = useContext(TaskContext);

  return (
    <div className="visibility-filters">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        {Object.keys(VISIBILITY_FILTERS).map((filterKey, index) => {
          return (
            <button
              key={index}
              className={cx({
                btn: true,
                'btn-outline-primary': true,
                'btn-sm btn-filters': true,
                active: currentFilter === VISIBILITY_FILTERS[filterKey],
              })}
              onClick={() => onChangeFilter(VISIBILITY_FILTERS[filterKey])}
              type="button"
            >
              {filterKey}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBy;
