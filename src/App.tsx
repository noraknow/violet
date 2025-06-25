import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import KnowNora from './components/KnowNora.tsx';

const client = generateClient<Schema>();

function App() {

  return (
    <>
      <KnowNora />
    </>
  );
}

export default App;
