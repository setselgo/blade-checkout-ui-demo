import {
  Accordion,
  AccordionItem,
  AccordionItemBody,
  AccordionItemHeader,
  Amount,
  Box,
  Button,
  Card,
  CardBody,
  DatePicker,
  Divider,
  Heading,
  HistoryIcon,
  PackageIcon,
  PhoneNumberInput,
  RupeeIcon,
  SearchInput,
  StepGroup,
  StepItem,
  StepItemIcon,
  Switch,
  Tag,
  Text,
  TextArea,
  TextInput,
  ToastContainer,
  useToast,
} from "@razorpay/blade/components";
import React from "react";

const TwoColumnLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gap="spacing.5">
      {children}
    </Box>
  );
};
const StackLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box display="flex" flexDirection="column" gap="spacing.5">
      {children}
    </Box>
  );
};

const LeftContent = () => {
  const toast = useToast();

  return (
    <Box>
      <StepGroup
        marginBottom="spacing.8"
        size="medium"
        orientation="horizontal"
      >
        <StepItem
          marker={<StepItemIcon icon={PackageIcon} color="primary" />}
          isSelected
          title="Delivery"
        />
        <StepItem
          marker={<StepItemIcon icon={RupeeIcon} color="neutral" />}
          title="Payment"
        />
        <StepItem
          marker={<StepItemIcon icon={HistoryIcon} color="neutral" />}
          title="Review"
        />
      </StepGroup>
      <Box display="flex" flexDirection="column" gap="spacing.4">
        <Accordion maxWidth="100%" variant="filled">
          <AccordionItem>
            <AccordionItemHeader title="Contact Details" />
            <AccordionItemBody>
              <TwoColumnLayout>
                <TextInput label="First Name" />
                <TextInput label="Last Name" />
                <PhoneNumberInput
                  allowedCountries={["IN", "MY", "US"]}
                  placeholder="Enter phone number"
                  label="Phone Number"
                />
                <TextInput
                  label="Email"
                  type="email"
                  necessityIndicator="optional"
                />
              </TwoColumnLayout>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
        <Accordion maxWidth="100%" variant="filled">
          <AccordionItem>
            <AccordionItemHeader title="Shipping Details" />
            <AccordionItemBody>
              <StackLayout>
                <SearchInput
                  label="Address"
                  placeholder="Search Address"
                  name="address"
                  onChange={({ name, value }) => {
                    console.log({ name, value });
                  }}
                />
                <DatePicker label="Delivery Date" />
                <TextArea
                  label="Delivery Instructions"
                  placeholder="Any special instructions for delivery"
                  necessityIndicator="optional"
                />
              </StackLayout>
            </AccordionItemBody>
          </AccordionItem>
        </Accordion>
      </Box>

      <Button
        marginTop="spacing.10"
        variant="primary"
        color="primary"
        size="large"
        isFullWidth
        onClick={() => {
          toast.show({
            content: "Please fill the form to proceed",
            color: "negative",
          });
        }}
      >
        Proceed to Payment
      </Button>
    </Box>
  );
};

const RightContent = () => {
  return (
    <Box>
      <Box>
        <img
          style={{ aspectRatio: "16/9" }}
          width="100%"
          src="./thumbnail.png"
          alt="product"
        />
        <Box
          marginTop="spacing.7"
          display="flex"
          gap="spacing.3"
          flexDirection="column"
        >
          <Tag onDismiss={() => {}} size="medium">
            Label: “SAVE1000” applied
          </Tag>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading>Groovy Stickers Set</Heading>
            <Amount size="medium" weight="semibold" value={5000} />
          </Box>
        </Box>

        <Divider marginY="spacing.6" />

        <StackLayout>
          <Text as="label" weight="semibold">
            <Box display="flex" justifyContent="space-between">
              Send as gift
              <Switch marginLeft="auto" accessibilityLabel="Send as gift" />
            </Box>
          </Text>
          <StackLayout>
            <TextInput label="Recipient Email ID" />
            <TextArea label="Message" />
          </StackLayout>
        </StackLayout>
      </Box>
    </Box>
  );
};

function App() {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      backgroundColor="surface.background.gray.subtle"
    >
      <ToastContainer />
      <Card
        backgroundColor="surface.background.gray.moderate"
        margin="auto"
        height={{ base: "100%", l: "90vh" }}
        width={{ base: "100%", l: "80%" }}
        elevation="lowRaised"
        padding="spacing.0"
      >
        <CardBody height="100%">
          <Box
            overflow={{ base: "scroll", l: "hidden" }}
            width="100%"
            display="grid"
            gridTemplateColumns={{ base: "1fr", l: "1fr 40%" }}
            height="100%"
          >
            <Box
              height="100%"
              padding="spacing.8"
              overflow={{ base: undefined, l: "scroll" }}
            >
              <LeftContent />
            </Box>
            <Box
              borderLeftColor="surface.border.gray.muted"
              borderWidth="none"
              borderLeftWidth="thin"
              padding="spacing.11"
              backgroundColor="surface.background.gray.intense"
            >
              <RightContent />
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
}

export default App;
