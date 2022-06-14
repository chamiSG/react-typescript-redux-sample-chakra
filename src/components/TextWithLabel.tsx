import {
  Flex,
  Text,
  Badge
} from "@chakra-ui/react"

import { ITextWithlabel } from "types";

function TextWithLabel({ label, text, isBadge, badgeColor }: ITextWithlabel) {

  return (
    <Flex gap={6} alignItems={'center'}>
      <Text color={'gray.500'} fontSize={'md'}>
        {label}
      </Text>
      {!isBadge &&
        <Text fontSize={'md'}>
          {text}
        </Text>
      }
      {isBadge &&
        <Badge rounded="full" px="2" fontSize="xs" textTransform="capitalize" colorScheme={badgeColor}>
          {text}
        </Badge>
      }
    </Flex>
  )
}
export default TextWithLabel
