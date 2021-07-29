import * as React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Blog', to: '/blog' }
  ]
  return (
    <main className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          {
            navItems.map(({label, to}) => (
                <li key={label} className={navLinkItem}>
                  <Link to={to} className={navLinkText}>{label}</Link>
                </li>
            ))
          }
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
