import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Rodrigo Polim</Text>
          <Text color="gray.300" fontSize="small">
            rodrigobpolim@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rodrigo Polim" src="http://github.com/rbpolim.png"/>
    </Flex>
  )
}