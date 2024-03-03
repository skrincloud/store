import classnames from 'classnames'
import './ExpandedLayout.css'

function ExpandedLayout(props) {
  const { children, centered } = props
  const className = classnames('ExpandedLayout', {
    'ExpandedLayout--centered': centered,
  })

  return <div className={className}>{children}</div>
}

export default ExpandedLayout
