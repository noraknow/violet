import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

function App() {
  const { signOut } = useAuthenticator();

  return (
    <>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default App;
