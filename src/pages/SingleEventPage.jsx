import { Badge, Box, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { sectionCenterStyles } from '../GlobalStyles';
import { useParams } from 'react-router-dom';
import { meetupsData } from '../events-data';
import { findById } from '../utils';

const SingleEventPage = () => {
  const { eventId } = useParams();

  const eventToDisplay = meetupsData.meetups.find(findById(eventId));

  if (!eventToDisplay) {
    <Box as="main" p="2rem" sx={sectionCenterStyles}>
      <Text color="red.500" fontSize="1.1rem">
        Event Not found
      </Text>
    </Box>;
  }

  const {
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    isPaid,
    speakers,
    eventTags,
    eventType,
    hostedBy,
    additionalInformation,
  } = eventToDisplay;

  return (
    <Box as="main" p="2rem" sx={sectionCenterStyles}>
      <Box>
        <Heading as="h2">{title}</Heading>

        <Box my="1rem">
          <Text>Hosted By: </Text>
          <Text>{hostedBy}</Text>
        </Box>

        <Image my="1rem" h="15rem" src={eventThumbnail} alt={title} />

        <Box my="1rem">
          <Heading my="1rem" as="h3" fontSize="1.1rem">
            Details:
          </Heading>

          <Text mt="1rem">{eventDescription}</Text>
        </Box>

        <Box my="1rem">
          <Box my="1rem">
            <Heading my="1rem" as="h3" fontSize="1.1rem">
              Additional Information:
            </Heading>

            <Text mt="1rem">
              {Object.keys(additionalInformation).map((key, index) => (
                <Text key={index} display={'flex'} gap=".25rem">
                  {' '}
                  <Text textTransform={'capitalize'} fontWeight="semibold">
                    {key}:{' '}
                  </Text>
                  {additionalInformation[key]}
                </Text>
              ))}
            </Text>
          </Box>
        </Box>

        <Box>
          <Heading my="1rem" as="h3" fontSize="1.1rem">
            Event Tags:
          </Heading>

          <Box as="div" display={'flex'} gap="1rem">
            {eventTags.map((singleTag, index) => (
              <Badge
                p="1rem"
                borderRadius={'md'}
                key={index}
                variant="solid"
                colorScheme="red"
                textTransform={'lowercase'}
                letterSpacing={'wider'}
              >
                {singleTag}
              </Badge>
            ))}
          </Box>
        </Box>
      </Box>

      <Box></Box>
    </Box>
  );
};

export default SingleEventPage;
