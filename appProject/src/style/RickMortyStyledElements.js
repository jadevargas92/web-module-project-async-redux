import styled from 'styled-components'

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0 32px;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`

export const CardHeading =styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

export const CardButton = styled.button`
  display: block;
  width: 10%;
  padding: 12px 0;
  margin: 48px auto 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #1EC61C;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

export const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
`

export const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

export const CardDescriptions = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;
`

export const CardImage = styled.img`
  height: 60%;
  width: 80%;
  margin: auto;
  display: flex;
`