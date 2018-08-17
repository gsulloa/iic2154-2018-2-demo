import styled from "styled-components/native"

export const Title = styled.Text`
  font-size: 30
`

export const Text = styled.Text`
  color: ${props => props.important ? "red" : "black"};
`