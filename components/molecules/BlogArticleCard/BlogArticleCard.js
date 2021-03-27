import StyledWrapper from './BlogArticleCard.styles';
import PropTypes from 'prop-types';
import Tag from 'components/atoms/Tag/Tag';

const BlogArticleCard = ({ image, title, tags, createdAt }) => (
  <StyledWrapper>
    <img src={image.url} alt={image.alt} />

    <div className="container">
      <time dateTime={createdAt}>12.03.2021</time>
      <h2 className="title">{title}</h2>
      <div className="tags-container">
        {tags.map((content, id) => (
          <Tag content={content} key={id} />
        ))}
      </div>
    </div>
  </StyledWrapper>
);

BlogArticleCard.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default BlogArticleCard;
