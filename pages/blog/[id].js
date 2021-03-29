import { gql } from '@apollo/client';
import client from 'apolloClient';
import Page from 'components/templates/Page/Page';
import Article from 'components/organisms/Article/Article';
import PropTypes from 'prop-types';

const ArticlePage = ({ articleData }) => (
  <Page headerImage={articleData.image.url}>
    <Article {...articleData} />
  </Page>
);

ArticlePage.propTypes = {
  articleData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export const getServerSideProps = async (context) => {
  const { data } = await client.query({
    query: gql`
    {
      article(filter: { id: { eq: ${context.params.id} } }) {
        image {
          url
          alt
        }
        createdAt
        title
        tags
        content
      }
    }
    `,
  });

  return {
    props: {
      articleData: data.article,
    },
  };
};

export default ArticlePage;