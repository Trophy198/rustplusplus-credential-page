import Code from '../../code/code';
import Heading from '../../heading/heading';
import Heading2 from '../../heading2/heading2';
import Paragraph from '../../paragraph/paragraph';
import PreFormatted from '../../preFormatted/preFormatted';
import Strong from '../../strong/strong';
import Table from '../../table/table';
import TableColumn from '../../tableColumn/tableColumn';
import TableHeader from '../../tableHeader/tableHeader';
import TableRow from '../../tableRow/tableRow';
import styles from '../common.module.css';

const InstallationSection = () => {
  return (
    <section className={styles.container}>
      <Heading>Installation Documentation</Heading>
      <Heading2>Required Software</Heading2>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>Program</TableHeader>
            <TableHeader>Version</TableHeader>
            <TableHeader>Download</TableHeader>
            <TableHeader>Note</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableColumn>
              <Code>NodeJs</Code>
            </TableColumn>
            <TableColumn>&gt;= 16.9</TableColumn>
            <TableColumn>
              <a target="_blank" href="https://nodejs.org/en/download/">
                <Strong>here</Strong>
              </a>
            </TableColumn>
            <TableColumn>Since discordjs v14 is used, the version needs to be at least 16.9.</TableColumn>
          </TableRow>
          <TableRow>
            <TableColumn>
              <Code>Git</Code>
            </TableColumn>
            <TableColumn>Any</TableColumn>
            <TableColumn>
              <a target="_blank" href="https://git-scm.com/downloads">
                <Strong>here</Strong>
              </a>
            </TableColumn>
            <TableColumn>&nbsp;</TableColumn>
          </TableRow>
        </tbody>
      </Table>
      <Heading2>Optional Software</Heading2>
      <Paragraph>
        To enable step-trace for cargoship and patrol helicopter,{' '}
        <a target="_blank" href="http://www.graphicsmagick.org/download.html">
          GraphicsMagick
        </a>{' '}
        needs to be downloaded.
      </Paragraph>
      <Heading2>Clone the repository</Heading2>
      <Paragraph>
        Open a terminal &#40;<Code>Git Bash</Code> / <Code>CMD</Code> / <Code>Terminal</Code> / <Code>PowerShell</Code>{' '}
        or similar &#41; and run the following commands:
      </Paragraph>
      <PreFormatted>
        $ git clone https://github.com/alexemanuelol/rustplusplus.git <br />$ cd rustplusplus <br />$ npm install
      </PreFormatted>
    </section>
  );
};

export default InstallationSection;
