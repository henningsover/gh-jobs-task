import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  height: 100vh;
  position: relative;
`;
