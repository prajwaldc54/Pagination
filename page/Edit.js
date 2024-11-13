import React, { useEffect, useState } from 'react'
import { 
Box,
Button,
Center,
Input,
Text
} 
from '@chakra-ui/react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
const Edit = () => {
  const navigate = useNavigate()
    const { id } = useParams()
    const [state,setState] = useState({
        name: "",
        username: "",
        email: "",
        address: "",
        number: ""
    })
    useEffect(()=> {
      async function all() {
        try{
        const sabai = await axios.get(`http://localhost:3000/users/${id}`)
        setState(sabai.data)
        }catch(error){
          console.log("Something went wrong")
        }
      }
        all()
      }, [])

    const change = (e) => {
      setState({
      ...state,
      [e.target.name]: e.target.value
    })
    }
    async function add(e){
      e.preventDefault()
      try{
      await axios.put(`http://localhost:3000/users/${id}`, state)
      navigate("/")
      // setStatus(true)
        }catch(error){
          console.log("Something went wrong")
        } 
    }
  return (
    <>
    <Box w={'80%'} h={'100%'} m={'5'}>
        <Center>
        <Box h={'30%'} bg='gray'>
        <Text color={'white'}>
        Edit the user Details
        </Text>
        </Box>
        </Center>
        <Center>
        <Box h={'50%'} >
        <Input variant='outline' placeholder='Name' value={state.name} name='name' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='Username' value={state.username} name='username' onChange={e => change(e)}/>
        <Input variant='outline' placeholder='E-mail' value={state.email} name='email' onChange={e => change(e)}/>
        {/* <Input variant='outline' placeholder='Address'/> */}
        <Input variant='outline' placeholder='Phone' value={state.phone} name='phone' onChange={e => change(e)}/>
        </Box>
        </Center>
        <Box h={'20%'}>    
        <Button
        colorScheme={'messenger'}
        onClick={e => add(e)}>
         Update
        </Button>
        </Box>
        
    </Box>
    </>
  )
}

export default Edit