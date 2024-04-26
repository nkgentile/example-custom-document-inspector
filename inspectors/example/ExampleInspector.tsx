import { Box, Card, Flex, Text } from "@sanity/ui";
import { type DocumentInspectorComponent } from "sanity";
import { DocumentInspectorHeader } from "sanity/structure";

const ExampleInspector: DocumentInspectorComponent = ({ onClose }) => {
  return (
    <Flex direction="column" height="fill" overflow="hidden">
      <DocumentInspectorHeader
        closeButtonLabel="Close custom inspector"
        onClose={onClose}
        title="Example inspector"
      />

      <Card flex={1} overflow="auto">
        <Box padding={4}>
          <Text size={1} muted>
            (Inspector contents)
          </Text>
        </Box>
      </Card>
    </Flex>
  );
};

export default ExampleInspector;
