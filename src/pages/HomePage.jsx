import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userProductStore } from '../store/product'
import ProductCard from '../componenets/components/ProductCard.jsx'


const HomePage = () => {
  
  const { fetchProducts, products } = userProductStore();

    useEffect(() =>{
      console.log("Fetchind products...");
      fetchProducts();
    }, [fetchProducts]);

  console.log("products", products);
  
  return (
  <Container maxW='container.xl' py={12}>
    <VStack spacing={8}>
      <Text 
        fontSize={{ base: "22", sm: "28" }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text">  

      Current Products
      </Text>

      <SimpleGrid
        columns={{base: 1, md: 2, lg: 3}}
        spacing={10}
        w={'full'}//NAGFITCONTENT KO
        >

       {products.map((product) => (
       <ProductCard key={product._id} product={product} />
       
       ))} 
        
        
        </SimpleGrid>

      {products.length === 0 && (
        <Text 
          fontSize = 'xl'
          fontWeight={"bold"}
          textAlign={"center"}>

            No Products Found 😒{" "}
          
            <Link to={"/create"}>
              <Text as='span' color='blue.500' _hover={{ textDecoration: "underline"}}>
                Create a product
              </Text>
            </Link>
        </Text>  
      )}
    </VStack>
  </Container>)
}

export default HomePage
