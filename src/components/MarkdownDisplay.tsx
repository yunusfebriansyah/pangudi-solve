import { Text, Heading, defineTextStyles, Link, Em, Code, Table  } from "@chakra-ui/react"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"


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

interface MarkdownProps{
  text: string;
}

function removeThinkTag(text: string): string {
  return text.replace(/^<think>.*?<\/think>\s*/is, '').trim()
}


function MarkdownDisplay({text} : MarkdownProps)
{
  return (

    <ReactMarkdown 
  remarkPlugins={[remarkGfm]}
  components={{ 
    h1: ({ node, ...props }) => (
      <Heading textStyle={'3xl'} mb={1} {...props} />
    ),
    h2: ({ node, ...props }) => (
      <Heading textStyle={'2xl'} mb={1} mt={2} {...props} />
    ),
    h3: ({ node, ...props }) => (
      <Heading textStyle={'xl'}  mb={1} mt={2} {...props} />
    ),
    h4: ({ node, ...props }) => (
      <Heading textStyle={'lg'}  mb={1} mt={2} {...props} />
    ),
    h5: ({ node, ...props }) => (
      <Heading textStyle={'md'}  mb={1} mt={2} {...props} />
    ),
    h6: ({ node, ...props }) => (
      <Heading textStyle={'sm'}  mb={1} mt={2} {...props} />
    ),
    p: ({ node, ...props }) => (
      <Text textStyle={'sm'} {...props} />
    ),
    a: ({ node, href, ...props }) => (
      <Link
        textStyle={'sm'}
        textDecoration={'underline'}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      />
    ),
    em: ({ node, ...props }) => (
      <Em textStyle={'sm'} {...props} />
    ),
    ul: ({ node, ...props }) => (
      <ul style={{ paddingLeft: "20px", listStyleType: "disc" }} {...props} />
    ),
    ol: ({ node, ...props }) => ( // Ordered List Support
      <ol style={{ paddingLeft: "20px", listStyleType: "decimal" }} {...props} />
    ),
    li: ({ node, ...props }) => (
      <li style={{ marginLeft: "18px" }} {...props} />
    ),
    code: ({ children }) => (
      <Code py={2} px={4} my={2} maxW={'full'} overflowX={'auto'}>
        {children}
      </Code>
    ),
    table: ({ node, ...props }) => (
      <Table.ScrollArea borderWidth="1px" maxW="xl">
        <Table.Root showColumnBorder textStyle={'sm'} {...props} />
      </Table.ScrollArea>
    ),
    th: ({ node, ...props }) => (
      <Table.ColumnHeader textStyle={'sm'} fontWeight={600} {...props} />
    ),
    td: ({ node, ...props }) => (
      <Table.Cell textStyle={'sm'} {...props} />
    )
  }}
>
  {removeThinkTag(text)}
</ReactMarkdown>


  )
}

export default MarkdownDisplay