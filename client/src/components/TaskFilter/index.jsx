import React from 'react';
import FilterBy from './FilterBy';
import SortBy from './SortBy';

const TaskFilter = () => {
  return (
    <div className="d-flex justify-content-start">
      <FilterBy />
      <SortBy />
    </div>
  );
};

export default TaskFilter;
