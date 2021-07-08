/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/**
 *
 * @fileoverview Markdown components
 *
 * Based on https://github.com/mustaphaturhan/chakra-ui-markdown-renderer/blob/master/src/index.tsx
 */
// Lifted and adapted from https://github.com/codeday/www-codecup/blob/3fae548ec7d46530eb27ee86e8ede93cd6ed6ab3/src/components/Markdown/Components.tsx

//Imports
// import Code from '../Code/Code';
import {
  Components,
  ReactBaseProps,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";
import {
  As,
  Checkbox,
  Code,
  Divider,
  Heading,
  Image,
  Link,
  ListItem,
  OrderedList,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  UnorderedList,
} from "@chakra-ui/react";

//Header component wrapper
type HeaderProps = ReactBaseProps &
  ReactMarkdownProps & {
    level: number;
  };

const header = (props: HeaderProps) => {
  const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
  return (
    <Heading my={4} as={`h${props.level}` as As} size={sizes[props.level - 1]}>
      {props.children}
    </Heading>
  );
};

/**
 * Markdown component overrides
 */
const components = {
  //Paragraphs
  p: (props) => (
    <Text mb={8} fontSize={{ base: "md", xl: "lg" }}>
      {props.children}
    </Text>
  ),

  //Emphasized text
  em: (props) => <Text as="em">{props.children}</Text>,

  //Block quotes
  blockquote: (props) => {
    const { children } = props;
    return (
      <Code as="blockquote" p={2}>
        {children}
      </Code>
    );
  },

  //Code block
  code: (props) => {
    const { inline, children, className } = props;

    if (inline) {
      return <Code p={2} children={children} />;
    }

    return (
      <Code
        className={className}
        whiteSpace="break-spaces"
        d="block"
        w="full"
        p={2}
        children={children}
      />
    );
  },

  //Deleted text
  del: (props) => <Text as="del">{props.children}</Text>,

  //Thematic break
  hr: () => <Divider borderBottomWidth="2px" />,

  //Link
  a: (props) => <Link textDecoration="underline">{props.children}</Link>,

  //Image
  img: Image,

  //Text
  text: (props) => <Text as="span">{props.children}</Text>,

  //Unordered list
  ul: (props) => (
    <UnorderedList
      spacing={2}
      as="ul"
      marginLeft={0}
      mb={8}
      stylePosition="inside"
      styleType={props.depth == 1 ? "circle" : "disc"}
      fontSize={{ base: "md", xl: "lg" }}
    >
      {props.children}
    </UnorderedList>
  ),
  //Ordered list
  ol: (props) => (
    <OrderedList
      spacing={2}
      as="ol"
      marginLeft={0}
      stylePosition="inside"
      styleType="decimal"
      fontSize={{ base: "md", xl: "lg" }}
    >
      {props.children}
    </OrderedList>
  ),

  //List item
  li: (props) => (
    <ListItem listStyleType={props.checked != null ? "none" : "inherit"}>
      {props.checked != null ? (
        <Checkbox isChecked={props.checked} isReadOnly>
          {props.children}
        </Checkbox>
      ) : (
        props.children
      )}
    </ListItem>
  ),

  //Heading
  h1: header,
  h2: header,
  h3: header,
  h4: header,
  h5: header,
  h6: header,

  //Table
  table: Table,

  //Table header
  thead: Thead,

  //Table body
  tbody: Tbody,

  //Table row
  tr: (props) => <Tr>{props.children}</Tr>,

  //Table data cell
  td: (props) => <Td>{props.children}</Td>,

  //Table header cell
  th: (props) => <Th>{props.children}</Th>,
} as Components;

//Export
export default components;
