import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import
{Box,
Text,
Center,
Table,
Thead,
Tbody,
Tr,
Th,
Td,
TableContainer,
Button,
SimpleGrid
} 
from '@chakra-ui/react'
import { useParams, Link, useNavigate } from 'react-router-dom';
const Create = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState([])
  useEffect(()=> {
    async function all() {
      try{
      const sabai = await axios.get(`http://localhost:3000/users/${id}`)
        setPost(sabai.data)
      }catch(error){
        console.log("Something went wrong")
      }
    }
    all()
  }, [])

  const { id } = useParams()

  const handleDelete = async id =>{
    await axios.delete(`http://localhost:3000/users/${id}`)
    navigate("/")
  }

  return (
    <>
    <Center>
  <Box h={'70%'} w={'70%'} m={'25'}>
   <Text fontSize={'4xl'}>
     User Details
     </Text>
     <TableContainer mt={'12'}>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Username</Th>
        <Th>Email</Th>
        <Th>Address</Th>
        <Th isNumeric>Phone</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>{post.name}</Td>
        <Td>{post.username}</Td>
        <Td>{post.email}</Td>
        <Td isNumeric>{post.phone}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
  </Box>  
  </Center>
  <Center>
  <Box w={'70%'} h={'70%'}>
   <SimpleGrid columns={2} spacing={1}> 
   <Box>
  <Button 
  colorScheme={'facebook'}
  >
    <Link to={`/edit/${post.id}`}>Edit User</Link>
  </Button>
  </Box>
  <Box>
  <Button 
  colorScheme={'red'}
  onClick={() => handleDelete(post.id)}>
    Delete
  </Button>
  </Box>
  </SimpleGrid>
  </Box>
  </Center>
    </>
  )
}

export default Create