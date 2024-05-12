import Layout from "@/components/document/layout";
import menuItems from "@/config/menuItems";
import { MenuRender } from "@/types/sidebarTypes";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<MenuRender> = async () => {
    return {
      props: {
        menuItems,
      },
    };
  };

const CommandPage = ({ menuItems }: MenuRender) => {
  return (
    <Layout menuItems={menuItems}>
      command Page !!!
    </Layout>
  );
};

export default CommandPage;
