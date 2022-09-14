/* eslint-disable react/no-children-prop */
import { useState } from "react";
import { Container, Content, InstructionsContainer } from "./styles";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import { useRouter } from "next/router";

interface Props {
  instructions: string;
}

const ChallengeSideBar = ({ instructions }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };

  return (
    <Container isOpen={isOpen}>
      {!isOpen && (
        <button onClick={() => setIsOpen(true)}>
          <BsFillArrowLeftSquareFill />
        </button>
      )}

      <Content>
        <header>
          <div>
            <button onClick={goToHome}>back to home</button>
            <button onClick={() => setIsOpen(false)}>hide panel</button>
          </div>
          <h1>Challenge To do List</h1>
        </header>
        <InstructionsContainer
          children={instructions}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula as any}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </Content>
    </Container>
  );
};

export default ChallengeSideBar;
