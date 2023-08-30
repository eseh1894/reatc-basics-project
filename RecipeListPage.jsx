import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = ({ recipe }) => {
  return (
    <Center h="100vh" bgColor={"blackAlpha.700"} flexDir="column">
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};
