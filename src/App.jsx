import { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const StyledButton = styled(Button)(({ ischecked }) => {
  return {
    width: '300px',
    background: `${ischecked ? 'green' : 'red'}`,
  };
});

// const StyledSlider = styled(Slider, {
//   shouldForwardProp: (prop) => prop !== 'success',
// })(({ success, theme }) => ({
//   width: 300,
//   ...(success && {
//     color: theme.palette.success.main,
//     '& .MuiSlider-thumb': {
//       [`&:hover, &.Mui-focusVisible`]: {
//         boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//       },
//       [`&.Mui-active`]: {
//         boxShadow: `0px 0px 0px 14px ${alpha(
//           theme.palette.success.main,
//           0.16
//         )}`,
//       },
//     },
//   }),
// }));

function App() {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  console.log('theme', theme);

  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <Checkbox checked={checked} onChange={handleChecked} />
      <StyledButton variant="contained" ischecked={checked}>
        Hello World
      </StyledButton>
      <h1>Hello</h1>
      <Typography variant="h2">Welcome to React</Typography>
      <h2>Welcome to React</h2>
    </div>
  );
}

export default App;
