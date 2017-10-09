import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <img
              height="40px"
              className="navbar-brand mb-0"
              src="img/umee.png"
            />
          </Link>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            {/* <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={
                  location.pathname === '/profile/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/profile/" className="nav-link">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/blog/" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
