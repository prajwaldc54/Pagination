import React, { useState } from 'react'
import {Box,
SimpleGrid,
Center,
Wrap,
WrapItem,
Avatar,
Button
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Slider from './Slider'

const Main = ({post}) => {
  const [show, setShow] = useState(3)
  const [pagination, setPagination] = useState({
    start: 0,
    end: show,
  })
  const onPage = (start,end) =>{
    setPagination({start:start, end:end})
  }
return (
    <>
    <Center>
    <SimpleGrid
    width={'80%'}
    columns={{ sm: 0, md: 3 }}
    spacing='8'
    p='10'
    rounded='lg'
    color='gray.400'
    >
    { 
       post.slice(pagination.start, pagination.end).map((d) => {

        return(
    <Box key={d.id}
    boxShadow='dark-lg' 
    p='6'
    rounded='md'
    bg='white'>
    <Center>
    <Wrap>
    <WrapItem>
    <Avatar
    name='Dan Abrahmov'
    src='https://bit.ly/dan-abramov'
    size={'2xl'} />
    </WrapItem>
    </Wrap>
    </Center>
    <Box p={'2'}>
    {d.name}
    </Box>
    <Box>
    <Button
    bg={'blue.600'}>
      <Link to={`/create-user/${d.id}`}>View Profile</Link>
    </Button>
    </Box>
    </Box>
    )
    })
    }    
    </SimpleGrid>
    </Center>
    <Box m={12}>
    <Slider
    show={show}
    onPage={onPage}
    total={post.length}/>
    </Box>
    </>
  )

}

export default Main