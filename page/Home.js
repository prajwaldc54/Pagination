import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import axios from 'axios'
import Header from '../component/Header';
import Main from '../component/Main';
const Home = () => {
    const [posts, setPosts] = useState([])
  useEffect(()=> {
    all()
  }, [])
async function all() {
  try{
  const sabai = await axios.get("http://localhost:3000/users")
    setPosts(sabai.data)
  }catch(error){
    console.log("Something went wrong")
  }
}
  return (
    <>
    <Box h={'100vh'} bg='gray.50'>
        <Box w={'100%'} h={'20%'}>
      <Header/>
      </Box>
      <Box w={'100%'} h={'80%'}>
      <Main 
        post={posts}/>
      </Box>
      </Box>
    </>
  )
}

export default Home