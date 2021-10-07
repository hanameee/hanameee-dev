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
            github
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
        웹 프론트엔드 개발자 해남이의 기술 블로그
        <br />
        <a href={`https://github.com/${social?.github || ``}`}>Github</a>
        {" | "}
        <a href={`https://twitter.com/${social?.twitter || ``}`}>Twitter</a>
      </p>
    </div>
  )
}

export default Bio
