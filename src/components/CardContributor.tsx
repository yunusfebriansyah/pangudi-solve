import { Heading, Box, Image, Flex, Text, Stack, Button, defineTextStyles } from '@chakra-ui/react'
import { Avatar } from "@/components/ui/avatar"
import { LuGithub, LuInstagram } from "react-icons/lu"
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

interface ContributorsProfile{
  name: string;
  avatarLink: string;
  jobDesk: string;
  githubLink: string;
  instagramLink: string;
}
interface Props{
  contributors : ContributorsProfile[]
}

export default function CardContributor({contributors} : Props) {  
  return (
    <>
      <Flex
        justifyContent={'center'}
        gap={'3'}
        wrap={'wrap'}
      >
      { contributors.map( (contributor, index) => (
        <Box
          key={index}
          flexBasis={{ 
            base: "100%",
            sm: "48%",
            md: "24%",
            lg: "24%",
           }}
          bg="gray.950"
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://plus.unsplash.com/premium_photo-1678565202188-f69b2e593998?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            objectFit="cover"
            alt="#"
          />
          <Flex justify={'center'} mt={-10}>
            <Avatar
              minW="80px"
              minH="80px"
              src={contributor.avatarLink}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box pb={6} pt={2}>
            <Stack align={'center'} mb={5}>
              <Heading textStyle={'xl'} fontWeight={500} fontFamily={'body'}>
                {contributor.name}
              </Heading>
              <Text
              as={'button'}
              bg={'orange.500'}
              textStyle={'sm'}
              color={'white'}
              px={3}
              py={1}
              rounded={'md'}
              >
                {contributor.jobDesk}
              </Text>
            </Stack>

            <Stack direction={'row'} justify={'center'}>
              <Button
                bg="white"
                color={'gray.950'}
                rounded={'md'}
                size="xs"
              >
                <a href={contributor.githubLink} target='_blank'>
                  <LuGithub />
                </a>
              </Button>

              <Button
                bg="white"
                color={'gray.950'}
                rounded={'md'}
                size="xs"
              >
                <a href={contributor.instagramLink} target='_blank'>
                  <LuInstagram />
                </a>
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </Flex>
    </>
  )
}