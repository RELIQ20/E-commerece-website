import React, { useState } from 'react'
import { Container, Heading, useColorModeValue,Box, VStack, Input, Button, useToast } from '@chakra-ui/react'
import { userProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setnewProduct]= useState({
    name: "",
    price: "",
    image: "",
  });

  const toast = useToast()
  const {createProduct} = userProductStore()
  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    if(success){
      toast({
        title: 'Success',
        description: message,
        status: 'success',
        isClosable: true
      })
    }else{
      toast({
        title: 'Error',
        description: message,
        status: "error",
        isClosable: true
      });
    }
    setnewProduct({ name : "", price : "", image : ""});
  }
  return (
    <>
    <Container maxW={"container.sm"}>
      
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>

        <Box 
          w={"full"} 
          bg={useColorModeValue("white", "gray.800")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) =>  setnewProduct({...newProduct, name: e.target.value})}
            />

            <Input
                placeholder='Price'
                name='price'
                value={newProduct.price}
                type='number'
                onChange={(e) =>  setnewProduct({...newProduct, price: e.target.value})}
              />

            <Input
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) =>  setnewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>Submit</Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
    </>
  )
}

export default CreatePage
    