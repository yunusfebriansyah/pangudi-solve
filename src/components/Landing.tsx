import { Box, Heading, Container as ChContainer, Text, Button, Stack, defineTextStyles } from "@chakra-ui/react"
import Particle from "./Particle"
import { useNavigate } from 'react-router-dom'

export const textStyles = defineTextStyles({
  body: {
    description: "The body text style - used in all text",
    value: {
      fontFamily: "Inter",
      textDecoration: "None",
      textTransform: "None",
    },
  },
})
function Landing()
{
  const navigate = useNavigate()
  return (
    <>
      <Particle />
      <ChContainer
      maxW={'3xl'}
      overflow="hidden" 
      height="90vh"
      >
        <Stack
          as={Box}
          textAlign={'center'}
          mb="5"
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            textStyle="7xl"
            fontSize={{ base: "4xl", sm: "5xl", md: "7xl"}}
            mb="3">
            Pangudi
            <Text as={'span'} color={'orange.500'}>
              Solve
            </Text>
          </Heading>
          <Text textStyle="xs">
            Discover the future of intelligent problem-solving with pangudiSolve, where advanced AI transforms your questions into actionable insights. Designed for individuals and businesses alike, pangudiSolve simplifies complexity and delivers clarity at the speed of thought.
          </Text>
          <Stack
            direction={'column'}
            mb="5"
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              px={6}
              textStyle="none"
              my="8"
              onClick={() => navigate('/solve')}>
              Get Started
            </Button>

            <Button
              fontWeight={200}
              px={6}
              textStyle="none"
              mt="150px"
              bg="none"
              color="gray.300"
              onClick={() => navigate('/contributors')}>
              Our Contributors
            </Button>

          </Stack>
        </Stack>
      </ChContainer>
    </>
  )
}

export default Landing