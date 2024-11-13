import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { SimpleGrid,
Button,
Box,
Center
} 
from '@chakra-ui/react';
const Add = () => {
  const [status, setStatus] = useState()
        const [formData, setFormData] = useState({
          name:"",
          username:"",
          email:"",
          address:"",
          number:""
        });
          const change = (e) => {
            setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          })
          }

        async function add(e){
          e.preventDefault()
          try{
          await axios.post(`http://localhost:3000/users`, formData)
          setStatus(true)
            }catch(error){
              console.log("Something went wrong")
            } 
        }
        if (status){
          return <Add/>
        }
        return (
          <>
            <Box w={'100%'} m={5}>
            <Center>
            <SimpleGrid spacing={'20'}>
              
            <input id="name" placeholder="name" name="name"onChange={e=> change(e)} />
            <input id="name" placeholder="username" name="username"onChange={e=> change(e)} />
            <input id="email" placeholder="email" name="email" onChange={e=> change(e)} />
            <input id="address" placeholder="address" name="address" onChange={e=> change(e)} />
            <input id="number" placeholder="number" name="number" onChange={e=> change(e)} />
            <Button onClick={e =>{add(e)}}>Add Users</Button>
            </SimpleGrid>
            </Center>
            </Box>
          </>
        );
      };

export default Add