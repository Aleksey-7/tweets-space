import { ThreeCircles } from 'react-loader-spinner';
import { Box } from './Loader.styled';

export const Loader = () => (
  <Box>
    <ThreeCircles
      height="100"
      width="100"
      color=" #5736a3"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </Box>
);
