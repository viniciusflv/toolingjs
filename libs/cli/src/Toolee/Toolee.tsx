import { Box, Text } from 'ink';

const humors = {
  excited: `\\(^ o ^)/`,
  ouch: `(> _ <)`,
  happy: `(o ᴗ o)`,
  sad: `(- ︵ -)`,
};

type TooleeProps = {
  humor?: keyof typeof humors;
};

export const Toolee = ({ humor = `happy` }: TooleeProps) => {
  return (
    <Box
      flexDirection="column"
      alignItems="center"
      borderStyle="round"
      borderColor="green"
      padding={1}
    >
      <Text color="green">{humors[humor]}</Text>
    </Box>
  );
};
