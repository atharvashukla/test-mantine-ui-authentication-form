# test-mantine-ui-authentication-form

Create a react app with typescript support on the Desktop

```
cd ~/Desktop/
npx create-react-app test-mantine-ui-authentication-form --template typescript
```

Install mantine packages using Yarn

```
cd test-mantine-ui-authentication-form 
yarn add @mantine/core @mantine/hooks @mantine/form @emotion/react
```

Replace `App.tsx` with:

```
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}
```

Copy the code for the "Authentication form" example into the body of the MantineProvider. [Site link](https://ui.mantine.dev/category/authentication#authentication-form), [github link](https://github.com/mantinedev/ui.mantine.dev/blob/master/components/AuthenticationForm/AuthenticationForm.tsx).


Other edits:
- add @mantine/ds
- add @tabler/icons
- Add social buttons from ui.mantine.dev
- Add GoogleIcon.tsx and FacebookIcon.tsx
- Remove index.css, and other unused template files.
- Insert `Paper` into a `<Container size="sm" p="xl">` for formatting.

