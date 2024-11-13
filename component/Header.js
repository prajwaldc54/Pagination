import React from 'react'
import {Text,
Center,
Divider,
SimpleGrid,
Box,
Button
 } from '@chakra-ui/react'
 import { 
useNavigate } 
from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
        <SimpleGrid
        columns={3}>
        <Box w={'20%'} p={'3'}>
        <img 
        src='https://www.clipartmax.com/png/full/232-2321430_manchester-united-kit-logo-man-u.png'
        alt='logo'>
        </img>
        </Box>
        <Box>
        <Text  fontSize={'5xl'}>
        Pagination
        </Text>
        <Center>
        <Divider
        orientation='horizontal'
        borderColor={'blue'}
        height={'1%'}
        width={'8%'}/>
        </Center>
        </Box> 
        <Box p={'3'}>
        <Button onClick={() => navigate('/add-user')}>Add user</Button>
        </Box>
        </SimpleGrid>
    </>
  )
}

export default Header