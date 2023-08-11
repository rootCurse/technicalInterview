import {
  Avatar,
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { ReactComponent as Mail } from '../Icons/Mail.svg';
import { ReactComponent as Phone } from '../Icons/Phone.svg';
import { PhotoContainer } from './PhotoContainer';

const photos = [
  { id: '0', path: '/Photo/Image.png' },
  { id: '1', path: '/Photo/Image2.png' },
  { id: '2', path: '/Photo/Image3.png' },
  { id: '3', path: '/Photo/Image3.png' },
  { id: '4', path: '/Photo/Image.png' },
  { id: '5', path: '/Photo/Image2.png' },
]; /*fetch('https://boiling-refuge-66454.herokuapp.com/images').then(
  response => {
    return response.json();
  }
);*/

const photosComponents = photos.map(photo => (
  <PhotoContainer id={photo.id} path={photo.path} />
));

export const MainContainer = () => {
  return (
    <>
      <Stack alignItems={'center'}>
        <Image></Image>
        <HStack>
          <HStack gap={'20px'} mr={'10vw'} mb={'1vh'}>
            <Avatar size={'lg'}></Avatar>
            <Text
              fontFamily={'Inter'}
              fontSize={'24px'}
              fontStyle={'normal'}
              fontWeight={'700'}
              lineHeight={'32px'}
            >
              Ricardo Cooper
            </Text>
          </HStack>
          <HStack gap={'16px'}>
            <Button leftIcon={<Mail />}> Message </Button>
            <Button leftIcon={<Phone />}> Call </Button>
          </HStack>
        </HStack>
        <Grid templateColumns={'repeat(3, 1fr)'} gap={'32px'}>
          {photosComponents}
        </Grid>
      </Stack>
    </>
  );
};
