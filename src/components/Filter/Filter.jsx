import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Filter = ({ handleChange, filter }) => {
  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 130,
        position: 'absolute',
        right: 0,
        zIndex: 200,
      }}
      size="small"
    >
      <InputLabel id="demo-select-small-label" sx={{ color: 'white' }}>
        Filter
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={filter}
        label="Filter"
        onChange={handleChange}
        sx={{ color: '#5736a3' }}
      >
        <MenuItem value={' '}>show all</MenuItem>
        <MenuItem value={'false'}>follow</MenuItem>
        <MenuItem value={'true'}>followings</MenuItem>
      </Select>
    </FormControl>
  );
};
