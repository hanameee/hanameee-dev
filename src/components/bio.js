/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/lhn.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <p>
        해나미입니다. 웹 프론트엔드 개발자로 즐겁게 일하고 있습니다.
        <br />
        <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>
        {" | "}
        <a href={`https://github.com/${social?.github || ``}`}>Github</a>
      </p>
    </div>
  )
}

export default Bio
