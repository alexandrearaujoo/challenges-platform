import {
  ContainerTriggrer,
  Content,
  DropDownArrow,
  DropDownItem,
} from "./styles";
import * as DropDownMenu from "@radix-ui/react-dropdown-menu";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const AvatarWithMenu = () => {
  const { data, status } = useSession();

  return (
    <DropDownMenu.Root>
      <ContainerTriggrer>
        <Image
          src={data?.user?.image ? data.user.image : "/placeholder-user.svg"}
          objectFit="cover"
          layout="fill"
          alt="Imagem de perfil"
        />
      </ContainerTriggrer>
      <DropDownMenu.Portal>
        <Content>
          {status === "authenticated" ? (
            <DropDownItem onClick={() => signOut()}>Sair</DropDownItem>
          ) : (
            <DropDownItem onClick={() => signIn("github")}>Entrar</DropDownItem>
          )}
          <DropDownArrow />
        </Content>
      </DropDownMenu.Portal>
    </DropDownMenu.Root>
  );
};

export default AvatarWithMenu;
