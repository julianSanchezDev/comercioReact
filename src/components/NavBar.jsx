import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


const NavBar = () => {
  return (
    
<Box bg='' w='100%' h='100px' p={4} className='prueba'>
  <Flex>
    <Spacer/>
      <Box p='4'>
         <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                      Menu
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Quienes Somos</MenuItem>
                      <MenuItem>Productos</MenuItem>
                      <MenuItem>Donde estamos?</MenuItem>
                      <MenuItem>Medios de Pago</MenuItem>
                    </MenuList>
                  </Menu>
       </Box>
  <Spacer />

  <Box p='4'> 
        <CartWidget/>
  </Box>

</Flex>
                 
                 
</Box>

                 
                  
                 
   
  )
}

export default NavBar