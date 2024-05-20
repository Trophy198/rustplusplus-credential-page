import Blockquote from '@/components/blockquote/blockquote';
import Code from '@/components/document/code/code';
import Heading2 from '@/components/document/heading2/heading2';
import Table from '@/components/document/table/table';
import TableColumn from '@/components/document/tableColumn/tableColumn';
import TableHeader from '@/components/document/tableHeader/tableHeader';
import TableRow from '@/components/document/tableRow/tableRow';
import Image from 'next/image';

const CredentialsCommand = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <>
      <Heading2 id="credentials">/credentials</Heading2>
      <Blockquote>Add/Remove the FCM Credentials for the user account.</Blockquote>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>SubCommand</TableHeader>
            <TableHeader>Options</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Required</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>add</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Add FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_private_key</Code>
            </TableColumn>
            <TableColumn>Keys Private Key.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_public_key</Code>
            </TableColumn>
            <TableColumn>Keys Public Key.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>keys_auth_secret</Code>
            </TableColumn>
            <TableColumn>Keys Auth Secret.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>fcm_token</Code>
            </TableColumn>
            <TableColumn>FCM Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>fcm_push_set</Code>
            </TableColumn>
            <TableColumn>FCM Push Set.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_token</Code>
            </TableColumn>
            <TableColumn>GCM Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_android_id</Code>
            </TableColumn>
            <TableColumn>GCM Android ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_security_token</Code>
            </TableColumn>
            <TableColumn>GCM Security Token.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>gcm_app_id</Code>
            </TableColumn>
            <TableColumn>GCM App ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>True</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>hoster</Code>
            </TableColumn>
            <TableColumn>Should be hoster.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>remove</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Remove FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>show</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Show all registered FCM Credentials.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>set_hoster</Code>
            </TableColumn>
            <TableColumn> </TableColumn>
            <TableColumn>Set the hoster.</TableColumn>
            <TableColumn> </TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn> </TableColumn>
            <TableColumn>
              <Code>steam_id</Code>
            </TableColumn>
            <TableColumn>Steam ID.</TableColumn>
            <TableColumn>
              <Code>False</Code>
            </TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Image src={imageUrl} alt="credentials-slash-command" placeholder="blur" />
    </>
  );
};

export default CredentialsCommand;
