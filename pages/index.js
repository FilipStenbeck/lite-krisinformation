import Head from 'next/head';
import '@fontsource/roboto/';
import Typography from '@mui/material/Typography';
import { NewsItem } from '../components/news-item';

const Home = ({ data }) => {
  return (
    <div style={main}>
      <Head>
        <title>Lite krisinformation</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Typography variant="h4" gutterBottom component="div">
        Krisinformation
      </Typography>
      <ul>
        {data.Entries.map((news) => (
          <NewsItem key={news.ID} item={news} />
        ))}
      </ul>
    </div>
  );
};

const main = {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

export async function getServerSideProps() {
  const res = await fetch(`http://api.krisinformation.se/v1/feed`);
  const data = await res.json();
  return { props: { data } };
}

export default Home;
