#!/usr/bin/env node
import { Box, render, Text } from 'ink';
import SelectInput from 'ink-select-input';

import { Toolee } from './Toolee';

const Terminal = () => {
  return (
    <Box flexDirection="column" alignItems="flex-start">
      <Toolee humor="excited" />
      <Box flexDirection="column">
        <Text color="green">
          {`Hello World!!! My name is `}
          <Text color="cyan">Toolee</Text>.
        </Text>
        <Text>{`I'am here to guide you into the complex world of the JavaScript tooling.`}</Text>
      </Box>
      <SelectInput
        items={[
          {
            label: 'First',
            value: 'first',
          },
          {
            label: 'Second',
            value: 'second',
          },
          {
            label: 'Third',
            value: 'third',
          },
        ]}
        onSelect={console.log}
      />
    </Box>
  );
};

render(<Terminal />);
