import React from 'react'
import GatsbyImg from 'gatsby-image'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

const Background = ({ style }) => (
  <StaticQuery
    query={graphql`
      query {
        image: file(relativePath: { regex: "/page_background_end/"}) {
          childImageSharp {
            fluid(maxWidth: 2560) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={({ image }) => (
      <GatsbyImg
        backgroundColor={'#fff'}
        imgStyle={{
          objectPosition: 'top'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: -1,
          width: '101%',
          height: '100%',
          ...style
        }}
        alt='Background'
        fluid={image.childImageSharp.fluid}
      />
    )}
  />
)

Background.propTypes = {
  style: PropTypes.object
}

export default Background
