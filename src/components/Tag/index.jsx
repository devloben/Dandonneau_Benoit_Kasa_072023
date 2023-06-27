import "./_tag.scss"

function Tag(props) {
  const tags = props.tags 

  const tagList = tags.map((tag) =>
    <li key={tag.toString()} className="k-tag">{tag}</li>)


  return (
    <ul className='k-tag-wrapper'>{tagList}</ul>
  )
}

export default Tag