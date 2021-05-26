import React from 'react'
import { connect } from 'react-redux'
import { CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardImage, CardDescriptions } from '../style/RickMortyStyledElements'


const RickMorty = (props) => {
    return (
        <CardWrapper>
          <CardHeader>
            <CardHeading>{props.rickMorty.name}</CardHeading>
            {console.log(props.rickMorty)}
            <CardBody>
              <CardFieldset>
                <CardImage src={props.rickMorty.image} />
              </CardFieldset>
              <CardFieldset>
                <CardDescriptions>Species: {props.rickMorty.species}</CardDescriptions>
              </CardFieldset>
              <CardFieldset>
                <CardDescriptions>Gender: {props.rickMorty.gender}</CardDescriptions>
              </CardFieldset>
              {/* <CardFieldset>
                <CardDescriptions>Location: {props.rickMorty.location.name}</CardDescriptions>
              </CardFieldset>
              <CardFieldset>
                <CardDescriptions>Featured in: {props.rickMorty.episode.length} Episodes</CardDescriptions>
              </CardFieldset> */}
              <CardFieldset>
                <CardDescriptions>Current Status? {props.rickMorty.status}</CardDescriptions>
              </CardFieldset>
            </CardBody>
          </CardHeader>
        </CardWrapper>
    )
}

const mapStateToProps = state => {
    return {
      rickMorty: state.rickMorty
    }
  }

export default connect(mapStateToProps, {})(RickMorty)
