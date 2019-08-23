import React, {useState} from 'react'

import {Select, MenuItem, FormControl, InputLabel} from '@material-ui/core'

const options = [
  {value: 10, label: 'Ten'},
  {value: 20, label: 'Twenty'},
  {value: 30, label: 'Thirty'}
]

export default function MyList() {
  const [selectedValue, setSelectedValue] = useState<string>('')

  return <div>
    <div>Selected Value: {selectedValue}</div>
    <FormControl>
      <InputLabel htmlFor="age">Age</InputLabel>
      <Select
        value={selectedValue}
        onChange={event => setSelectedValue(event.target.value as string)}
        inputProps={{name: 'age'}}
        style={{width: 150}}
      >
        {options.map(({value, label}) => <MenuItem key={value} value={value}>{label}</MenuItem>)}
      </Select>
    </FormControl>
  </div>

}

