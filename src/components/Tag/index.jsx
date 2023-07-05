import "./_tag.scss"
import PropTypes from 'prop-types'

function Tag({tags}) {

  const tagList = tags.map((tag) =>
    <li key={tag.toString()} className="k-tag">{tag}</li>)

  return (
    <ul className='k-tag-wrapper'>{tagList}</ul>
  )
}

Tag.propTypes = {
  tags: PropTypes.array
}

export default Tag 