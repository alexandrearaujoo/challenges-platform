import sdk, { VM } from "@stackblitz/sdk";
import { useCallback, useEffect, useRef } from "react";
import { Container } from "./styles";

const AUTOSAVE_IN_MS = 10000;

interface Props {
  embedId: string;
  setInstructions: (instructions: string) => void;
}

const CodeEditor = ({ setInstructions, embedId }: Props) => {
  const vm = useRef<VM | null>(null);
  const loadVm = useCallback(async () => {
    vm.current = await sdk.embedProjectId("embed", embedId, {
      openFile: "src/App.tsx",
    });

    const snapshot = await vm.current.getFsSnapshot();

    if (snapshot) {
      const instructions = snapshot["README.md"];
      setInstructions(instructions);
    }

    const storageData = localStorage.getItem(`savedData:${embedId}`);

    if (storageData) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      const data = JSON.parse(storageData);
      await vm.current.applyFsDiff({
        create: {
          ...data,
        },
        destroy: [],
      });
    }
  }, [embedId, setInstructions]);

  useEffect(() => {
    loadVm();
  }, [loadVm]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (!vm.current) return;

      const snapshot = await vm.current.getFsSnapshot();

      if (snapshot) {
        localStorage.setItem(`savedData:${embedId}`, JSON.stringify(snapshot));
      }
    }, AUTOSAVE_IN_MS);

    return () => {
      clearInterval(interval);
    };
  }, [embedId]);

  return <Container id="embed" />;
};

export default CodeEditor;
