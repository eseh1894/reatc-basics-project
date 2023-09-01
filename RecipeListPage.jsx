import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import RecipeCard from "../components/ui/RecipeCard";

export const RecipeListPage = ({ clickFn }) => {
  return (
    <Center h="100vh" bgColor={"blackAlpha.700"} flexDir="column">
      {data.hits.map((recipe) => (
        <RecipeCard clickFn={clickFn} item={recipe} key={recipe.label} />
      ))}
      <Heading>Your Recipe App</Heading>
    </Center>
  );
};
