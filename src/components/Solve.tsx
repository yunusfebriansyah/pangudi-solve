import { useState, useEffect, useRef } from "react"
import { Container, Box, VStack, IconButton, Text, Flex, Button, Heading, Textarea, Stack, Group, createListCollection } from "@chakra-ui/react"
import { LuArrowDown, LuSendHorizontal } from "react-icons/lu"
import Groq from "groq-sdk"
import Particle from "./Particle"
import MarkdownDisplay from "@/components/MarkdownDisplay"
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValueText } from "@/components/ui/select"

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
})

export async function main(question: string): Promise<string> {
  const chatCompletion = await getGroqChatCompletion(question)
  
  // Mengembalikan string jika ada, atau pesan default jika tidak ada
  return chatCompletion.choices[0]?.message?.content || "limit sudah habis, harap mencoba lagi nanti."
}

export async function getGroqChatCompletion(question: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    model: "llama3-8b-8192",
  })
}

// Definisikan tipe untuk pesan
type Message = {
  id: number
  text: string
  sender: "user" | "ai"
}

const frameworks = createListCollection({
  items: [
    { label: "Bahasa Indonesia", value: "id" },
    { label: "English Language", value: "en" },
  ],
})

let addAssignmentMessage = '. tolong jawab dengan bahasa indonesia!'

export default function Solve() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Halo! Saya PangudiSolve. Apa yang bisa dibantu hari ini?",
      sender: "ai",
    },
  ])
  const [inputValue, setInputValue] = useState<string>("")
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false)

  // Ref untuk scrolling
  const messagesEndRef = useRef<HTMLDivElement | null>(null)
  const messagesContainerRef = useRef<HTMLDivElement | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10
      setShowScrollButton(!isAtBottom)
    }
  }

  useEffect(() => {
    const container = messagesContainerRef.current
    if( container ){
      container.addEventListener("scroll", handleScroll)
    }
    scrollToBottom()
  }, [messages])


  const handleSendMessage  = async () => {
    if (inputValue.trim() === "") return
    // Tambahkan pesan pengguna
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
    }
    
    // Tambahkan respon AI (disederhanakan)
    const aiResponse: Message = {
      id: messages.length + 2,
      text: await main(inputValue + addAssignmentMessage),
//       text : `
// # Title Pertama
// ## Hello World: A Comprehensive Guide

// ### Introduction
// This is a **detailed** markdown document exploring various *formatting* options and syntax.

// ### Code Demonstration
// Inline code: \`console.log("Hello, World!")\` 

// Code block with syntax highlighting:
// \`\`\`javascript
// function greetWorld() {
//   const message = "Hello, World!";
//   console.log(message);
//   return message;
// }
// \`\`\`

// ### Lists
// - First item
// - Second item
// - Third item
// - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

// ### Table
// | Feature | Description | Status |
// |---------|-------------|--------|
// | Markdown | Lightweight markup language | Active |
// | Rendering | Convert text to formatted HTML | Supported |
// | Syntax | Easy to read and write | Excellent |

// `,
      sender: "ai",
    }

    setMessages([...messages, userMessage, aiResponse])
    setInputValue("")
    
  }

  return (
    <>
      <Particle />
      <Container h={{ base: "90vh", sm: "100vh" }} display="flex" flexDirection="column">
        <VStack flex="1" overflowY="auto" py={4} ref={messagesContainerRef} scrollbar={'hidden'}>
          <Heading
            fontWeight={600}
            textStyle="4xl"
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl"}}
            mb="1">
            Pangudi
            <Text as={'span'} color={'orange.500'}>
              Solve
              <Text as={'span'}
                color="white"
                fontSize="sm"
                textStyle="sm"
                ms={1}
              >
                v.1.2
              </Text>
            </Text>
          </Heading>

          <SelectRoot variant='outline' collection={frameworks} size='xs'
            maxW={{ 
              base: "70%",
              sm: "20%"
            }}
            onValueChange={(item) => {
              if (item.value.toString() == 'en')
                addAssignmentMessage = '. please answer with english language!'
            }}
           >
            <SelectTrigger>
              <SelectValueText placeholder="Bahasa Indonesia" />
            </SelectTrigger>
            <SelectContent>
              {frameworks.items.map((lang) => (
                <SelectItem item={lang} key={lang.value}>
                  {lang.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>

          {messages.map((msg) => (
            <Flex
              key={msg.id}
              alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
              maxW="80%"
            >
              <Box
                  bg={msg.sender === "user" ? "orange.500" : "gray.950"}
                  color="white"
                  borderWidth="1px"
                  px={5}
                  py={2}
                  maxW={'89vw'}
                  borderRadius="sm"
                  fontSize="sm"
                >
                  <MarkdownDisplay text={msg.text} />
                </Box>
            </Flex>
          ))}
          {/* Elemen kosong untuk referensi scroll */}
          <div ref={messagesEndRef}/>
        </VStack>

        {/* Tombol Scroll to Down */}
          {showScrollButton && (
          <Button
            position="absolute"
            bottom="80px"
            left="50%"
            transform="translateX(-50%)"
            colorScheme="blue"
            onClick={scrollToBottom}
            zIndex={10}
            p="4"
            rounded="full"
            boxShadow="md"
            size="xs"
          >
            <LuArrowDown />
          </Button>
          )}

        <Stack>
          <Group attached>
          <Textarea
            autoresize
            maxH="5lh"
            placeholder="Tanyakan disini ..."
            value={inputValue}
            borderColor="gray.500"
            bg="gray.950"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <IconButton colorScheme="blue" onClick={handleSendMessage} h={'full'}>
            <LuSendHorizontal />
          </IconButton>
        </Group>
        </Stack>
      </Container>
    </>
  )
}
