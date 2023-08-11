import {
  Image,
  Box,
  Text,
  VStack,
  Textarea,
  Button,
  Modal,
  ModalBody,
  useDisclosure,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import { Photo } from '../components/Photo';
import React from 'react';
import { handleForm } from './handleForm';

export const PhotoContainer = props => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [value, setValue] = React.useState('');
  let handleInputChange = evt => {
    let inputValue = evt.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Box>
        <Image src={props.path} onClick={onOpen}></Image>
        <Text>{props.id}</Text>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <VStack>
              <Image src={props.path}></Image>
              <VStack>
                <Text>Comment</Text>
                <Textarea value={value} onChange={handleInputChange}></Textarea>
                <Text>Write a few sentences about the photo.</Text>
                <Button
                  onClick={(handleForm(value), onClose)}
                  bgColor={'#4F46E5'}
                >
                  Save
                </Button>
              </VStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
