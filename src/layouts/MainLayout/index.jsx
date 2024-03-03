import classnames from 'classnames'

function MainLayout(props) {
  const { children } = props
  const className = classnames('MainLayout')

  return <div className={className}>{children}</div>
}

export default MainLayout
