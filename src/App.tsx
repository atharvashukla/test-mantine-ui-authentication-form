import { MantineProvider } from "@mantine/core";
import { AuthenticationForm } from "./AuthenticationForm";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthenticationForm></AuthenticationForm>
    </MantineProvider>
  );
}
