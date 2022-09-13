import { Button, Container, TextField, Typography } from '@mui/material'

import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid'
import { spaceContext } from '../ParkingContext';

export interface Model {
    id : number;
    name : string;
 }

const Home = () => {
    const [space, setSpace] = useState<any>('')
    // const [parkingSpace, setParkingSpace] = useState<any[]>([])
    const { setParkingSpace} = useContext(spaceContext)
    // console.log('123--',parkingSpace)

    const navigate = useNavigate()

    const changeHandler =  (event : ChangeEvent<HTMLInputElement>) : void => {
        setSpace(event.target.value)
      }

      const onClickSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
       let dummy = []
        for(let i = 1; i <= space; i++){
            const newObject = {
                id: Math.floor(Math.random() * 10000),
                carNumber: '',
                available: true,
                date: new Date()
            }
            dummy.push(newObject)
        }
        setParkingSpace(dummy)
        navigate('/parking')
      }


  return (
    <Container 
    sx={{
        width: 400,
        height: 400,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "70px",
        backgroundColor: 'rgb(236, 231, 240)',
        boxShadow: '13px 18px 22px lightBlue inset'
      }}>
        <Typography variant='h4'>Parking Management</Typography>
      <TextField type='text'
      label='Enter no of spaces' 
      value={space} name='country'
      role="inputEl"
      data-testid='parking-create-text-input'
      onChange={changeHandler}
      sx={{mt: 2}}  />
      <Button onClick={onClickSubmit}
      data-testid='parking-create-submit-button'
       sx={{border: '1px solid gray', 
       textAlign: 'center', padding: 1,
        width: 250, borderRadius: 3,
        color: 'solid blue', cursor: 'pointer',
        mt: 4}}>Submit</Button>
    </Container>
  )
}

export default Home
