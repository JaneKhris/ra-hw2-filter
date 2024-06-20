import PropTypes from 'prop-types'

export function Toolbar(props) {
  const filters = props.filters
  const handleClick = props.onSelectFilter
  const selected = props.selected

  const getClassName = (filter) => {
    if (filter === selected) {
      return 'filter filter_activate'
    } else {
      return 'filter'
    }
  }

  return (
    <>
    <div className='filters_container'>{filters.map((i) => (
        <div onClick={handleClick} className={getClassName(i)} key={i}>{i}</div>
    ))}</div>
    </>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.array,
  onSelectFilter: PropTypes.func,
  selected: PropTypes.string,
};
