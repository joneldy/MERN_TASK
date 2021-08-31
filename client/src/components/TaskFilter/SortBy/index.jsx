import React, { useContext } from 'react';
import { TaskContext } from '../../../context/TaskContext';
import { SORT_BY } from '../../../constants';
import './styles.scss';

const SortBy = () => {
  const { sortName, onChangeSort } = useContext(TaskContext);
  return (
    <div className="d-flex align-items-center sortby">
      <label className="label text-muted">Sort By</label>
      <select
        name="sortBy"
        className="form-select form-select-sm"
        onChange={(e) => onChangeSort(e.target.value)}
        value={sortName}
      >
        {Object.keys(SORT_BY).map((sortKey, index) => {
          const name = SORT_BY[sortKey];
          return (
            <option key={index} value={name}>
              {name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SortBy;
