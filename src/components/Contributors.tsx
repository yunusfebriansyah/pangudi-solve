import { Heading, Container } from "@chakra-ui/react"
import Particle from "./Particle"
import CardContributor from "./CardContributor"
export default function Contributors()
{

  const contributors = [
      {
        name: "Yunus Febriansyah",
        avatarLink: "https://res.cloudinary.com/dzsvqz2fz/image/upload/v1737890651/WhatsApp_Image_2025-01-26_at_18.20.57_ldxa0i.jpg",
        jobDesk: "Backend Developer",
        githubLink: "https://github.com/yunusfebriansyah",
        instagramLink: "https://www.instagram.com/yunusfebriansyah_",
      },
      {
        name: "M Rizky Fadhilah",
        avatarLink: "https://res.cloudinary.com/dzsvqz2fz/image/upload/v1737890629/IMG_1001_fpk1ps.jpg",
        jobDesk: "Frontend Developer",
        githubLink: "https://github.com/rizky-boolean",
        instagramLink: "https://www.instagram.com/m.rizky_fadhilah",
      },
    ]

  return(
    <>
      <Particle />
      <Container
      py="8"
      maxW={'5xl'}
      overflow="hidden" 
      height="100vh"
      >
        <Heading
            fontWeight={600}
            textStyle="3xl"
            fontSize={{ base: "1xl", sm: "2xl", md: "3xl"}}
            mb="6"
            textAlign="center">
            Contributors
          </Heading>
          <CardContributor contributors={contributors}/>
        </Container>
    </>
  )
}